const heroImg = (file) => `assets/images/heroes/${file}.webp`;
const towerImg = (file) => `assets/images/towers/${file}.png`;
const upgradeSheetKey = {
  Alchemist: "alchemist", BananaFarm: "farm", BombShooter: "bomb", BoomerangMonkey: "boomerang",
  DartMonkey: "dart", DartlingGunner: "dartling", GlueGunner: "glue", IceMonkey: "ice",
  MonkeyAce: "ace", MonkeyBuccaneer: "buccaneer", MonkeySub: "sub", MortarMonkey: "mortar",
  NinjaMonkey: "ninja", SniperMonkey: "sniper", SpikeFactory: "spike", SuperMonkey: "super",
  TackShooter: "tack", WizardMonkey: "wizard"
};
const upgradeIcon = (file, pathIndex, tier) => upgradeSheetKey[file]
  ? `assets/images/upgrades/icons/${upgradeSheetKey[file]}/${pathIndex}-${tier}.png`
  : `assets/images/towers/${file}.png`;

const level = (title, detail, key = false) => ({ title, detail, key });

function makeLevels(growth, overrides) {
  return Array.from({ length: 20 }, (_, index) => {
    const levelNumber = index + 1;
    return overrides[levelNumber] || level("Steady growth", growth, false);
  });
}

