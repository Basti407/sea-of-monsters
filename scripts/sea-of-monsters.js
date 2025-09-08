import SomCharacterSheet from "./sheets/som-character-sheet.js";

Hooks.once("init", function() {
  // Charakter-Sheet registrieren
  Actors.registerSheet("blades-in-the-dark", SomCharacterSheet, {
    types: ["character"],
    makeDefault: true,
    label: "Sea of Monsters Character Sheet"
  });
});
