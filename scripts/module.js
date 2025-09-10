import { BladesAlternateActorSheet } from "./blades-alternate-actor-sheet.js";
import { BladesAlternateClassSheet } from "./blades-alternate-class-sheet.js";
import { registerSystemSettings } from "./settings.js";
import { preloadHandlebarsTemplates } from "./blades-templates.js";
import { registerHandlebarsHelpers } from "./handlebars-helpers.js";
import { registerHooks } from "./hooks.js";

Hooks.once("init", function () {
  console.log("Initializing Blades in the Dark Alternate Sheets");
  // CONFIG.debug.hooks = true;
  Actors.registerSheet("sea-of-monsters", BladesAlternateActorSheet, {
    types: ["character"],
    makeDefault: true,
  });
  // Items.registerSheet("bitd-alt", BladesAlternateItemSheet, { types: ["item"], makeDefault: true});
  Items.registerSheet("sea-of-monsters", BladesAlternateClassSheet, {
    types: ["class"],
    makeDefault: true,
  });

  registerSystemSettings();

  preloadHandlebarsTemplates();
  registerHandlebarsHelpers();
  registerHooks();
});