const heroes = [
  {
    id: "quincy", name: "Quincy", image: "Quincy", role: "All-rounder", className: "starter",
    price: "$450", tag: "fast leveling", alt: ["Cyber Quincy", "Wolfpack Quincy"],
    summary: "The cleanest first hero: cheap, reliable early-game coverage with arrows that bounce and two simple panic buttons.",
    abilities: [["L3", "Rapid Shot"], ["L10", "Storm of Arrows"]],
    levels: makeLevels("His bow gets faster, hits harder, and carries more pierce as he levels.", {
      1: level("Bouncing arrows", "Fires an arrow that can ricochet through multiple bloons.", true),
      2: level("More pierce", "Arrows can bounce through more targets."),
      3: level("Rapid Shot", "Ability: dramatically increases attack speed for a short burst.", true),
      5: level("Camo sight", "Can target Camo Bloons."),
      6: level("Double arrows", "Fires two arrows per attack."),
      10: level("Storm of Arrows", "Ability: rains explosive arrows over a selected area.", true),
      12: level("Storm improves", "Storm of Arrows lasts longer and hits harder."),
      15: level("Rapid Shot improves", "Rapid Shot becomes faster and lasts longer."),
      20: level("Deadly storm", "Storm of Arrows gets a large damage and pierce upgrade.", true)
    })
  },
  {
    id: "gwendolin", name: "Gwendolin", image: "Gwendolin", role: "Fire / buff", className: "starter",
    price: "$700", tag: "burn damage", alt: ["Scientist Gwendolin", "Harlegwen"],
    summary: "A fire-focused hero who rewards clustered placement: burn damage clears layers while her heat buff supercharges nearby monkeys.",
    abilities: [["L3", "Cocktail of Fire"], ["L10", "Firestorm"]],
    levels: makeLevels("Her fire attacks gain damage, pierce, and better coverage as she levels.", {
      1: level("Fire attacks", "Throws fire that burns bloons after the hit.", true),
      3: level("Cocktail of Fire", "Ability: throws a burning bottle that creates a damage-over-time zone.", true),
      4: level("Heat It Up", "Nearby monkeys periodically receive a temporary range and pierce boost."),
      6: level("Stronger flames", "Fire deals more damage and reaches more bloons."),
      10: level("Firestorm", "Ability: a full-map wave of fire damages every bloon on screen.", true),
      12: level("Hotter buff", "Heat It Up gives a stronger buff to nearby monkeys."),
      14: level("Cocktail improves", "Cocktail of Fire burns a larger area for longer."),
      16: level("Fire pierces", "Flames carry more pierce and do more damage."),
      20: level("Inferno", "Firestorm and her burn effects become dramatically stronger.", true)
    })
  },
  {
    id: "striker", name: "Striker Jones", image: "StrikerJones", role: "Explosives support", className: "support",
    price: "$650", tag: "bomb / mortar", alt: ["Biker Bones", "Octojones"],
    summary: "A support hero for explosive defenses. He adds crowd control, buffs explosive towers, and turns rushes into manageable chunks.",
    abilities: [["L3", "Concussive Shell"], ["L10", "Artillery Command"]],
    levels: makeLevels("The cannon fires faster and its stun, range, and damage become more useful.", {
      1: level("Heavy cannon", "Fires explosive shells with a global target range.", true),
      3: level("Concussive Shell", "Ability: a shell stuns bloons in a large area.", true),
      4: level("Explosive support", "Nearby Bomb Shooters and Mortars get stronger explosive attacks."),
      6: level("More blast", "Cannon shells gain damage and pierce."),
      8: level("Longer stun", "Concussive Shell stuns for longer."),
      10: level("Artillery Command", "Ability: temporarily boosts Bomb and Mortar attack speed and cooldowns.", true),
      12: level("Bigger shells", "Cannon shots gain more impact against grouped bloons."),
      15: level("Command improves", "Artillery Command lasts longer and gives a stronger boost."),
      20: level("Battlefield commander", "Explosive towers get their strongest support and his cannon hits harder.", true)
    })
  },
  {
    id: "obyn", name: "Obyn Greenfoot", image: "Obyn", role: "Magic support", className: "support",
    price: "$650", tag: "magic buff", alt: ["Ocean Guardian", "Skeletor"],
    summary: "A flexible magic-support hero: homing spirits handle early bloons while his abilities create space and his aura helps magic towers scale.",
    abilities: [["L3", "Brambles"], ["L10", "Wall of Trees"]],
    levels: makeLevels("His spirits, wolves, and magic buffs gain range, pierce, and damage.", {
      1: level("Spirit wolf", "Sends seeking spirit wolves toward bloons.", true),
      3: level("Brambles", "Ability: places a patch of brambles that pops bloons and traps MOABs briefly.", true),
      4: level("Magic aura", "Nearby Magic Monkeys gain extra range and pierce."),
      6: level("Wall of Fire", "Adds a damaging wall-of-fire attack to his spirit kit."),
      10: level("Wall of Trees", "Ability: creates a wall that absorbs bloons, then pays out when full.", true),
      11: level("Stronger magic aura", "Magic Monkeys in range get an improved buff."),
      13: level("More spirits", "Spirit attacks gain extra projectiles and pierce."),
      16: level("Deadlier nature", "His damage-over-time effects pop more layers."),
      20: level("Ancient forest", "Wall of Trees holds more and his spirit attacks get their biggest upgrade.", true)
    })
  },
  {
    id: "churchill", name: "Captain Churchill", image: "Churchill", role: "MOAB damage", className: "damage",
    price: "$900", tag: "late-game carry", alt: ["Sentai Churchill"],
    summary: "Expensive, slow to level, and built like a tank. Once online, Churchill is a direct answer to dense MOAB rounds.",
    abilities: [["L3", "MOAB Barrage"], ["L10", "MOAB Eliminator"]],
    levels: makeLevels("The tank's shells, machine gun, and missiles steadily gain damage, pierce, and speed.", {
      1: level("Tank cannon", "Fires a high-damage shell and a fast machine-gun stream.", true),
      3: level("MOAB Barrage", "Ability: launches a volley of anti-MOAB missiles.", true),
      5: level("Better targeting", "Range and projectile speed improve; the tank reaches more of the track."),
      7: level("Machine gun upgrade", "The machine gun fires faster and deals more damage."),
      10: level("MOAB Eliminator", "Ability: a much heavier barrage deletes a large chunk of a MOAB rush.", true),
      12: level("Faster cannon", "Main shells fire faster and hit harder."),
      14: level("Missile upgrade", "Missiles gain damage and more reliable pierce."),
      17: level("Armored commander", "All main attacks receive another damage and speed bump."),
      20: level("Full arsenal", "His barrage becomes one of the strongest single-target panic buttons.", true)
    })
  },
  {
    id: "benjamin", name: "Benjamin", image: "Benjamin", role: "Economy", className: "economy",
    price: "$700", tag: "eco engine", alt: ["DJ Benjammin'", "Cyber Ben"],
    summary: "Benjamin turns time into money. He is a strategic investment: weaker on the first few rounds, increasingly valuable when your plan needs cash.",
    abilities: [["L3", "Biohack"], ["L10", "Syphon Funding"]],
    levels: makeLevels("His round income, hacks, and support effects scale upward; keep him safe and let time do the work.", {
      1: level("Code monkey", "Generates extra cash at the end of each round.", true),
      3: level("Biohack", "Ability: nearby monkeys attack much faster, but cannot damage MOAB-class bloons during the buff.", true),
      5: level("Bloon Trojan", "His hack can attach to natural bloons and generate additional cash when they pop."),
      7: level("Better hacks", "Income from his passive and Trojan effects improves."),
      10: level("Syphon Funding", "Ability: downgrades selected bloons and grants you more cash while weakening the rush.", true),
      12: level("Stronger economy", "Round income and Trojan payouts increase."),
      14: level("Biohack improves", "Biohack lasts longer and gives a stronger speed bonus."),
      17: level("Better Syphon", "Syphon Funding affects stronger bloons and pays out more."),
      20: level("Compounding returns", "His economy is at its peak and both abilities are significantly stronger.", true)
    })
  },
  {
    id: "ezili", name: "Ezili", image: "Ezili", role: "Hex / anti-MOAB", className: "control",
    price: "$600", tag: "hex specialist", alt: ["Smudge Catt"],
    summary: "A technical hero built around damage-over-time and debuffs. Ezili is strongest when you need a precise answer to bloons that refuse to die.",
    abilities: [["L3", "Heartstopper"], ["L7", "Sacrificial Totem"], ["L10", "MOAB Hex"]],
    levels: makeLevels("Her totem, curse, and main attack gain range, pierce, and much stronger damage-over-time effects.", {
      1: level("Cursed magic", "Fires a seeking magic projectile with a damage-over-time effect.", true),
      3: level("Heartstopper", "Ability: stops Regrow effects and prevents regrowth for a short time.", true),
      5: level("Camo sight", "Can detect Camo Bloons and her curse becomes more reliable."),
      7: level("Sacrificial Totem", "Ability: sacrifices lives to grant nearby monkeys range, pierce, and attack speed.", true),
      10: level("MOAB Hex", "Ability: curses a MOAB, dealing heavy damage over time while it remains on the track.", true),
      12: level("Stronger curse", "Hex damage and uptime improve."),
      14: level("Totem improves", "Sacrificial Totem buffs nearby towers more strongly."),
      17: level("Anti-MOAB power", "Her hexes carry more damage against MOAB-class bloons."),
      20: level("Ultimate hex", "MOAB Hex can affect the strongest blimps and deals dramatically more damage.", true)
    })
  },
  {
    id: "pat", name: "Pat Fusty", image: "PatFusty", role: "Area control", className: "support",
    price: "$800", tag: "close-range buff", alt: ["Fusty the Snowman"],
    summary: "A short-range bruiser whose real value is a huge roar: place him near clustered towers and time his abilities around a rush.",
    abilities: [["L3", "Rallying Roar"], ["L10", "Big Squeeze"]],
    levels: makeLevels("Pat gets larger range, stronger swipes, and better roar uptime as he levels.", {
      1: level("Fusty swipes", "Pounds nearby bloons with short-range area attacks.", true),
      3: level("Rallying Roar", "Ability: nearby towers temporarily gain attack speed and damage; Pat also roars bloons back.", true),
      5: level("Bigger reach", "Pat's range and swipe radius increase."),
      7: level("Stronger roar", "Rallying Roar lasts longer and improves nearby damage more."),
      10: level("Big Squeeze", "Ability: grabs and squeezes a MOAB-class bloon, dealing heavy damage.", true),
      12: level("Heavy paws", "Pat's attacks gain damage and pierce."),
      14: level("Roar cooldown", "Rallying Roar comes back faster."),
      17: level("Giant range", "His aura and attacks cover a larger area."),
      20: level("Mega Fusty", "The roar and squeeze are both upgraded for late-game rushes.", true)
    })
  },
  {
    id: "jericho", name: "Agent Jericho", image: "Jericho", role: "Sabotage", className: "control",
    price: "$850", tag: "opponent pressure", alt: ["Highwayman Jericho", "Star Captain Jericho"],
    summary: "Jericho turns your hero slot into pressure on the other side: steal cash, create altered sends, and force awkward defenses.",
    abilities: [["L2", "Bloon Adjustment"], ["L3", "Seize Assets"], ["L10", "Decoy Bloon"]],
    levels: makeLevels("His pistol and sabotage effects get stronger; several levels improve the quality of the bloons he alters.", {
      1: level("Covert pistol", "Shoots a high-damage snipe attack with global range.", true),
      2: level("Bloon Adjustment", "Every few natural bloons gain an extra layer before your opponent sees them.", true),
      3: level("Seize Assets", "Ability: steals cash from the opponent over several seconds.", true),
      5: level("Special properties", "Adjusted bloons can gain Camo, Regrow, or Fortified properties."),
      7: level("Better sabotage", "His adjusted bloons and pistol gain more power."),
      10: level("Decoy Bloon", "Ability: sends a fake MOAB that absorbs attacks and distracts the opponent's defense.", true),
      13: level("Misdirection", "Ability: redirects a strong bloon back toward the opponent's side."),
      15: level("Better steals", "Seize Assets steals more and returns sooner."),
      20: level("Master of pressure", "Decoys, misdirection, and altered sends become much harder to ignore.", true)
    })
  },
  {
    id: "adora", name: "Adora", image: "Adora", role: "Super support", className: "late-game",
    price: "$650", tag: "sun power", alt: ["Fateweaver Adora"],
    summary: "Adora trades early comfort for an explosive ceiling: she buffs Super Monkeys and can sacrifice towers to accelerate her own leveling.",
    abilities: [["L3", "Long Arm of Light"], ["L7", "Blood Sacrifice"], ["L10", "Ball of Light"]],
    levels: makeLevels("Her divine bolts gain more projectiles, pierce, damage, and stronger Super Monkey support.", {
      1: level("Divine bolts", "Fires seeking bolts that can pop Lead and Frozen Bloons.", true),
      2: level("Super aura", "Super Monkeys in range gain extra range and pierce."),
      3: level("Long Arm of Light", "Ability: temporarily gains huge range, pierce, and full bloon-type access.", true),
      4: level("Double bolts", "Fires two divine bolts per attack."),
      7: level("Blood Sacrifice", "Ability: sacrifices a tower for a large XP boost and a temporary Adora buff.", true),
      10: level("Ball of Light", "Ability: summons a high-damage ball that focuses on bloons across the map.", true),
      11: level("Super aura improves", "Super Monkeys in range receive an additional pierce bonus."),
      15: level("Heavy bolts", "Divine bolts and the Ball of Light deal more damage."),
      16: level("Long Arm improves", "Long Arm of Light lasts longer and adds more power to nearby Sun Avatars."),
      20: level("Sun Goddess", "Ball of Light and Blood Sacrifice reach their full strength; Adora can merge with a True Sun God.", true)
    })
  },
  {
    id: "etienne", name: "Etienne", image: "Etienne", role: "Global camo", className: "support",
    price: "$700", tag: "drone control", alt: ["Beetienne"],
    summary: "Etienne is a map-wide utility hero: drones supply safe damage while his later levels solve Camo for your entire defense.",
    abilities: [["L3", "Drone Swarm"], ["L10", "UCAV"]],
    levels: makeLevels("His drone count, range, projectile power, and global support all improve with level.", {
      1: level("Scout drones", "Controls small drones that fire darts from above.", true),
      3: level("Drone Swarm", "Ability: temporarily sends all drones into a rapid-fire attack pattern.", true),
      5: level("More drones", "Adds another drone and improves projectile coverage."),
      8: level("Drone missiles", "Drones gain stronger missiles and more reliable targeting."),
      10: level("UCAV", "Ability: deploys a powerful global drone that fires missiles across the screen.", true),
      11: level("Global Camo", "All monkeys gain Camo detection."),
      13: level("UCAV improves", "The UCAV fires faster and its missiles hit harder."),
      16: level("Extra drone", "Etienne controls more drones at once."),
      20: level("Full air fleet", "UCAV and drones reach their maximum damage and uptime.", true)
    })
  },
  {
    id: "bonnie", name: "Bonnie", image: "Bonnie", role: "Minecart control", className: "control",
    price: "$650", tag: "map mechanic", alt: ["Beetienne"],
    summary: "Bonnie brings her own little demolition game: place and detonate minecarts, then use her supply truck to lock down dangerous bloons.",
    abilities: [["L3", "Mass Detonation"], ["L10", "B.E.A.S.T."]],
    levels: makeLevels("Bonnie gains more minecart control, bigger explosions, and stronger stuns as the match goes on.", {
      1: level("Minecart launcher", "Fires dynamite and places minecarts that roll along the track.", true),
      3: level("Mass Detonation", "Ability: detonates every active minecart at once for a burst of damage.", true),
      5: level("Bigger blast", "Minecart explosions cover more track and pop more layers."),
      7: level("Minecart upgrade", "Bonnie can maintain more carts and fires more quickly."),
      10: level("B.E.A.S.T.", "Ability: calls a supply truck that runs over bloons and stuns them.", true),
      12: level("Stronger dynamite", "Dynamite and minecarts gain damage and pierce."),
      15: level("Better detonation", "Mass Detonation gets a stronger blast and shorter downtime."),
      18: level("Truck upgrade", "B.E.A.S.T. hits harder and controls bloons for longer."),
      20: level("Demolition expert", "Minecarts, detonation, and B.E.A.S.T. all receive their final power spike.", true)
    })
  }
];

