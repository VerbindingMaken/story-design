export class SearchBox extends HTMLElement {
  shadow: ShadowRoot;
  styleSheet = document.createElement("style");
  input = document.createElement("input");
  leftSlot = document.createElement("slot");
  rightSlot = document.createElement("slot");

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    this.initSearchBox();
  }

  // Methods

  static get observedAttributes() {
    return ["disabled", "placeholder", "size", "value"];
  }

  attributeChangeCallback(
    name: string,
    oldValue: string | number,
    newValue: string | number
  ) {
    if (name === "disabled") {
      this.input.disabled = newValue !== null;
    } else if (name === "placeholder") {
      this.input.placeholder =
        typeof newValue === "number" ? newValue.toString() : newValue;
    } else if (name === "size") {
      this.input.size = Number(newValue) ? Number(newValue) : this.input.size;
    } else if (name === "value") {
      this.input.value =
        typeof newValue === "number" ? newValue.toString() : newValue;
    }
  }

  initSearchBox(): void {
    // Create input field
    this.input.setAttribute("type", "text");
    this.input.setAttribute("id", "input");

    // Input actions
    this.input.onfocus = () => {
      this.setAttribute("focused", "");
    };
    this.input.onblur = () => {
      this.removeAttribute("focused");
    };

    // Create left slot
    this.leftSlot.setAttribute("name", "left");
    this.leftSlot.textContent = "\u{1f50d}";

    // Left slot actions
    this.leftSlot.onclick = this.input.onchange = (event) => {
      event.stopPropagation();
      if (this.disabled) return;
      this.dispatchEvent(
        new CustomEvent("search", {
          detail: this.input.value,
        })
      );
    };

    // Create right slot
    this.rightSlot.setAttribute("name", "right");
    this.rightSlot.textContent = "\u{2573}";

    // Right slot actions
    this.rightSlot.onclick = (event) => {
      event.stopPropagation();
      if (this.disabled) return;
      let clearEvent = new CustomEvent("clear", {
        cancelable: true,
      });
      this.dispatchEvent(clearEvent);
      if (!clearEvent.defaultPrevented) {
        this.input.value = "";
      }
    };
    // Create stylesheet
    const styles = document.createTextNode(this.stylesText);
    this.styleSheet.append(styles);

    // Attach elements to shadowRoot
    this.shadow.append(this.styleSheet);
    this.shadow.append(this.leftSlot);
    this.shadow.append(this.input);
    this.shadow.append(this.rightSlot);
  }

  get placeholder() {
    return this.getAttribute("placeholder");
  }
  get size() {
    return this.getAttribute("size");
  }
  get value() {
    return this.getAttribute("value");
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  get hidden() {
    return this.hasAttribute("hidden");
  }

  set placeholder(value) {
    if (value) this.setAttribute("placeholder", value);
  }
  set size(value) {
    if (value) this.setAttribute("size", value);
  }
  set value(text) {
    if (text) this.setAttribute("value", text);
  }
  set disabled(value) {
    if (value) this.setAttribute("disabled", "");
    else this.removeAttribute("disabled");
  }
  set hidden(value) {
    if (value) this.setAttribute("hidden", "");
    else this.removeAttribute("hidden");
  }

  stylesText = `
      :host {
        display: inline-block;
        border: solid green 1px;
        border-radius: 5px;
        padding: 4px 6px;
      }
      :host([hidden]) {
        display: none;
      }
      :host([disabled]) {
        opacity: 0.5;
      }
      :host([focused]) {
        box-shadow: 0 0 2px 2px #6AE;
      }

      input {
        border-width: 0;
        outline: none;
        font: inherit;
        background: inherit;
      }

      slot {
        cursor: default;
        user-select: none;
      }
    `;
}
