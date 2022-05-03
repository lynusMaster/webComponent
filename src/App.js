import Component from "./core/Component.js";
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js";

export default class App extends Component {

  setup () {
  }

  template () {
    return `
      <header data-component="header"></header>
      <main data-component="content"></main>
      <footer data-component="footer"></footer>
    `;
  }

  mounted () {
    const $header = this.$target.querySelector('[data-component="header"]');
    const $content = this.$target.querySelector('[data-component="content"]');
    const $footer = this.$target.querySelector('[data-component="footer"]');

    new Header($header, {
    });
    new Content($content, {
    });
    new Footer($footer, {
    });
  }
}