const plainHeroSummaries = {
  quincy: "Bouncing arrow attacks. Rapid Shot at level 3. Storm of Arrows at level 10.",
  gwendolin: "Fire attacks, burn damage, and a temporary buff for nearby monkeys.",
  striker: "Explosive cannon attack. Supports Bomb Shooters and Mortar Monkeys.",
  obyn: "Seeking spirit attacks. Buffs Magic Monkeys and creates Brambles and Wall of Trees.",
  churchill: "Tank cannon, machine gun, and missiles. High damage against MOAB-class bloons.",
  benjamin: "Generates round income. Uses Biohack and Syphon Funding for temporary support and cash.",
  ezili: "Damage-over-time magic attacks. Uses Regrow control, Sacrificial Totem, and MOAB Hex.",
  pat: "Short-range area attack. Rallying Roar buffs nearby towers; Big Squeeze damages MOAB-class bloons.",
  jericho: "Pistol attack plus bloon adjustment, cash stealing, decoys, and misdirection.",
  adora: "Seeking divine bolts. Buffs Super Monkeys and uses tower sacrifice for XP.",
  etienne: "Drone attacks and global Camo detection at level 11. UCAV ability at level 10.",
  bonnie: "Minecart placement and detonation. B.E.A.S.T. supply truck stuns bloons."
};

const plainLevelTitles = {
  "Deadly storm": "Storm damage", "Inferno": "Fire damage", "Battlefield commander": "Support and cannon damage",
  "Deadlier nature": "Damage increase", "Ancient forest": "Wall of Trees capacity", "Armored commander": "Attack damage and speed",
  "Full arsenal": "Ability and attack damage", "Code monkey": "Round income", "Better hacks": "Hack income",
  "Stronger economy": "Income increase", "Compounding returns": "Maximum income", "Cursed magic": "Seeking magic attack",
  "Stronger curse": "Hex damage", "Anti-MOAB power": "MOAB damage", "Ultimate hex": "Maximum MOAB Hex",
  "Fusty swipes": "Short-range area attack", "Bigger reach": "Range increase", "Heavy paws": "Attack damage and pierce",
  "Giant range": "Range and aura increase", "Mega Fusty": "Maximum ability strength", "Better sabotage": "Sabotage strength",
  "Better steals": "Seize Assets improvement", "Master of pressure": "Maximum sabotage strength", "Sun Goddess": "Maximum Adora abilities",
  "Full air fleet": "Maximum drone and UCAV strength", "Demolition expert": "Maximum minecart and truck strength"
};

heroes.forEach((hero) => {
  hero.summary = plainHeroSummaries[hero.id] || hero.summary;
  hero.levels.forEach((item) => { if (plainLevelTitles[item.title]) item.title = plainLevelTitles[item.title]; });
});

const path = (name, role, upgrades) => ({ name, role, upgrades });

