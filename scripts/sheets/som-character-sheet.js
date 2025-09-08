export default class SomCharacterSheet extends BladesActorSheet {
  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["blades-in-the-dark", "sheet", "actor", "character", "sea-of-monsters"],
      template: "modules/sea-of-monsters/templates/sheets/som-character-sheet.html",
      width: 800,
      height: 700
    });
  }
}
