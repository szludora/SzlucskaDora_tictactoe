class Elem {
 
  constructor(szuloElem, index) {
    this.index = index;
    this.allapot = true;
    this.szuloElem = szuloElem;
    this.#htmlOsszeallit(); 
   
    this.divElem = this.szuloElem.children("div:last-child");
    this.pElem = this.divElem.children("p");
   
    this.divElem.on("click", () => {
      if (this.allapot) {
        this.#esemenyTrigger("elemKivalaszt");
      }
      this.allapot = false;
    });
  }
  setErtek(ertek) {
    this.pElem.html(ertek);
  }
  #htmlOsszeallit() {
    let txt = "<div class='elem'><p></p></div>";
    this.szuloElem.append(txt);
  }

  #esemenyTrigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default Elem;