const towers = [
  { id: "dart", name: "Dart Monkey", file: "DartMonkey", className: "Primary", role: "cheap precision", paths: [
    path("Sharp / juggernaut", "Straight-line damage and huge projectiles.", ["Sharp Shots", "Razor Sharp Shots", "Spike-o-pult", "Juggernaut", "Ultra Juggernaut"]),
    path("Triple / fan club", "More darts, then a temporary army of dart monkeys.", ["Quick Shots", "Very Quick Shots", "Triple Shot", "Super Monkey Fan Club", "Plasma Monkey Fan Club"]),
    path("Crossbow", "Long range, camo, and high single-target crits.", ["Long Range Darts", "Enhanced Eyesight", "Crossbow", "Sharp Shooter", "Crossbow Master"])
  ]},
  { id: "boomerang", name: "Boomerang Monkey", file: "BoomerangMonkey", className: "Primary", role: "pierce / control", paths: [
    path("Glaives", "Ricochets and wide-area cleanup.", ["Improved Rangs", "Glaives", "Glaive Ricochet", "M.O.A.R. Glaives", "Glaive Lord"]),
    path("Bionic", "Fast curved attacks with a temporary turbo mode.", ["Faster Throwing", "Faster Rangs", "Bionic Boomerang", "Turbo Charge", "Perma Charge"]),
    path("MOAB press", "Range, lead popping, and reliable blimp knockback.", ["Long Range Rangs", "Red Hot Rangs", "Kylie Boomerang", "MOAB Press", "MOAB Domination"])
  ]},
  { id: "bomb", name: "Bomb Shooter", file: "BombShooter", className: "Primary", role: "explosive control", paths: [
    path("Stun", "Big explosions that eventually stop bloons in their tracks.", ["Bigger Bombs", "Heavy Bombs", "Really Big Bombs", "Bloon Impact", "Bloon Crush"]),
    path("MOAB missiles", "Direct anti-MOAB damage with an activated assassin.", ["Faster Reload", "Missile Launcher", "MOAB Mauler", "MOAB Assassin", "MOAB Eliminator"]),
    path("Clusters", "Cheap grouped-bloon cleanup and a late-game global bomb.", ["Extra Range", "Frag Bombs", "Cluster Bombs", "Recursive Cluster", "Bomb Blitz"])
  ]},
  { id: "tack", name: "Tack Shooter", file: "TackShooter", className: "Primary", role: "close-range spray", paths: [
    path("Fire", "Adds range and fire damage.", ["Faster Shooting", "Even Faster Shooting", "Hot Shots", "Ring of Fire", "Inferno Ring"]),
    path("Blades", "Increases blade attack speed and grants Maelstrom abilities.", ["Long Range Tacks", "Super Range Tacks", "Blade Shooter", "Blade Maelstrom", "Super Maelstrom"]),
    path("Tacks", "Adds more projectiles until every nearby bloon is shredded.", ["More Tacks", "Even More Tacks", "Tack Sprayer", "Overdrive", "The Tack Zone"])
  ]},
  { id: "ice", name: "Ice Monkey", file: "IceMonkey", className: "Primary", role: "slow / debuff", paths: [
    path("Freeze", "Freezes bloons and applies brittle debuffs.", ["Permafrost", "Cold Snap", "Ice Shards", "Embrittlement", "Super Brittle"]),
    path("Storm", "Adds larger freeze attacks and screen-freeze abilities.", ["Enhanced Freeze", "Deep Freeze", "Arctic Wind", "Snowstorm", "Absolute Zero"]),
    path("Impale", "Slows MOAB-class bloons and increases damage taken.", ["Larger Radius", "Re-Freeze", "Cryo Cannon", "Icicles", "Icicle Impale"])
  ]},
  { id: "glue", name: "Glue Gunner", file: "GlueGunner", className: "Primary", role: "slow / damage over time", paths: [
    path("Solver", "Applies corrosive glue and area damage.", ["Glue Soak", "Corrosive Glue", "Bloon Dissolver", "Bloon Liquefier", "The Bloon Solver"]),
    path("Storm", "Increases glue rate and applies global glue debuffs.", ["Bigger Globs", "Glue Splatter", "Glue Hose", "Glue Strike", "Glue Storm"]),
    path("MOAB glue", "Slows MOAB-class bloons.", ["Stickier Glue", "Stronger Glue", "MOAB Glue", "Relentless Glue", "Super Glue"])
  ]},
  { id: "sniper", name: "Sniper Monkey", file: "SniperMonkey", className: "Military", role: "global range", paths: [
    path("Precision", "Heavy shots that specialize in ceramics and blimps.", ["Full Metal Jacket", "Large Caliber", "Deadly Precision", "Maim MOAB", "Cripple MOAB"]),
    path("Supply drop", "Faster fire, an active cash drop, and elite damage.", ["Faster Firing", "Even Faster Firing", "Semi-Automatic", "Supply Drop", "Elite Sniper"]),
    path("Shrapnel", "Adds shrapnel, bounce, and high fire rate.", ["Night Vision Goggles", "Shrapnel Shot", "Bouncing Bullet", "Shattering Shells", "Elite Defender"])
  ]},
  { id: "sub", name: "Monkey Sub", file: "MonkeySub", className: "Military", role: "water support", paths: [
    path("Ballistic", "Adds range, radar support, and cooldown support.", ["Long Range", "Advanced Intel", "Twin Guns", "Bloontonium Reactor", "Energizer"]),
    path("First Strike", "Adds missile attacks and First Strike abilities.", ["Barbed Darts", "Heat-tipped Darts", "Armor Piercing Dart", "Ballistic Missile", "First Strike"]),
    path("Submerge", "Adds additional darts and submarine support.", ["Airburst Darts", "Twin Guns", "Triple Guns", "Armor Piercing Dart", "Pre-emptive Strike"])
  ]},
  { id: "buccaneer", name: "Monkey Buccaneer", file: "MonkeyBuccaneer", className: "Military", role: "water / cash", paths: [
    path("Aircraft carrier", "Turns a boat into a screen-wide dart and plane platform.", ["Faster Shooting", "Double Shot", "Destroyer", "Aircraft Carrier", "Carrier Flagship"]),
    path("Merchant", "Adds grape and cannon attacks plus income.", ["Grape Shot", "Hot Shot", "Cannon Ship", "Monkey Pirates", "Pirate Lord"]),
    path("Trade", "Adds Camo detection, merchants, and grappling hooks.", ["Long Range", "Crow's Nest", "Merchantman", "Favored Trades", "Trade Empire"])
  ]},
  { id: "ace", name: "Monkey Ace", file: "MonkeyAce", className: "Military", role: "air coverage", paths: [
    path("Bomber", "Exploding darts become a fast carpet-bombing run.", ["Rapid Fire", "Lots More Darts", "Fighter Plane", "Operation: Dart Storm", "Sky Shredder"]),
    path("Bomber", "Adds Camo detection and screen-clearing abilities.", ["Exploding Pineapple", "Spy Plane", "Bomber Ace", "Ground Zero", "The Tsar Bomba"]),
    path("Homing", "Adds homing attacks and high single-target fire rate.", ["Sharper Darts", "Centered Path", "Neva-Miss Targeting", "Spectre", "Flying Fortress"])
  ]},
  { id: "heli", name: "Heli Pilot", file: "HeliPilot", className: "Military", role: "air control", paths: [
    path("Apache", "A direct damage helicopter with a terrifying missile upgrade.", ["Quad Burst", "Pursuit", "Razor Rotors", "Apache Dartship", "Comanche Defense"]),
    path("Support Chinook", "Pulls bloons, moves towers, and supplies extra cash.", ["Faster Firing", "Pursuit", "Downdraft", "Support Chinook", "Special Operations"]),
    path("Comanche", "Adds knockback and a swarm of mini-helicopters.", ["Faster Darts", "Quad Burst", "MOAB Shove", "Support Chinook", "Comanche Defense"])
  ]},
  { id: "mortar", name: "Mortar Monkey", file: "MortarMonkey", className: "Military", role: "map-wide splash", paths: [
    path("Blast", "Adds large splash damage and fire.", ["Bigger Blast", "Bloon Buster", "Shell Shock", "The Big One", "The Biggest One"]),
    path("Artillery", "Stuns blimps and grants a powerful ability.", ["Faster Reload", "Rapid Reload", "Heavy Shells", "Artillery Battery", "Pop and Awe"]),
    path("Signal flare", "Strips Camo, burns bloons, and adds global debuffs.", ["Increased Accuracy", "Burny Stuff", "Signal Flare", "Shattering Shells", "Blooncineration"])
  ]},
  { id: "dartling", name: "Dartling Gunner", file: "DartlingGunner", className: "Military", role: "aimed DPS", paths: [
    path("Laser", "Adds continuous laser damage.", ["Focused Firing", "Laser Shock", "Laser Cannon", "Plasma Accelerator", "Ray of Doom"]),
    path("Rocket", "Adds guided rockets and Rocket Storm/M.A.D.", ["Advanced Targeting", "Faster Barrel Spin", "Hydra Rocket Pods", "Rocket Storm", "M.A.D."]),
    path("Buckshot", "Adds buckshot and area denial.", ["Faster Swivel", "Powerful Darts", "Buckshot", "Bloon Area Denial System", "Bloon Exclusion Zone"])
  ]},
  { id: "wizard", name: "Wizard Monkey", file: "WizardMonkey", className: "Magic", role: "magic utility", paths: [
    path("Arcane", "Adds arcane projectile damage and Wall of Fire control.", ["Guided Magic", "Arcane Blast", "Arcane Mastery", "Arcane Spike", "Archmage"]),
    path("Phoenix", "Adds fire, Phoenix, and fire-based damage.", ["Fireball", "Wall of Fire", "Dragon's Breath", "Summon Phoenix", "Wizard Lord Phoenix"]),
    path("Necromancer", "Adds Camo removal, Necromancer, and graveyard attacks.", ["Intense Magic", "Monkey Sense", "Shimmer", "Necromancer", "Prince of Darkness"])
  ]},
  { id: "super", name: "Super Monkey", file: "SuperMonkey", className: "Magic", role: "raw power", paths: [
    path("Sun", "Builds toward a map-dominating temple and god form.", ["Laser Blasts", "Plasma Blasts", "Sun Avatar", "Sun Temple", "True Sun God"]),
    path("Tech", "Adds Robo Monkey, anti-MOAB attacks, and activated abilities.", ["Super Range", "Epic Range", "Robo Monkey", "Tech Terror", "Anti-Bloon"]),
    path("Dark", "Adds Camo, knockback, and Dark Champion progression.", ["Knockback", "Ultravision", "Dark Knight", "Dark Champion", "Legend of the Night"])
  ]},
  { id: "ninja", name: "Ninja Monkey", file: "NinjaMonkey", className: "Magic", role: "camo / sabotage", paths: [
    path("Shinobi", "More shurikens, sticky bombs, and single-target pressure.", ["Ninja Discipline", "Sharp Shurikens", "Double Shot", "Bloonjitsu", "Grandmaster Ninja"]),
    path("Sabotage", "Adds slows, stuns, and sabotage abilities.", ["Distraction", "Counter-Espionage", "Shinobi Tactics", "Bloon Sabotage", "Grand Saboteur"]),
    path("Master Bomber", "Adds homing attacks and sticky bombs.", ["Seeking Shuriken", "Caltrops", "Flash Bomb", "Sticky Bomb", "Master Bomber"])
  ]},
  { id: "druid", name: "Druid", file: "Druid", className: "Magic", role: "nature / economy", paths: [
    path("Storm", "Lightning, vines, and a storm that punishes groups.", ["Hard Thorns", "Heart of Oak", "Druid of the Jungle", "Jungle's Bounty", "Spirit of the Forest"]),
    path("Avatar", "Stacks attack speed and cash from pop count, then becomes a storm god.", ["Thorn Swarm", "Heart of Vengeance", "Druid of Wrath", "Poplust", "Avatar of Wrath"]),
    path("Berserker", "Adds a life-leeching, regenerating, high-pierce attack.", ["Druidic Reach", "Heart of Oak", "Druid of the Jungle", "Ball Lightning", "Superstorm"])
  ]},
  { id: "alchemist", name: "Alchemist", file: "Alchemist", className: "Magic", role: "buff / brew", paths: [
    path("Acid", "Adds acid attacks and cash conversion.", ["Larger Potions", "Acidic Mixture Dip", "Berserker Brew", "Stronger Stimulant", "Permanent Brew"]),
    path("Transform", "Adds bloon transformation and support effects.", ["Stronger Acid", "Perishing Potions", "Unstable Concoction", "Transforming Tonic", "Total Transformation"]),
    path("Brew", "Applies attack-speed and damage buffs.", ["Faster Throwing", "Acid Pool", "Lead to Gold", "Rubber to Gold", "Bloon Master Alchemist"])
  ]},
  { id: "farm", name: "Banana Farm", file: "BananaFarm", className: "Support", role: "income", paths: [
    path("Market", "Steady rounds of bananas with a high-tier cash boost.", ["Increased Production", "Greater Production", "Banana Plantation", "Banana Research Facility", "Banana Central"]),
    path("Bank", "Stores cash, then lets you withdraw a huge balance.", ["Long Life Bananas", "Valuable Bananas", "Banana Republic", "Central Market", "Monkey Wall Street"]),
    path("Marketplace", "Collects automatically and ends with a powerful passive payout.", ["EZ Collect", "Banana Salvage", "Marketplace", "Central Market", "Monkey Wall Street"])
  ]},
  { id: "village", name: "Monkey Village", file: "MonkeyVillage", className: "Support", role: "global support", paths: [
    path("Primary", "Makes Primary Monkeys cheaper, stronger, and more capable.", ["Larger Radius", "Jungle Drums", "Primary Training", "Primary Mentoring", "Primary Expertise"]),
    path("Economy", "Improves income and unlocks a cash-producing Monkeyopolis.", ["Monkey Business", "Monkey Commerce", "Monkey Town", "Monkey City", "Monkeyopolis"]),
    path("Camo / power", "Adds camo support, ability cooldown, and an emergency boost.", ["Monkey Intelligence Bureau", "Radar Scanner", "Monkey Intelligence Bureau", "Call to Arms", "Homeland Defense"])
  ]},
  { id: "spike", name: "Spike Factory", file: "SpikeFactory", className: "Support", role: "last line", paths: [
    path("Mines", "Creates durable spike piles.", ["Bigger Stacks", "White Hot Spikes", "Spiked Balls", "Spiked Mines", "Super Mines"]),
    path("Storm", "Creates spike storms and MOAB damage.", ["Faster Production", "Even Faster Production", "MOAB SHREDR", "Spike Storm", "Carpet of Spikes"]),
    path("Perma-spike", "Stores spikes at the end of the track.", ["Long Reach", "Smart Spikes", "Long Life Spikes", "Deadly Spikes", "Perma-Spike"])
  ]},
  { id: "engineer", name: "Engineer Monkey", file: "EngineerMonkey", className: "Support", role: "traps / overclock", paths: [
    path("Sentries", "Builds sentries, then a high-damage sentry army.", ["Sentry Gun", "Larger Service Area", "Deconstruction", "Sentry Expert", "Sentry Paragon"]),
    path("Overclock", "Temporarily boosts a tower and eventually creates a cleansing foam.", ["Oversize Nails", "Sprockets", "Faster Engineering", "Overclock", "Ultraboost"]),
    path("Bloon Trap", "Catches bloons for cash, then builds a devastating XXXL trap.", ["Long Range", "Deconstruction", "Cleansing Foam", "Bloon Trap", "XXXL Trap"])
  ]}
];

