export function registerDiceSoNiceChanges(dice3d) {
  dice3d.addSystem(
    { id: "bitd-a", name: "Blades in the Dark Alternate Sheets" },
    "preferred"
  );
  dice3d.addColorset(
    {
      name: "gunmetal",
      description: "Gunmetal",
      category: "Blades in the Dark",
      foreground: "#f05821",
      background: "#5c5c5c",
      material: "chrome",
      font: "Kirsty",
    },
    "preferred"
  );

  const data = {
    type: "d6",
    labels: [
      "modules/sea-of-monsters/images/dice/bitd-a/1.png",
      "modules/sea-of-monsters/images/dice/bitd-a/2.png",
      "modules/sea-of-monsters/images/dice/bitd-a/3.png",
      "modules/sea-of-monsters/images/dice/bitd-a/4.png",
      "modules/sea-of-monsters/images/dice/bitd-a/5.png",
      "modules/sea-of-monsters/images/dice/bitd-a/blades.png",
    ],
    bumpMaps: [
      "modules/sea-of-monsters/images/dice/bitd-a/1-bump.png",
      "modules/sea-of-monsters/images/dice/bitd-a/2-bump.png",
      "modules/sea-of-monsters/images/dice/bitd-a/3-bump.png",
      "modules/sea-of-monsters/images/dice/bitd-a/4-bump.png",
      "modules/sea-of-monsters/images/dice/bitd-a/5-bump.png",
      "modules/sea-of-monsters/images/dice/bitd-a/blades-bump.png",
    ],
    emissiveMaps: [
      ,
      ,
      ,
      ,
      ,
      "modules/sea-of-monsters/images/dice/bitd-a/blades.png",
    ],
    system: "bitd-a",
    colorset: "gunmetal",
  };
  dice3d.addDicePreset(data, "d6");
}
