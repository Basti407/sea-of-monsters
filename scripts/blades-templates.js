/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {}
 */
export const preloadHandlebarsTemplates = function () {
  // Define template paths to load
  const templatePaths = [
    // Actor Sheet Partials
    "modules/sea-of-monsters/templates/parts/coins.html",
    "modules/sea-of-monsters/templates/parts/attributes.html",
    "modules/sea-of-monsters/templates/parts/harm.html",
    "modules/sea-of-monsters/templates/parts/load.html",
    "modules/sea-of-monsters/templates/parts/radiotoggles.html",
    "modules/sea-of-monsters/templates/parts/ability.html",
    "modules/sea-of-monsters/templates/parts/item.html",
    "modules/sea-of-monsters/templates/parts/item-header.html",
    // "modules/sea-of-monsters/templates/parts/turf-list.html",
    // "modules/sea-of-monsters/templates/parts/cohort-block.html",
    // "modules/sea-of-monsters/templates/parts/factions.html",
    "modules/sea-of-monsters/templates/parts/active-effects.html",
  ];

  // Load the template parts
  return loadTemplates(templatePaths);
};