const plainPathRoles = {
  dart: ["Increases dart damage and projectile size.", "Adds darts and a temporary dart monkey transformation.", "Adds range, Camo detection, and high single-target damage."],
  boomerang: ["Increases projectile count and ricochet behavior.", "Increases attack speed and provides an active speed boost.", "Adds range, Lead popping, and MOAB knockback."],
  bomb: ["Increases explosion size, stun, and MOAB control.", "Adds missiles and anti-MOAB abilities.", "Adds fragments and grouped-bloon damage."],
  tack: ["Adds range and fire damage.", "Increases blade attack speed and grants Maelstrom abilities.", "Adds more tacks and attack speed."],
  ice: ["Freezes bloons and applies brittle debuffs.", "Adds larger freeze attacks and screen-freeze abilities.", "Slows MOAB-class bloons and increases damage taken."],
  glue: ["Applies corrosive glue and area damage.", "Increases glue rate and applies global glue debuffs.", "Slows MOAB-class bloons."],
  sniper: ["Increases damage against Ceramics and MOAB-class bloons.", "Increases fire rate and provides a cash ability.", "Adds shrapnel, bounce, and high fire rate."],
  sub: ["Adds range, radar support, and cooldown support.", "Adds missile attacks and First Strike abilities.", "Adds additional darts and submarine support."],
  buccaneer: ["Adds dart attacks and planes.", "Adds grape and cannon attacks plus income.", "Adds Camo detection, merchants, and grappling hooks."],
  ace: ["Adds bombs, darts, and fighter attacks.", "Adds Camo detection and screen-clearing abilities.", "Adds homing attacks and high single-target fire rate."],
  heli: ["Adds direct damage and missiles.", "Adds downdraft, tower movement, and cash support.", "Adds MOAB knockback and mini-helicopters."],
  mortar: ["Adds large splash damage and fire.", "Adds MOAB stun and an artillery ability.", "Adds Camo removal, burn, and global debuffs."],
  dartling: ["Adds continuous laser damage.", "Adds guided rockets and Rocket Storm/M.A.D.", "Adds buckshot and area denial."],
  wizard: ["Adds fire, Phoenix, and fire-based damage.", "Adds arcane projectile damage and Wall of Fire control.", "Adds Camo removal, Necromancer, and graveyard attacks."],
  super: ["Adds plasma and Sun Temple progression.", "Adds Robo Monkey, anti-MOAB attacks, and activated abilities.", "Adds Camo, knockback, and Dark Champion progression."],
  ninja: ["Adds shurikens and attack count.", "Adds slows, stuns, and sabotage abilities.", "Adds homing attacks and sticky bombs."],
  druid: ["Adds lightning and storm attacks.", "Increases attack speed and provides pop-based buffs.", "Adds life-leech, regeneration, and high-pierce attacks."],
  alchemist: ["Adds acid attacks and cash conversion.", "Applies attack-speed and damage buffs.", "Adds bloon transformation and support effects."],
  farm: ["Generates bananas and increases production.", "Stores cash in a bank and increases income.", "Collects income and increases passive payouts."],
  village: ["Buffs Primary Monkeys.", "Increases income and creates Monkeyopolis support.", "Adds Camo, cooldown reduction, and attack buffs."],
  spike: ["Creates durable spike piles.", "Creates spike storms and MOAB damage.", "Stores spikes at the end of the track."],
  engineer: ["Creates sentries and sentry damage.", "Temporarily boosts towers and adds cleansing foam.", "Creates Bloon Traps and cash generation."]
};

