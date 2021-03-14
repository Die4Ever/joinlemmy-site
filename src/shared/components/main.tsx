import { Component } from "inferno";
import { Link } from "inferno-router";
import { Helmet } from "inferno-helmet";
import { DonateLines } from "./donate-lines";

const title = "Lemmy - A link aggregator for the fediverse";

export class Main extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  joinServer() {
    return (
      <Link className="button primary" to="/join">
        Join a Server
      </Link>
    );
  }

  runServer() {
    return (
      <a
        class="button primary"
        href="/docs/en/administration/administration.html"
      >
        Run a Server
      </a>
    );
  }

  render() {
    return (
      <div>
        <Helmet title={title}>
          <meta property={"title"} content={title} />
        </Helmet>
        <div class="bg-image"></div>
        <div class="container">
          <div class="text-center">
            <h1 class="stylized">Lemmy</h1>
            <h4>A link aggregator for the fediverse.</h4>
            <div class="row is-horizontal-align">
              <div class="col-2-lg">{this.joinServer()}</div>
              <div class="col-2-lg">{this.runServer()}</div>
            </div>
          </div>
        </div>

        <br />

        <div class="container">
          <div class="text-center">
            <h2>Follow communities anywhere in the world</h2>
            <p>
              <a href="https://github.com/LemmyNet">Lemmy</a> is similar to
              sites like <a href="https://reddit.com">Reddit</a>,{" "}
              <a href="https://lobste.rs">Lobste.rs</a>, or{" "}
              <a href="https://news.ycombinator.com/">Hacker News</a>: you
              subscribe to communities you're interested in, post links and
              discussions, then vote and comment on them. Lemmy isn't just a
              reddit alternative; its a network of interconnected communities
              ran by different people and organizations, all combining to create{" "}
              <b>a single, personalized front page</b> of your favorite news,
              articles, and memes.{" "}
            </p>
            <p>{this.joinServer()}</p>
          </div>
        </div>
        <br />

        <div class="bg-success">
          <br />

          <div class="container">
            <div class="row">
              <div class="col-4">
                <div>
                  <header class="is-center">
                    <img
                      height={180}
                      src="/static/assets/images/review_pic.webp"
                    />
                  </header>
                  <br />
                  <h4 class="text-center">Open Source</h4>
                  <p>
                    Lemmy is and will always remain free,{" "}
                    <a href="https://github.com/LemmyNet">open source</a>{" "}
                    software, using the strong{" "}
                    <a href="https://en.wikipedia.org/wiki/Copyleft">
                      copyleft
                    </a>{" "}
                    <a href="https://github.com/LemmyNet/lemmy/blob/master/LICENSE">
                      AGPL License
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div class="col-4">
                <div>
                  <header class="is-center">
                    <img
                      height={180}
                      src="/static/assets/images/code_pic.webp"
                    />
                  </header>
                  <br />
                  <h4 class="text-center">Blazing Fast</h4>
                  <p>
                    Made using some of the fastest frameworks and tools,
                    including <a href="https://www.rust-lang.org">Rust</a>,{" "}
                    <a href="https://actix.rs/">Actix</a>,{" "}
                    <a href="http://diesel.rs/">Diesel</a>,{" "}
                    <a href="https://infernojs.org">Inferno</a>, and{" "}
                    <a href="https://www.typescriptlang.org/">Typescript</a>.
                  </p>
                </div>
              </div>
              <div class="col-4">
                <div>
                  <header class="is-center">
                    <img
                      height={180}
                      src="/static/assets/images/mod_pic.webp"
                    />
                  </header>
                  <br />
                  <h4 class="text-center">Powerful Mod Tools</h4>
                  <p>
                    Each server can set its own moderation policy, to help
                    foster a healthy environment where all can feel comfortable
                    contributing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />

          <div class="container">
            <div class="text-center">
              <h2>Create your own discussion platform</h2>
              <p>
                With Lemmy, you can{" "}
                <a href="/docs/en/administration/administration.html">
                  easily host your own server
                </a>
                , and all these servers are <i>federated</i> (think email), and
                connected to the same universe, called the{" "}
                <a href="https://en.wikipedia.org/wiki/Fediverse">Fediverse</a>.
                For a link aggregator, this means that someone registered on one
                server can subscribe to communities elsewhere, and can have
                discussions with people on a completely different server.
              </p>
              <p>{this.runServer()}</p>
            </div>
          </div>
          <br />
        </div>

        <br />

        <div class="container">
          <div class="row">
            <div class="col-6">
              <h4>Live Updates</h4>
              <p>
                New comments and posts stream in to your front page and inbox;
                No more page refreshes required.
              </p>
            </div>
            <div class="col-6 is-center">
              <video height={325} autoPlay loop>
                <source src="/static/assets/images/reply_vid.webm" />
              </video>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div class="container">
          <div class="row">
            <div class="col-6 is-center">
              <img height={325} src="/static/assets/images/mobile_pic.webp" />
            </div>
            <div class="col-6">
              <h4 class="is-marginless">More Features</h4>
              <ul class="is-marginless">
                <li>
                  Self hostable, easy to deploy, via{" "}
                  <a href="/docs/en/administration/install_docker.html">
                    Docker
                  </a>
                  , or{" "}
                  <a href="/docs/en/administration/install_ansible.html">
                    Ansible
                  </a>
                  .
                </li>
                <li>Clean, mobile-friendly interface.</li>
                <li>User avatar support.</li>
                <li>
                  Full vote scores <code>(+/-)</code> like old Reddit.
                </li>
                <li>Themes, including light, dark, and solarized.</li>
                <li>
                  Emojis with autocomplete support. Start typing <code>:</code>
                </li>
                <li>
                  User tagging using <code>@</code>, Community tagging using{" "}
                  <code>!</code>.
                </li>
                <li>Integrated image uploading in both posts and comments.</li>
                <li>Notifications, including via email.</li>
                <li>
                  <a href="https://weblate.yerbamate.ml/projects/lemmy/lemmy/">
                    i18n / internationalization support for &gt; 30 languages.
                  </a>
                </li>
                <li>
                  RSS / Atom feeds for <code>All</code>, <code>Subscribed</code>
                  , <code>Inbox</code>, <code>User</code>, and{" "}
                  <code>Community</code>.
                </li>
                <li>
                  Can fully erase your data, replacing all posts and comments.
                </li>
                <li>NSFW post / community support.</li>
              </ul>
            </div>
          </div>
        </div>

        <br />
        <div class="bg-success">
          <br />
          <div class="container">
            <div class="text-center">
              <h2>
                <a href="/sponsors">Support / Donate</a>
              </h2>
              <DonateLines />
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
