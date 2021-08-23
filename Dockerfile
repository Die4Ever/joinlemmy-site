# Build the docs
FROM rust:slim as docs
WORKDIR /app
RUN cargo install mdbook \
  --git https://github.com/Nutomic/mdBook.git \
  --branch localization \
  --rev 0982a82
COPY lemmy-docs ./lemmy-docs
RUN mdbook build lemmy-docs -d ../docs

# Build the typedoc API docs
FROM node:14-alpine as api
WORKDIR /app
COPY lemmy-js-client lemmy-js-client
WORKDIR /app/lemmy-js-client
RUN yarn
RUN yarn docs

# Build the isomorphic app
FROM node:14-alpine as builder
RUN apk update && apk add yarn python3 build-base gcc wget git --no-cache

WORKDIR /app

# Cache deps
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile

# Build
COPY tsconfig.json \
  webpack.config.js \
  .babelrc \
  generate_translations.js \
  ./

COPY joinlemmy-translations joinlemmy-translations
COPY lemmy-translations lemmy-translations
COPY src src

# Copy the docs and API
COPY --from=docs /app/docs ./src/assets/docs
COPY --from=api /app/lemmy-js-client/docs ./src/assets/api

RUN yarn
RUN yarn build:prod

FROM node:14-alpine as runner
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules

EXPOSE 1234
WORKDIR /app
CMD node dist/js/server.js