towers.forEach((tower) => {
  if (plainPathRoles[tower.id]) tower.paths.forEach((upgradePath, index) => { upgradePath.role = plainPathRoles[tower.id][index]; });
});

const stage = (id, name, category, availability, notes) => ({ id, name, category, availability, notes, reverse: true });
const stages = [
  stage("docks", "Docks", "beginner", "Below BFB Colosseum", "Dockside route with water and separated land."),
  stage("bloontonium-mines", "Bloontonium Mines", "novice", "Below ZOMG Superdome", "Cave route with central water."),
  stage("in-the-wall", "In the Wall", "novice", "Below ZOMG Superdome", "Route built around a large central wall."),
  stage("thin-ice", "Thin Ice", "novice", "Below ZOMG Superdome", "Snow map with thin-ice water areas."),
  stage("mayan", "Mayan", "intermediate", "Below Hall of Masters", "Temple map with separated lanes."),
  stage("up-on-the-roof", "Up on the Roof", "intermediate", "Ranked arenas; category varies", "Long rooftop route with limited placement areas."),
  stage("garden", "Garden", "standard", "All Battle Arenas", "Grassy map with pools and separated placement areas."),
  stage("castle-ruins", "Castle Ruins", "standard", "All Battle Arenas", "Castle map with multiple ruins and water."),
  stage("koru", "Koru", "standard", "All Battle Arenas", "Spiral-shaped track."),
  stage("sands-of-time", "Sands of Time", "standard", "All Battle Arenas", "Hourglass-shaped route with water."),
  stage("glade", "Glade", "standard", "All Battle Arenas", "Forest map with pools of water."),
  stage("basalt-columns", "Basalt Columns", "standard", "All Battle Arenas", "Hexagonal route on raised columns."),
  stage("dino-graveyard", "Dino Graveyard", "standard", "All Battle Arenas", "Fossil site with multiple placement zones."),
  stage("star", "Star", "standard", "All Battle Arenas", "Star-shaped route with water on both sides."),
  stage("oasis", "Oasis", "standard", "All Battle Arenas", "Circular route with central water."),
  stage("cobra-command", "COBRA Command", "standard", "All Battle Arenas", "Button changes the normal lane to a shorter lane."),
  stage("off-tide", "Off-Tide", "standard", "All Battle Arenas", "Beach map with tide-separated lanes."),
  stage("sun-palace", "Sun Palace", "standard", "All Battle Arenas", "Adora-themed map with a long zigzag route."),
  stage("bloonstone-quarry", "Bloonstone Quarry", "standard", "All Battle Arenas", "Railway route with central water and limited farm space."),
  stage("park", "Park", "standard", "All Battle Arenas", "Returning Battles map with two natural and two sent exits."),
  stage("building-site", "Building Site", "advanced", "White Wasteland and above", "Crane redirects bloons between upper and lower lanes."),
  stage("banana-depot", "Banana Depot", "advanced", "White Wasteland and above", "Trucks and crates block space and line of sight; obstacles can be removed."),
  stage("precious-space", "Precious Space", "advanced", "White Wasteland and above", "Small placement zones separated by long lanes."),
  stage("salmon-ladder", "Salmon Ladder", "advanced", "White Wasteland and above", "Vertical route with restricted land."),
  stage("times-up", "Time's Up", "advanced", "White Wasteland and above", "Short timed route with limited placement space."),
  stage("splashdown", "Splashdown", "advanced", "White Wasteland and above", "Aquatic obstacle-course layout."),
  stage("street-party", "Street Party", "advanced", "White Wasteland and above", "Open map with separated street sections."),
  stage("magma-mixup", "Magma Mixup", "advanced", "White Wasteland and above", "Lava-themed map with separated placement areas."),
  stage("bloon-bot-factory", "Bloon Bot Factory", "advanced-plus", "Lead Dungeon and above", "Factory platforms drop on a repeating round schedule."),
  stage("pirate-cove", "Pirate Cove", "advanced-plus", "Lead Dungeon and above", "Pirate-themed water map with separated land."),
  stage("ports", "Ports", "expert", "ZOMG Superdome and Hall of Masters", "Expert map with distributed water placement."),
  stage("inflection", "Inflection", "expert", "ZOMG Superdome and Hall of Masters", "Expert map with split path interactions."),
  stage("island-base", "Island Base", "special", "Clan Wars / event availability", "Special map with event-specific availability.")
];

