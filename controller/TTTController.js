import TTTModel from "../model/TTTModel.js";
import Jatekter from "../view/Jatekter.js";
import InfoView from "../view/InfoView.js";
class TTTController {
  constructor() {
    new Jatekter($(".jatekter"), 3);
    this.tttModel=new TTTModel();
    this.infoView=new InfoView($(".info"));

    $(window).on("elemKivalaszt", (event) => {
      let index = event.detail.index
      let aktObj = event.detail

      let ertek=this.tttModel.aktualisAllapot(index)
      event.detail.setErtek(ertek);
      let kovJa=this.tttModel.kovetkezoJatekos()
      this.infoView.setPelem(this.tttModel.ell(kovJa))
    });
  }
}
export default TTTController;
