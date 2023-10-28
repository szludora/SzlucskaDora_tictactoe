class InfoView {
  constructor(szuloElem) {
    this.szuloElem = szuloElem;
    this.#htmlosszeAllit();
    this.pElem = $(".info p");
  }
  setPelem(ertek) {
    let szoveg;
    switch (ertek) {
      case "0":
        szoveg = "O nyert!";
        break;
      case "1":
        szoveg = "X nyert!";
        break;
      case "2":
        szoveg = "Döntetlen!";
        break;
      case "X":
        szoveg = "X következik!";
        break;
      case "O":
        szoveg = "O következik!";
        break;
    }
    this.pElem.html(szoveg);
  }
  #htmlosszeAllit() {
    let txt = "<p>Ki következik? </p>";
    this.szuloElem.html(txt);
  }
}
export default InfoView;