const heroFilterDefs = ["all", "starter", "support", "control", "economy", "late-game", "damage"];
const towerFilterDefs = ["all", "Primary", "Military", "Magic", "Support"];
const stageFilterDefs = ["all", "beginner", "novice", "intermediate", "standard", "advanced", "advanced-plus", "expert", "special"];
let selectedHero = heroes[0].id;
let selectedTower = towers[0].id;
let heroFilter = "all";
let towerFilter = "all";
let stageFilter = "all";
let heroQuery = "";
let towerQuery = "";
let stageQuery = "";

const byId = (id) => document.getElementById(id);
const pretty = (value) => value.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" ");

const upgradeDescriptions = {
  "Sharp Shots": "Increases dart pierce.", "Razor Sharp Shots": "Increases dart pierce again.", "Spike-o-pult": "Fires a large spiked ball with high pierce.",
  "Juggernaut": "Fires a larger, faster spiked ball.", "Ultra Juggernaut": "Fires multiple high-damage spiked balls.",
  "Wall of Fire": "Places a damaging fire wall on the track.", "Dragon's Breath": "Adds rapid fire attacks and strengthens Wall of Fire.",
  "Glue Storm": "Ability: applies glue and damage to bloons across the map.", "The Bloon Solver": "Applies corrosive glue that damages bloons over time.",
  "Ring of Fire": "Creates a continuous ring of fire around the tower.", "Inferno Ring": "Increases ring damage and adds meteor attacks.",
  "Blade Maelstrom": "Ability: creates a temporary storm of blades.", "Super Maelstrom": "Ability: creates a stronger, longer blade storm.",
  "MOAB Press": "Knocks MOAB-class bloons backward with heavy boomerangs.", "MOAB Domination": "Increases MOAB knockback and boomerang damage.",
  "Bloon Impact": "Stuns bloons hit by the explosion.", "Bloon Crush": "Stuns bloons for longer and increases explosion damage.",
  "MOAB Assassin": "Ability: launches a high-damage missile at a MOAB-class bloon.", "MOAB Eliminator": "Ability: launches a stronger anti-MOAB missile.",
  "Snowstorm": "Ability: freezes bloons across the map.", "Absolute Zero": "Ability: freezes bloons and increases freeze duration.",
  "Embrittlement": "Makes bloons take more damage from most attacks.", "Super Brittle": "Applies a stronger damage-increasing brittle debuff.",
  "Supply Drop": "Ability: drops cash crates and adds sniper damage.", "Elite Sniper": "Increases sniper attack speed and supply income.",
  "First Strike": "Ability: launches a global anti-MOAB missile.", "Pre-emptive Strike": "Automatically damages incoming MOAB-class bloons.",
  "Aircraft Carrier": "Adds several dart-firing fighter planes.", "Carrier Flagship": "Adds more powerful planes and buffs water towers.",
  "Sky Shredder": "Adds high-rate homing darts and bombs.", "The Tsar Bomba": "Ability: drops a map-wide high-damage bomb.",
  "Rocket Storm": "Ability: fires a large volley of guided rockets.", "M.A.D.": "Fires rapid high-damage rockets at MOAB-class bloons.",
  "Ray of Doom": "Fires a continuous beam with very high damage.", "Wizard Lord Phoenix": "Summons a permanent Phoenix with stronger attacks.",
  "True Sun God": "Creates the highest Sun Temple form with powerful attacks and sacrifices.", "Anti-Bloon": "Ability: fires a large map-wide plasma attack.",
  "Grand Saboteur": "Automatically sabotages bloons and increases sabotage damage.", "Master Bomber": "Throws homing bombs with high MOAB damage.",
  "Permanent Brew": "Applies permanent attack, range, and damage buffs to nearby towers.", "Total Transformation": "Ability: transforms nearby monkeys into temporary attacking forms.",
  "Banana Central": "Generates a large amount of cash each round.", "Monkey Wall Street": "Generates cash and collects nearby income automatically.",
  "Monkeyopolis": "Converts nearby farms into a village-based income source.", "Carpet of Spikes": "Creates a large, damaging spike pile across track exits.",
  "Perma-Spike": "Stores a large number of high-damage spikes at the track end.", "Overclock": "Ability: temporarily increases a tower's attack speed.",
  "Ultraboost": "Repeatedly overclocks a tower and permanently improves its attack speed.", "Bloon Trap": "Places a trap that captures bloons and pays cash when full.",
  "XXXL Trap": "Places a larger trap that captures stronger bloons and pays more cash."
};

function upgradeDescription(name, tier) {
  if (upgradeDescriptions[name]) return upgradeDescriptions[name];
  const lower = name.toLowerCase();
  if (/(range|radius|eyesight|targeting|vision|camo|spy plane|radar|sense)/.test(lower)) return "Increases range or adds Camo detection.";
  if (/(faster|rapid|quick|reload|firing|shooting|throwing|production|swivel)/.test(lower)) return "Increases attack speed or production speed.";
  if (/(pierce|shots|darts|rangs|tacks|shurikens|thorns)/.test(lower)) return "Adds projectiles or increases pierce.";
  if (/(moab|blimp|press|shove|stun|bomb|missile|rocket)/.test(lower)) return "Increases damage or control against MOAB-class bloons.";
  if (/(farm|banana|market|bank|income|cash|trade|merchant|town|city)/.test(lower)) return "Increases cash generation.";
  if (/(glue|slow|freeze|cold|ice|sabotage|distraction)/.test(lower)) return "Adds slow, freeze, or sabotage effects.";
  return `Tier ${tier + 1} upgrade effect.`;
}

function renderFilters(targetId, definitions, current, handler) {
  byId(targetId).innerHTML = definitions.map((filter) => `<button class="filter-pill ${filter === current ? "active" : ""}" type="button" data-filter="${filter}">${filter === "all" ? "All" : pretty(filter)}</button>`).join("");
  byId(targetId).querySelectorAll("button").forEach((button) => button.addEventListener("click", () => handler(button.dataset.filter)));
}

function heroMatches(hero) {
  const haystack = [hero.name, hero.role, hero.summary, hero.tag, ...hero.alt, ...hero.abilities.flat()].join(" ").toLowerCase();
  return (heroFilter === "all" || hero.className === heroFilter) && haystack.includes(heroQuery);
}

function renderHeroList() {
  const list = heroes.filter(heroMatches);
  const el = byId("heroList");
  if (!list.length) {
    el.innerHTML = `<div class="hero-list-empty">No hero matches that search.</div>`;
    byId("heroDetail").innerHTML = `<div class="empty-state">Try another hero, role, or ability.</div>`;
    return;
  }
  if (!list.some((hero) => hero.id === selectedHero)) selectedHero = list[0].id;
  el.innerHTML = list.map((hero, index) => `<button type="button" class="hero-list-button ${hero.id === selectedHero ? "active" : ""}" data-hero="${hero.id}">
    <img class="hero-avatar" src="${heroImg(hero.image)}" alt="${hero.name}" />
    <span><span class="hero-list-name">${hero.name}</span><span class="hero-list-role">${hero.role}</span></span>
    <span class="hero-list-number">${String(index + 1).padStart(2, "0")}</span>
  </button>`).join("");
  el.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    selectedHero = button.dataset.hero;
    renderHeroList();
    renderHeroDetail();
  }));
}

