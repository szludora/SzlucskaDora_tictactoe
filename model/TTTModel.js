// import InfoView from "../view/InfoView";

class TTTModel {
  #lepes;
  #ertek = "";
  #lista = [];
  constructor() {
    this.#lepes = 0;
    this.meret = 3;
    for (let index = 0; index < this.meret * this.meret; index++) {
      this.#lista.push(".");
    }
  }

  aktualisAllapot(index) {
    this.#lepes++;
    if (this.#lepes % 2 == 0) {
      this.#ertek = "X";
    } else {
      this.#ertek = "O";
    }
    this.#lista[index] = this.#ertek;
    return this.#ertek;
  }
  kovetkezoJatekos() {
    let kovjatekos = "";
    if (this.#lepes % 2 == 0) {
      kovjatekos = "O";
    } else {
      kovjatekos = "X";
    }
    return kovjatekos;
  }
  #vizszint() {
    let txt = "";

    this.#lista.forEach((elem, i) => {
      txt += elem;
      if (i % this.meret == this.meret - 1) {
        txt += "@";
      }
    });
    return txt;
  }

  #fuggoleges() {
    let txt = "";
    for (let oszlop = 0; oszlop < this.meret; oszlop++) {
      for (let sor = 0; sor < this.meret; sor++) {
        let elem = this.#lista[sor*this.meret+oszlop];
        txt += elem
      }
      txt += "@"
    }
    return txt;
  }
  #atlos() {
    let txt = "";
    for (let oszlop = 0; oszlop < this.meret-4; oszlop++) {
      for (let sor = 0; sor < this.meret; sor++) {
        let index = sor*this.meret+oszlop
        let elem = this.#lista[index];
        txt += elem
        console.log("elem", elem)
      }
      txt += "@"
    }
    console.log(txt)
    return txt;
  }

  ell(kovjatekos) {
    let szoveg = this.#vizszint() + this.#fuggoleges()+ this.#atlos(); 
    if (szoveg.indexOf("OOO") >= 0) {
      return "0";
    } else if (szoveg.indexOf("XXX") >= 0) {
      return "1";
    } else if (szoveg.indexOf(".") == -1) {
      return "2";
    } else {
      return kovjatekos;
    }
  }
}

export default TTTModel;
