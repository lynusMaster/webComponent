import Component from "../core/Component.js";

export default class Header extends Component {
  setup() {
  }
  template() {
    return `
      <div>
        헤더
        <div>
          <span class="history" route="/main">main</span>
          <span class="history" route="/pll">pll</span>
        </div>
      </div>
    `
  }
  setEvent() {
  }
}