function renderHeroDetail() {
  const hero = heroes.find((item) => item.id === selectedHero);
  if (!hero) return;
  byId("heroDetail").innerHTML = `
    <div class="detail-header">
      <img class="detail-portrait" src="${heroImg(hero.image)}" alt="${hero.name} portrait" />
      <div>
        <div class="detail-overline"><span class="pulse"></span>${hero.role} · hero</div>
        <h3>${hero.name}</h3>
        <p class="detail-summary">${hero.summary}</p>
      </div>
      <div class="detail-aside"><span class="detail-tag">${hero.tag}</span><span class="detail-price">place <strong>${hero.price}</strong></span></div>
    </div>
    <div class="ability-row">${hero.abilities.map(([levelName, ability]) => `<span class="ability-chip"><b>${levelName}</b>${ability}</span>`).join("")}</div>
    <div class="skin-row"><span class="skin-label">Alt heroes</span>${hero.alt.map((skin) => `<span class="skin-chip">${skin}</span>`).join("")}</div>
    <div class="level-title-row"><h4>Level-by-level changes</h4><p>Key unlocks are highlighted in lime.</p></div>
    <div class="level-grid">${hero.levels.map((item, index) => `<div class="level-item ${item.key ? "key-level" : ""}"><span class="level-number">${index + 1}</span><div><strong>${item.title}</strong><p>${item.detail}</p></div></div>`).join("")}</div>
  `;
}

function renderAbilityDirectory() {
  const abilityRows = heroes.flatMap((hero) => hero.abilities.map(([levelName, ability]) => {
    const levelItem = hero.levels.find((item) => item.title === ability);
    return { hero, levelName, ability, detail: levelItem ? levelItem.detail : "Ability effect listed in the hero's level table." };
  }));
  byId("abilityDirectory").innerHTML = abilityRows.map(({ hero, levelName, ability, detail }) => `
    <article class="ability-card">
      <img src="${heroImg(hero.image)}" alt="${hero.name}" />
      <div>
        <span class="ability-meta">${hero.name} · ${levelName}</span>
        <h3>${ability}</h3>
        <p>${detail}</p>
      </div>
    </article>
  `).join("");
}

function towerMatches(tower) {
  const haystack = [tower.name, tower.className, tower.role, ...tower.paths.flatMap((item) => [item.name, item.role, ...item.upgrades])].join(" ").toLowerCase();
  return (towerFilter === "all" || tower.className === towerFilter) && haystack.includes(towerQuery);
}

function renderTowerPicker() {
  const list = towers.filter(towerMatches);
  const el = byId("towerPicker");
  if (!list.length) {
    el.innerHTML = `<div class="empty-state">No tower matches that search.</div>`;
    byId("towerDetail").innerHTML = "";
    return;
  }
  if (!list.some((tower) => tower.id === selectedTower)) selectedTower = list[0].id;
  el.innerHTML = list.map((tower) => `<button type="button" class="tower-tile class-${tower.className.toLowerCase()} ${tower.id === selectedTower ? "active" : ""}" data-tower="${tower.id}"><img src="${towerImg(tower.file)}" alt="" /><span>${tower.name}</span></button>`).join("");
  el.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
    selectedTower = button.dataset.tower;
    renderTowerPicker();
    renderTowerDetail();
  }));
}

function renderTowerDetail() {
  const tower = towers.find((item) => item.id === selectedTower);
  if (!tower) return;
  byId("towerDetail").innerHTML = `
    <div class="tower-header"><img src="${towerImg(tower.file)}" alt="${tower.name} icon" /><div><h3>${tower.name}</h3><p>Base function: ${tower.role}. Upgrade paths change damage, range, support, or control.</p></div><div class="tower-class">${tower.className}<br />3 paths · 15 upgrades</div></div>
    <div class="path-grid">${tower.paths.map((upgradePath, pathIndex) => `<div class="path-column"><div class="path-heading"><h4>${upgradePath.name}</h4><span>PATH ${pathIndex + 1}</span></div><p class="path-role">${upgradePath.role}</p><div class="upgrade-list">${upgradePath.upgrades.map((upgrade, tier) => `<div class="upgrade"><img class="upgrade-icon" src="${upgradeIcon(tower.file, pathIndex, tier)}" alt="" /><div><strong>${upgrade}</strong><small>${upgradeDescription(upgrade, tier)}</small></div></div>`).join("")}</div></div>`).join("")}</div>
  `;
}

function stageMatches(item) {
  const haystack = [item.name, item.category, item.availability, item.notes].join(" ").toLowerCase();
  return (stageFilter === "all" || item.category === stageFilter) && haystack.includes(stageQuery);
}

function renderStageList() {
  const list = stages.filter(stageMatches);
  const el = byId("stageList");
  if (!list.length) {
    el.innerHTML = `<div class="empty-state">No stage matches that search.</div>`;
    return;
  }
  el.innerHTML = list.map((item, index) => `
    <article class="stage-card stage-${item.category}">
      <div class="stage-card-mark"><span>${String(index + 1).padStart(2, "0")}</span></div>
      <div class="stage-card-body">
        <div class="stage-card-top"><h3>${item.name}</h3><span class="stage-category">${pretty(item.category)}</span></div>
        <p>${item.notes}</p>
        <div class="stage-meta"><span>${item.availability}</span><span>${item.reverse ? "Reverse available" : "Standard only"}</span></div>
      </div>
    </article>
  `).join("");
}

function setHeroFilter(next) {
  heroFilter = next;
  renderFilters("heroFilters", heroFilterDefs, heroFilter, setHeroFilter);
  renderHeroList();
  renderHeroDetail();
}

function setTowerFilter(next) {
  towerFilter = next;
  renderFilters("towerFilters", towerFilterDefs, towerFilter, setTowerFilter);
  renderTowerPicker();
  renderTowerDetail();
}

function setStageFilter(next) {
  stageFilter = next;
  renderFilters("stageFilters", stageFilterDefs, stageFilter, setStageFilter);
  renderStageList();
}

byId("heroSearch").addEventListener("input", (event) => { heroQuery = event.target.value.trim().toLowerCase(); renderHeroList(); renderHeroDetail(); });
byId("towerSearch").addEventListener("input", (event) => { towerQuery = event.target.value.trim().toLowerCase(); renderTowerPicker(); renderTowerDetail(); });
byId("stageSearch").addEventListener("input", (event) => { stageQuery = event.target.value.trim().toLowerCase(); renderStageList(); });

byId("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("bloonbook-theme", document.body.classList.contains("dark") ? "dark" : "light");
});
if (localStorage.getItem("bloonbook-theme") === "dark") document.body.classList.add("dark");

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement.tagName !== "INPUT") { event.preventDefault(); byId("heroSearch").focus(); }
});

const viewLinks = document.querySelectorAll("[data-view-link]");
const viewPanels = document.querySelectorAll(".view-panel");
function setView(view) {
  viewPanels.forEach((panel) => panel.classList.toggle("hidden", panel.id !== view));
  viewLinks.forEach((link) => link.classList.toggle("active", link.dataset.viewLink === view));
  history.replaceState(null, "", `#${view}`);
}
viewLinks.forEach((link) => link.addEventListener("click", () => setView(link.dataset.viewLink)));
const initialView = ["heroes", "towers", "stages", "abilities", "mechanics"].includes(window.location.hash.slice(1)) ? window.location.hash.slice(1) : "heroes";
setView(initialView);

renderFilters("heroFilters", heroFilterDefs, heroFilter, setHeroFilter);
renderFilters("towerFilters", towerFilterDefs, towerFilter, setTowerFilter);
renderFilters("stageFilters", stageFilterDefs, stageFilter, setStageFilter);
renderHeroList();
renderHeroDetail();
renderAbilityDirectory();
renderTowerPicker();
renderTowerDetail();
renderStageList();
