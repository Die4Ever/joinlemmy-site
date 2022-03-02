import { Component } from "inferno";
import { Link } from "inferno-router";
import { Helmet } from "inferno-helmet";
import { i18n } from "../i18next";
import { isBrowser } from "../utils";
import { news_md } from "../translations/news";

const title = i18n.t("news");
const newsReversed = news_md.reverse();

export class News extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  componentDidMount() {
    if (isBrowser()) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div>
        <Helmet title={title}>
          <meta property={"title"} content={title} />
        </Helmet>
        <div class="container">
          <h1>{title}</h1>
          <ul>
            <li>
              <Link to="/releases">{i18n.t("releases")}</Link>
            </li>
            {newsReversed.map(v => (
              <li>
                <Link to={`news_item/${v.title}`}>{v.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
