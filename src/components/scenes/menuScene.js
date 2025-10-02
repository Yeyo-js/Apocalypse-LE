import Phaser from "phaser";

class MenuScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    this.add.text(300, 200, "Devil Level", { fontSize: "40px", fill: "#fff" });
    this.add.text(350, 300, "JUGAR", { fontSize: "32px", fill: "#0f0" })
      .setInteractive()
      .on("pointerdown", () => this.scene.start("NickNameScene"));
    this.add.text(350, 350, "RANKING", { fontSize: "32px", fill: "#0f0" })
      .setInteractive()
      .on("pointerdown", () => this.scene.start("NickNameScene"));
  }
}

export { MenuScene }
