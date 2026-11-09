// ============================================================
// 1. DATA (Ported from Python)
// ============================================================
const GEN1 = "Bulbasaur|Ivysaur|Venusaur|Charmander|Charmeleon|Charizard|Squirtle|Wartortle|Blastoise|Caterpie|Metapod|Butterfree|Weedle|Kakuna|Beedrill|Pidgey|Pidgeotto|Pidgeot|Rattata|Raticate|Spearow|Fearow|Ekans|Arbok|Pikachu|Raichu|Sandshrew|Sandslash|Nidoran♀|Nidoran♂|Nidoqueen|Nidorina|Nidorino|Nidoking|Clefairy|Clefable|Vulpix|Ninetales|Jigglypuff|Wigglytuff|Zubat|Golbat|Oddish|Gloom|Vileplume|Paras|Parasect|Venonat|Venomoth|Diglett|Dugtrio|Meowth|Persian|Psyduck|Golduck|Mankey|Primeape|Growlithe|Arcanine|Poliwag|Poliwhirl|Poliwrath|Abra|Kadabra|Alakazam|Machop|Machoke|Machamp|Bellsprout|Weepinbell|Victreebel|Tentacool|Tentacruel|Geodude|Graveler|Golem|Ponyta|Rapidash|Slowpoke|Slowbro|Magnemite|Magneton|Farfetch'd|Doduo|Dodrio|Seel|Dewgong|Grimer|Muk|Shellder|Cloyster|Gastly|Haunter|Gengar|Onix|Drowzee|Hypno|Krabby|Kingler|Voltorb|Electrode|Exeggcute|Exeggutor|Cubone|Marowak|Hitmonlee|Hitmonchan|Lickitung|Koffing|Weezing|Rhyhorn|Rhydon|Chansey|Tangela|Kangaskhan|Horsea|Seadra|Goldeen|Seaking|Staryu|Starmie|Mr. Mime|Scyther|Jynx|Electabuzz|Magmar|Pinsir|Tauros|Magikarp|Gyarados|Lapras|Ditto|Eevee|Vaporeon|Jolteon|Flareon|Porygon|Omanyte|Omastar|Kabuto|Kabutops|Aerodactyl|Snorlax|Articuno|Zapdos|Moltres|Dratini|Dragonair|Dragonite|Mewtwo|Mew".split("|");
const GEN2 = "Chikorita|Bayleef|Meganium|Cyndaquil|Quilava|Typhlosion|Totodile|Croconaw|Feraligatr|Sentret|Furret|Hoothoot|Noctowl|Ledyba|Ledian|Spinarak|Ariados|Crobat|Chinchou|Lanturn|Pichu|Cleffa|Igglybuff|Togepi|Togetic|Natu|Xatu|Mareep|Flaaffy|Ampharos|Bellossom|Marill|Azumarill|Sudowoodo|Politoed|Hoppip|Skiploom|Jumpluff|Aipom|Sunkern|Sunflora|Yanma|Wooper|Quagsire|Espeon|Umbreon|Murkrow|Slowking|Misdreavus|Unown|Wobbuffet|Girafarig|Pineco|Forretress|Dunsparce|Gligar|Steelix|Snubbull|Granbull|Qwilfish|Scizor|Shuckle|Heracross|Sneasel|Teddiursa|Ursaring|Slugma|Magcargo|Swinub|Piloswine|Corsola|Remoraid|Octillery|Delibird|Mantine|Skarmory|Houndour|Houndoom|Kingdra|Phanpy|Donphan|Porygon2|Stantler|Smeargle|Tyrogue|Hitmontop|Smoochum|Elekid|Magby|Miltank|Blissey|Raikou|Entei|Suicune|Larvitar|Pupitar|Tyranitar|Lugia|Ho-Oh|Celebi".split("|");
const GEN3 = "Treecko|Grovyle|Sceptile|Torchic|Combusken|Blaziken|Mudkip|Marshtomp|Swampert|Poochyena|Mightyena|Zigzagoon|Linoone|Wurmple|Silcoon|Beautifly|Cascoon|Dustox|Lotad|Lombre|Ludicolo|Seedot|Nuzleaf|Shiftry|Taillow|Swellow|Wingull|Pelipper|Ralts|Kirlia|Gardevoir|Surskit|Masquerain|Shroomish|Breloom|Slakoth|Vigoroth|Slaking|Nincada|Ninjask|Shedinja|Whismur|Loudred|Exploud|Makuhita|Hariyama|Azurill|Nosepass|Skitty|Delcatty|Sableye|Mawile|Aron|Lairon|Aggron|Meditite|Medicham|Electrike|Manectric|Plusle|Minun|Volbeat|Illumise|Roselia|Gulpin|Swalot|Carvanha|Sharpedo|Wailmer|Wailord|Numel|Camerupt|Torkoal|Spoink|Grumpig|Spinda|Trapinch|Vibrava|Flygon|Cacnea|Cacturne|Swablu|Altaria|Zangoose|Seviper|Lunatone|Solrock|Barboach|Whiscash|Corphish|Crawdaunt|Baltoy|Claydol|Lileep|Cradily|Anorith|Armaldo|Feebas|Milotic|Castform|Kecleon|Shuppet|Banette|Duskull|Dusclops|Tropius|Chimecho|Absol|Wynaut|Snorunt|Glalie|Spheal|Sealeo|Walrein|Clamperl|Huntail|Gorebyss|Relicanth|Luvdisc|Bagon|Shelgon|Salamence|Beldum|Metang|Metagross|Regirock|Regice|Registeel|Latias|Latios|Kyogre|Groudon|Rayquaza|Jirachi|Deoxys".split("|");
const GEN4 = "Turtwig|Grotle|Torterra|Chimchar|Monferno|Infernape|Piplup|Prinplup|Empoleon|Starly|Staravia|Staraptor|Bidoof|Bibarel|Kricketot|Kricketune|Shinx|Luxio|Luxray|Budew|Roserade|Cranidos|Rampardos|Shieldon|Bastiodon|Burmy|Wormadam|Mothim|Combee|Vespiquen|Pachirisu|Buizel|Floatzel|Cherubi|Cherrim|Shellos|Gastrodon|Ambipom|Drifloon|Drifblim|Buneary|Lopunny|Mismagius|Honchkrow|Glameow|Purugly|Chingling|Stunky|Skuntank|Bronzor|Bronzong|Bonsly|Mime Jr.|Happiny|Chatot|Spiritomb|Gible|Gabite|Garchomp|Munchlax|Riolu|Lucario|Hippopotas|Hippowdon|Skorupi|Drapion|Croagunk|Toxicroak|Carnivine|Finneon|Lumineon|Mantyke|Snover|Abomasnow|Weavile|Magnezone|Lickilicky|Rhyperior|Tangrowth|Electivire|Magmortar|Togekiss|Yanmega|Leafeon|Glaceon|Gliscor|Mamoswine|Porygon-Z|Gallade|Probopass|Dusknoir|Froslass|Rotom|Uxie|Mesprit|Azelf|Dialga|Palkia|Heatran|Regigigas|Giratina|Cresselia|Phione|Manaphy|Darkrai|Shaymin|Arceus".split("|");
const GEN5 = "Victini|Snivy|Servine|Serperior|Tepig|Pignite|Emboar|Oshawott|Dewott|Samurott|Patrat|Watchog|Lillipup|Herdier|Stoutland|Purrloin|Liepard|Pansage|Simisage|Pansear|Simisear|Panpour|Simipour|Munna|Musharna|Pidove|Tranquill|Unfezant|Blitzle|Zebstrika|Roggenrola|Boldore|Gigalith|Woobat|Swoobat|Drilbur|Excadrill|Audino|Timburr|Gurdurr|Conkeldurr|Tympole|Palpitoad|Seismitoad|Throh|Sawk|Sewaddle|Swadloon|Leavanny|Venipede|Whirlipede|Scolipede|Cottonee|Whimsicott|Petilil|Lilligant|Basculin|Sandile|Krokorok|Krookodile|Darumaka|Darmanitan|Maractus|Dwebble|Crustle|Scraggy|Scrafty|Sigilyph|Yamask|Cofagrigus|Tirtouga|Carracosta|Archen|Archeops|Trubbish|Garbodor|Zorua|Zoroark|Minccino|Cinccino|Gothita|Gothorita|Gothitelle|Solosis|Duosion|Reuniclus|Ducklett|Swanna|Vanillite|Vanillish|Vanilluxe|Deerling|Sawsbuck|Emolga|Karrablast|Escavalier|Foongus|Amoonguss|Frillish|Jellicent|Alomomola|Joltik|Galvantula|Ferroseed|Ferrothorn|Klink|Klang|Klinklang|Tynamo|Eelektrik|Eelektross|Elgyem|Beheeyem|Litwick|Lampent|Chandelure|Axew|Fraxure|Haxorus|Cubchoo|Beartic|Cryogonal|Shelmet|Accelgor|Stunfisk|Mienfoo|Mienshao|Druddigon|Golett|Golurk|Pawniard|Bisharp|Bouffalant|Rufflet|Braviary|Vullaby|Mandibuzz|Heatmor|Durant|Deino|Zweilous|Hydreigon|Larvesta|Volcarona|Cobalion|Terrakion|Virizion|Tornadus|Thundurus|Reshiram|Zekrom|Landorus|Kyurem|Keldeo|Meloetta|Genesect".split("|");
const GEN6 = "Chespin|Quilladin|Chesnaught|Fennekin|Braixen|Delphox|Froakie|Frogadier|Greninja|Bunnelby|Diggersby|Fletchling|Fletchinder|Talonflame|Scatterbug|Spewpa|Vivillon|Litleo|Pyroar|Flabébé|Floette|Florges|Skiddo|Gogoat|Pancham|Pangoro|Furfrou|Espurr|Meowstic|Honedge|Doublade|Aegislash|Spritzee|Aromatisse|Swirlix|Slurpuff|Inkay|Malamar|Binacle|Barbaracle|Skrelp|Dragalge|Clauncher|Clawitzer|Helioptile|Heliolisk|Tyrunt|Tyrantrum|Amaura|Aurorus|Sylveon|Hawlucha|Dedenne|Carbink|Goomy|Sliggoo|Goodra|Klefki|Phantump|Trevenant|Pumpkaboo|Gourgeist|Bergmite|Avalugg|Noibat|Noivern|Xerneas|Yveltal|Zygarde|Diancie|Hoopa|Volcanion".split("|");
const GEN7 = "Rowlet|Dartrix|Decidueye|Litten|Torracat|Incineroar|Popplio|Brionne|Primarina|Pikipek|Trumbeak|Toucannon|Yungoos|Gumshoos|Grubbin|Charjabug|Vikavolt|Crabrawler|Crabominable|Oricorio|Cutiefly|Ribombee|Rockruff|Lycanroc|Wishiwashi|Mareanie|Toxapex|Mudbray|Mudsdale|Dewpider|Araquanid|Fomantis|Lurantis|Morelull|Shiinotic|Salandit|Salazzle|Stufful|Bewear|Bounsweet|Steenee|Tsareena|Comfey|Oranguru|Passimian|Wimpod|Golisopod|Sandygast|Palossand|Pyukumuku|Type: Null|Silvally|Minior|Komala|Turtonator|Togedemaru|Mimikyu|Bruxish|Drampa|Dhelmise|Jangmo-o|Hakamo-o|Kommo-o|Tapu Koko|Tapu Lele|Tapu Bulu|Tapu Fini|Cosmog|Cosmoem|Solgaleo|Lunala|Nihilego|Buzzwole|Pheromosa|Xurkitree|Celesteela|Kartana|Guzzlord|Necrozma|Magearna|Marshadow|Poipole|Naganadel|Stakataka|Blacephalon|Zeraora|Meltan|Melmetal".split("|");
const GEN8 = "Grookey|Thwackey|Rillaboom|Scorbunny|Raboot|Cinderace|Sobble|Drizzile|Inteleon|Skwovet|Greedent|Rookidee|Corvisquire|Corviknight|Blipbug|Dottler|Orbeetle|Nickit|Thievul|Gossifleur|Eldegoss|Wooloo|Dubwool|Chewtle|Drednaw|Yamper|Boltund|Rolycoly|Carkol|Coalossal|Applin|Flapple|Appletun|Silicobra|Sandaconda|Cramorant|Arrokuda|Barraskewda|Toxel|Toxtricity|Sizzlipede|Centiskorch|Clobbopus|Grapploct|Sinistea|Polteageist|Hatenna|Hattrem|Hatterene|Impidimp|Morgrem|Grimmsnarl|Obstagoon|Perrserker|Cursola|Sirfetch'd|Mr. Rime|Runerigus|Milcery|Alcremie|Falinks|Pincurchin|Snom|Frosmoth|Stonjourner|Eiscue|Indeedee|Morpeko|Cufant|Copperajah|Dracozolt|Arctozolt|Dracovish|Arctovish|Duraludon|Dreepy|Drakloak|Dragapult|Zacian|Zamazenta|Eternatus|Kubfu|Urshifu|Zarude|Regieleki|Regidrago|Glastrier|Spectrier|Calyrex|Wyrdeer|Kleavor|Ursaluna|Basculegion|Sneasler|Overqwil|Enamorus".split("|");
const GEN9 = "Sprigatito|Floragato|Meowscarada|Fuecoco|Crocalor|Skeledirge|Quaxly|Quaxwell|Quaquaval|Lechonk|Oinkologne|Tarountula|Spidops|Nymble|Lokix|Pawmi|Pawmo|Pawmot|Tandemaus|Maushold|Fidough|Dachsbun|Smoliv|Dolliv|Arboliva|Squawkabilly|Nacli|Naclstack|Garganacl|Charcadet|Armarouge|Ceruledge|Tadbulb|Bellibolt|Wattrel|Kilowattrel|Maschiff|Mabosstiff|Shroodle|Grafaiai|Bramblin|Brambleghast|Toedscool|Toedscruel|Klawf|Capsakid|Scovillain|Rellor|Rabsca|Flittle|Espathra|Tinkatink|Tinkatuff|Tinkaton|Wiglett|Wugtrio|Bombirdier|Finizen|Palafin|Varoom|Revavroom|Cyclizar|Orthworm|Glimmet|Glimmora|Greavard|Houndstone|Flamigo|Cetoddle|Cetitan|Veluza|Dondozo|Tatsugiri|Annihilape|Clodsire|Farigiraf|Dudunsparce|Kingambit|Great Tusk|Scream Tail|Brute Bonnet|Flutter Mane|Slither Wing|Sandy Shocks|Iron Treads|Iron Bundle|Iron Hands|Iron Jugulis|Iron Moth|Iron Thorns|Frigibax|Arctibax|Baxcalibur|Gimmighoul|Gholdengo|Wo-Chien|Chien-Pao|Ting-Lu|Chi-Yu|Roaring Moon|Iron Valiant|Koraidon|Miraidon|Walking Wake|Iron Leaves|Dipplin|Poltchageist|Sinistcha|Okidogi|Munkidori|Fezandipiti|Ogerpon|Archaludon|Hydrapple|Gouging Fire|Raging Bolt|Iron Boulder|Iron Crown|Terapagos|Pecharunt".split("|");

const GENS = [
    { name: "Gen 1 (Kanto)", dex_start: 1, names: GEN1 },
    { name: "Gen 2 (Johto)", dex_start: 152, names: GEN2 },
    { name: "Gen 3 (Hoenn)", dex_start: 252, names: GEN3 },
    { name: "Gen 4 (Sinnoh)", dex_start: 387, names: GEN4 },
    { name: "Gen 5 (Unova)", dex_start: 494, names: GEN5 },
    { name: "Gen 6 (Kalos)", dex_start: 650, names: GEN6 },
    { name: "Gen 7 (Alola)", dex_start: 722, names: GEN7 },
    { name: "Gen 8 (Galar & Hisui)", dex_start: 810, names: GEN8 },
    { name: "Gen 9 (Paldea)", dex_start: 906, names: GEN9 }
];

const REGIONAL_FORMS = {
    19: [["Rattata", "Alolan", "10091", 1]],
    20: [["Raticate", "Alolan", "10092", 1]],
    26: [["Raichu", "Alolan", "10100", 1]],
    27: [["Sandshrew", "Alolan", "10101", 1]],
    28: [["Sandslash", "Alolan", "10102", 1]],
    37: [["Vulpix", "Alolan", "10103", 1]],
    38: [["Ninetales", "Alolan", "10104", 1]],
    50: [["Diglett", "Alolan", "10105", 1]],
    51: [["Dugtrio", "Alolan", "10106", 1]],
    52: [
        ["Meowth", "Alolan", "10107", 2],
        ["Meowth", "Galarian", "10161", 3]
    ],
    53: [["Persian", "Alolan", "10108", 1]],
    58: [["Growlithe", "Hisuian", "10229", 3]],
    59: [["Arcanine", "Hisuian", "10230", 3]],
    74: [["Geodude", "Alolan", "10109", 1]],
    75: [["Graveler", "Alolan", "10110", 1]],
    76: [["Golem", "Alolan", "10111", 1]],
    77: [["Ponyta", "Galarian", "10162", 2]],
    78: [["Rapidash", "Galarian", "10163", 2]],
    79: [["Slowpoke", "Galarian", "10164", 2]],
    80: [["Slowbro", "Galarian", "10165", 2]],
    83: [["Farfetch'd", "Galarian", "10166", 2]],
    88: [["Grimer", "Alolan", "10112", 1]],
    89: [["Muk", "Alolan", "10113", 1]],
    100: [["Voltorb", "Hisuian", "10231", 3]],
    101: [["Electrode", "Hisuian", "10232", 3]],
    103: [["Exeggutor", "Alolan", "10114", 1]],
    105: [["Marowak", "Alolan", "10115", 1]],
    110: [["Weezing", "Galarian", "10167", 2]],
    122: [["Mr. Mime", "Galarian", "10168", 2]],
    128: [
        ["Tauros", "Paldean (Combat)", "10250", 4],
        ["Tauros", "Paldean (Blaze)", "10251", 4],
        ["Tauros", "Paldean (Aqua)", "10252", 4]
    ],
    144: [["Articuno", "Galarian", "10169", 2]],
    145: [["Zapdos", "Galarian", "10170", 2]],
    146: [["Moltres", "Galarian", "10171", 2]],
    157: [["Typhlosion", "Hisuian", "10233", 3]],
    194: [["Wooper", "Paldean", "10253", 4]],
    199: [["Slowking", "Galarian", "10172", 2]],
    211: [["Qwilfish", "Hisuian", "10234", 3]],
    215: [["Sneasel", "Hisuian", "10235", 3]],
    222: [["Corsola", "Galarian", "10173", 2]],
    263: [["Zigzagoon", "Galarian", "10174", 2]],
    264: [["Linoone", "Galarian", "10175", 2]],
    503: [["Samurott", "Hisuian", "10236", 3]],
    549: [["Lilligant", "Hisuian", "10237", 3]],
    554: [["Darumaka", "Galarian", "10176", 2]],
    562: [["Yamask", "Galarian", "10179", 2]],
    570: [["Zorua", "Hisuian", "10238", 3]],
    571: [["Zoroark", "Hisuian", "10239", 3]],
    618: [["Stunfisk", "Galarian", "10180", 2]],
    628: [["Braviary", "Hisuian", "10240", 3]],
    705: [["Sliggoo", "Hisuian", "10241", 3]],
    706: [["Goodra", "Hisuian", "10242", 3]],
    713: [["Avalugg", "Hisuian", "10243", 3]],
    724: [["Decidueye", "Hisuian", "10244", 3]]
};

const BASE_FORM_NAMES = {
     3: "Venusaur - Male",
    12: "Butterfree - Male",
    25: "Pikachu - Male",
    44: "Gloom - Male",
    45: "Vileplume - Male",
    84: "Doduo - Male",
    85: "Dodrio - Male",
   129: "Magikarp - Male",
   130: "Gyarados - Male",
   133: "Eevee - Male",
   178: "Xatu - Male",
   194: "Wooper - Male",
   202: "Wobbuffet - Male",
   203: "Girafarig - Male",
   214: "Heracross - Male",
   332: "Cacturne - Male",
   412: "Burmy - Plant",
   413: "Wormadam - Plant",
   415: "Combee - Male",
   421: "Cherrim - Overcast",
   422: "Shellos - West",
   423: "Gastrodon - West",
   449: "Hippopotas - Male",
   450: "Hippowdon - Male",
   521: "Unfezant - Male",
   550: "Basculin - Red-Striped",
   555: "Darmanitan - Standard",
   585: "Deerling - Spring",
   586: "Sawsbuck - Spring",
   592: "Frillish - Male",
   593: "Jellicent - Male",
   641: "Tornadus - Incarnate",
   642: "Thundurus - Incarnate",
   645: "Landorus - Incarnate",
   647: "Keldeo - Ordinary",
   648: "Meloetta - Aria",
   649: "Genesect - Normal",
   666: "Vivillon - Meadow",
   669: "Flabébé - Red",
   670: "Floette - Red",
   671: "Florges - Red",
   676: "Furfrou - Natural",
   678: "Meowstic - Male",
   681: "Aegislash - Shield",
   720: "Hoopa - Confined",
   741: "Oricorio - Baile",
   745: "Lycanroc - Midday",
   746: "Wishiwashi - Solo",
   773: "Silvally - Normal",
   774: "Minior - Red Meteor",
   849: "Toxtricity - Amped",
   854: "Sinistea - Phony Form",
   855: "Polteageist - Phony Form",
   869: "Alcremie - Vanilla Cream",
   875: "Eiscue - Ice Face",
   876: "Indeedee - Male",
   877: "Morpeko - Full Belly",
   888: "Zacian - Hero of Many Battles",
   889: "Zamazenta - Hero of Many Battles",
   892: "Urshifu - Single Strike",
   902: "Basculegion - Male",
   905: "Enamorus - Incarnate",
   916: "Oinkologne - Male",
   925: "Maushold - Family of Four",
   931: "Squawkabilly - Green Plumage",
   964: "Palafin - Zero",
   978: "Tatsugiri - Curly",
   982: "Dudunsparce - Two-Segment",
   999: "Gimmighoul - Chest",
  1012: "Poltchageist - Counterfeit Form",
  1013: "Sinistcha - Unremarkable Form",
  1017: "Ogerpon - Teal Mask",
  1024: "Terapagos - Normal"
};

const VARIANT_FORMS = {
     3: [
        ["Venusaur - Female", "3-f", 10],
        ["Mega Venusaur", "10033", 20],
        ["Gigantamax Venusaur", "10195", 99]
    ],
     6: [
        ["Mega Charizard X", "10034", 20],
        ["Mega Charizard Y", "10035", 21],
        ["Gigantamax Charizard", "10196", 99]
    ],
     9: [
        ["Mega Blastoise", "10036", 20],
        ["Gigantamax Blastoise", "10197", 99]
    ],
    12: [
        ["Butterfree - Female", "12-f", 10],
        ["Gigantamax Butterfree", "10198", 99]
    ],
    15: [["Mega Beedrill", "10090", 20]],
    18: [["Mega Pidgeot", "10073", 20]],
    24: [
        ["Arbok - Hoenn", "24-hoenn", 10],
        ["Dark Arbok", "24-dark", 12]
    ],
    25: [
        ["Pikachu - Female", "25-female", 10],
        ["Cosplay Pikachu", "10085", 12],
        ["Ash's Pikachu", "10095", 14],
        ["Gigantamax Pikachu", "10199", 99]
    ],
    26: [
        ["Mega Raichu X", "10304", 2],
        ["Mega Raichu Y", "10305", 3]
    ],
    36: [["Mega Clefable", "10278", 20]],
    44: [["Gloom - Female", "44-f", 10]],
    45: [["Vileplume - Female", "45-f", 10]],
    52: [["Gigantamax Meowth", "10200", 1]],
    65: [["Mega Alakazam", "10037", 20]],
    68: [["Gigantamax Machamp", "10201", 99]],
    71: [["Mega Victreebel", "10279", 20]],
    80: [["Mega Slowbro", "10071", 20]],
    84: [["Doduo - Female", "84-f", 10]],
    85: [["Dodrio - Female", "85-f", 10]],
    94: [
        ["Mega Gengar", "10038", 20],
        ["Gigantamax Gengar", "10202", 99]
    ],
    99: [["Gigantamax Kingler", "10203", 99]],
   115: [["Mega Kangaskhan", "10039", 20]],
   121: [["Mega Starmie", "10280", 20]],
   127: [["Mega Pinsir", "10040", 20]],
   129: [["Magikarp - Female", "129-f", 10]],
   130: [
        ["Gyarados - Female", "130-f", 10],
        ["Mega Gyarados", "10041", 20]
    ],
   131: [["Gigantamax Lapras", "10204", 99]],
   133: [
        ["Eevee - Female", "133-f", 10],
        ["Gigantamax Eevee", "10205", 99]
    ],
   142: [["Mega Aerodactyl", "10042", 20]],
   143: [["Gigantamax Snorlax", "10206", 99]],
   149: [["Mega Dragonite", "10281", 20]],
   150: [
        ["Mega Mewtwo X", "10043", 20],
        ["Mega Mewtwo Y", "10044", 21]
    ],
   154: [["Mega Meganium", "10282", 20]],
   160: [["Mega Feraligatr", "10283", 20]],
   172: [["Spiky-eared Pichu", "172-spiky-eared", 10]],
   178: [["Xatu - Female", "178-f", 10]],
   181: [["Mega Ampharos", "10045", 20]],
   194: [["Wooper - Female", "194-f", 2]],
   201: [
        ["Unown - A", "201", 9],
        ["Unown - B", "201-b", 10],
        ["Unown - C", "201-c", 11],
        ["Unown - D", "201-d", 12],
        ["Unown - E", "201-e", 13],
        ["Unown - F", "201-f", 14],
        ["Unown - G", "201-g", 15],
        ["Unown - H", "201-h", 16],
        ["Unown - I", "201-i", 17],
        ["Unown - J", "201-j", 18],
        ["Unown - K", "201-k", 19],
        ["Unown - L", "201-l", 20],
        ["Unown - M", "201-m", 21],
        ["Unown - N", "201-n", 22],
        ["Unown - O", "201-o", 23],
        ["Unown - P", "201-p", 24],
        ["Unown - Q", "201-q", 25],
        ["Unown - R", "201-r", 26],
        ["Unown - S", "201-s", 27],
        ["Unown - T", "201-t", 28],
        ["Unown - U", "201-u", 29],
        ["Unown - V", "201-v", 30],
        ["Unown - W", "201-w", 31],
        ["Unown - X", "201-x", 32],
        ["Unown - Y", "201-y", 33],
        ["Unown - Z", "201-z", 34],
        ["Unown - Exclamation", "201-exclamation", 35],
        ["Unown - Question", "201-question", 36]
    ],
   202: [["Wobbuffet - Female", "202-f", 10]],
   203: [["Girafarig - Female", "203-f", 10]],
   208: [["Mega Steelix", "10072", 20]],
   212: [["Mega Scizor", "10046", 20]],
   214: [
        ["Heracross - Female", "214-f", 10],
        ["Mega Heracross", "10047", 20]
    ],
   227: [["Mega Skarmory", "10284", 20]],
   229: [["Mega Houndoom", "10048", 20]],
   248: [["Mega Tyranitar", "10049", 20]],
   254: [["Mega Sceptile", "10065", 20]],
   257: [["Mega Blaziken", "10050", 20]],
   260: [["Mega Swampert", "10064", 20]],
   282: [["Mega Gardevoir", "10051", 20]],
   302: [["Mega Sableye", "10066", 20]],
   303: [["Mega Mawile", "10052", 20]],
   306: [["Mega Aggron", "10053", 20]],
   308: [["Mega Medicham", "10054", 20]],
   310: [["Mega Manectric", "10055", 20]],
   319: [["Mega Sharpedo", "10070", 20]],
   323: [["Mega Camerupt", "10087", 20]],
   332: [["Cacturne - Female", "332-f", 10]],
   334: [["Mega Altaria", "10067", 20]],
   351: [
        ["Castform - Sunny", "10013", 10],
        ["Castform - Rainy", "10014", 11],
        ["Castform - Snowy", "10015", 12]
    ],
   354: [["Mega Banette", "10056", 20]],
   358: [["Mega Chimecho", "10306", 20]],
   359: [
        ["Mega Absol", "10057", 20],
        ["Mega Absol Z", "10307", 21]
    ],
   362: [["Mega Glalie", "10074", 20]],
   373: [["Mega Salamence", "10089", 20]],
   376: [["Mega Metagross", "10076", 20]],
   380: [["Mega Latias", "10062", 20]],
   381: [["Mega Latios", "10063", 20]],
   382: [["Primal Kyogre", "10077", 20]],
   383: [["Primal Groudon", "10078", 20]],
   384: [["Mega Rayquaza", "10079", 20]],
   386: [
        ["Deoxys - Attack", "10001", 10],
        ["Deoxys - Defense", "10002", 11],
        ["Deoxys - Speed", "10003", 12]
    ],
   398: [["Mega Staraptor", "10308", 20]],
   412: [
        ["Burmy - Sandy", "412-sandy", 10],
        ["Burmy - Trash", "412-trash", 11]
    ],
   413: [
        ["Wormadam - Sandy", "10004", 10],
        ["Wormadam - Trash", "10005", 11]
    ],
   415: [["Combee - Female", "415-f", 10]],
   421: [["Cherrim - Sunshine", "421-sunshine", 10]],
   422: [["Shellos - East", "422-east", 10]],
   423: [["Gastrodon - East", "423-east", 10]],
   428: [["Mega Lopunny", "10088", 20]],
   445: [
        ["Mega Garchomp", "10058", 20],
        ["Mega Garchomp Z", "10309", 21]
    ],
   448: [
        ["Mega Lucario", "10059", 20],
        ["Mega Lucario Z", "10310", 21]
    ],
   449: [["Hippopotas - Female", "449-f", 10]],
   450: [["Hippowdon - Female", "450-f", 10]],
   460: [["Mega Abomasnow", "10060", 20]],
   475: [["Mega Gallade", "10068", 20]],
   478: [["Mega Froslass", "10285", 20]],
   479: [
        ["Rotom - Heat", "10008", 10],
        ["Rotom - Wash", "10009", 11],
        ["Rotom - Frost", "10010", 12],
        ["Rotom - Fan", "10011", 13],
        ["Rotom - Mow", "10012", 14],
        ["Rotom - Dex", "rotom-dex", 15],
        ["Rotom - Phone", "rotom-phone", 16],
        ["Rotom - Bike", "rotom-bike", 17],
        ["Rotom - Drone", "rotom-drone", 18]
    ],
   483: [["Dialga - Origin", "10245", 10]],
   484: [["Palkia - Origin", "10246", 10]],
   485: [["Mega Heatran", "10311", 20]],
   487: [["Giratina - Origin", "10007", 10]],
   491: [["Mega Darkrai", "10312", 20]],
   492: [["Shaymin - Sky", "10006", 10]],
   493: [
        ["Arceus - Grass", "493-grass", 10],
        ["Arceus - Fire", "493-fire", 11],
        ["Arceus - Water", "493-water", 12],
        ["Arceus - Electric", "493-electric", 13],
        ["Arceus - Psychic", "493-psychic", 14],
        ["Arceus - Fighting", "493-fighting", 15],
        ["Arceus - Dark", "493-dark", 16],
        ["Arceus - Steel", "493-steel", 17],
        ["Arceus - Dragon", "493-dragon", 18]
    ],
   500: [["Mega Emboar", "10324", 20]],
   521: [["Unfezant - Female", "521-f", 10]],
   530: [["Mega Excadrill", "10286", 20]],
   531: [["Mega Audino", "10069", 20]],
   545: [["Mega Scolipede", "10287", 20]],
   550: [
        ["Basculin - Blue-Striped", "10016", 10],
        ["Basculin - White-Striped", "10247", 11]
    ],
   555: [
        ["Darmanitan - Zen", "10017", 10],
        ["Darmanitan - Galarian (Standard)", "10177", 11],
        ["Darmanitan - Galarian (Zen)", "10178", 12]
    ],
   560: [["Mega Scrafty", "10288", 20]],
   569: [["Gigantamax Garbodor", "10207", 99]],
   585: [
        ["Deerling - Summer", "585-summer", 10],
        ["Deerling - Autumn", "585-autumn", 11],
        ["Deerling - Winter", "585-winter", 12]
    ],
   586: [
        ["Sawsbuck - Summer", "586-summer", 10],
        ["Sawsbuck - Autumn", "586-autumn", 11],
        ["Sawsbuck - Winter", "586-winter", 12]
    ],
   592: [["Frillish - Female", "592-female", 10]],
   593: [["Jellicent - Female", "593-female", 10]],
   604: [["Mega Eelektross", "10289", 20]],
   609: [["Mega Chandelure", "10290", 20]],
   623: [["Mega Golurk", "10313", 20]],
   641: [["Tornadus - Therian", "10019", 10]],
   642: [["Thundurus - Therian", "10020", 10]],
   645: [["Landorus - Therian", "10021", 10]],
   646: [
        ["Kyurem - Black", "10022", 10],
        ["Kyurem - White", "10023", 11]
    ],
   647: [["Keldeo - Resolute", "10024", 10]],
   648: [["Meloetta - Pirouette", "10018", 10]],
   649: [
        ["Genesect - Douse Drive", "649-douse", 10],
        ["Genesect - Shock Drive", "649-shock", 11],
        ["Genesect - Burn Drive", "649-burn", 12],
        ["Genesect - Chill Drive", "649-chill", 13]
    ],
   652: [["Mega Chesnaught", "10291", 20]],
   655: [["Mega Delphox", "10292", 20]],
   658: [
        ["Greninja - Ash", "10117", 10],
        ["Mega Greninja", "10293", 20]
    ],
   666: [
        ["Vivillon - Icy Snow", "666-icy-snow", 10],
        ["Vivillon - Polar", "666-polar", 11],
        ["Vivillon - Tundra", "666-tundra", 12],
        ["Vivillon - Continental", "666-continental", 13],
        ["Vivillon - Garden", "666-garden", 14],
        ["Vivillon - Elegant", "666-elegant", 15],
        ["Vivillon - Modern", "666-modern", 16],
        ["Vivillon - Marine", "666-marine", 17],
        ["Vivillon - Archipelago", "666-archipelago", 18],
        ["Vivillon - High Plains", "666-high-plains", 19],
        ["Vivillon - Sandstorm", "666-sandstorm", 20],
        ["Vivillon - River", "666-river", 21],
        ["Vivillon - Monsoon", "666-monsoon", 22],
        ["Vivillon - Savanna", "666-savanna", 23],
        ["Vivillon - Sun", "666-sun", 24],
        ["Vivillon - Ocean", "666-ocean", 25],
        ["Vivillon - Jungle", "666-jungle", 26],
        ["Vivillon - Fancy", "666-fancy", 27],
        ["Vivillon - Poké Ball", "666-poke-ball", 28]
    ],
   668: [
        ["Mega Pyroar", "10294", 2],
        ["Pyroar - Female", "668-female", 10]
    ],
   669: [
        ["Flabébé - Yellow", "669-yellow", 10],
        ["Flabébé - Orange", "669-orange", 11],
        ["Flabébé - Blue", "669-blue", 12],
        ["Flabébé - White", "669-white", 13]
    ],
   670: [
        ["Floette - Yellow", "670-yellow", 10],
        ["Floette - Orange", "670-orange", 11],
        ["Floette - Blue", "670-blue", 12],
        ["Floette - White", "670-white", 13],
        ["Floette - Eternal", "10061", 14],
        ["Mega Eternal Floette", "10300", 20]
    ],
   671: [
        ["Florges - Yellow", "671-yellow", 10],
        ["Florges - Orange", "671-orange", 11],
        ["Florges - Blue", "671-blue", 12],
        ["Florges - White", "671-white", 13]
    ],
   676: [
        ["Furfrou - Heart Trim", "676-heart", 10],
        ["Furfrou - Star Trim", "676-star", 11],
        ["Furfrou - Diamond Trim", "676-diamond", 12],
        ["Furfrou - Debutante Trim", "676-debutante", 13],
        ["Furfrou - Matron Trim", "676-matron", 14],
        ["Furfrou - Dandy Trim", "676-dandy", 15],
        ["Furfrou - La Reine Trim", "676-la-reine", 16],
        ["Furfrou - Kabuki Trim", "676-kabuki", 17],
        ["Furfrou - Pharaoh Trim", "676-pharaoh", 18]
    ],
   678: [
        ["Mega Meowstic", "10323", 2],
        ["Meowstic - Female", "10025", 10]
    ],
   681: [["Aegislash - Blade", "10026", 10]],
   687: [["Mega Malamar", "10295", 20]],
   689: [["Mega Barbaracle", "10296", 20]],
   691: [["Mega Dragalge", "10297", 20]],
   701: [["Mega Hawlucha", "10298", 20]],
   716: [["Xerneas - Active", "716-active", 10]],
   718: [
        ["Zygarde - 10%", "10118", 10],
        ["Zygarde - 50%", "718", 11],
        ["Zygarde - Complete", "10120", 12],
        ["Mega Zygarde", "10299", 20]
    ],
   719: [["Mega Diancie", "10075", 20]],
   720: [["Hoopa - Unbound", "10086", 10]],
   740: [["Mega Crabominable", "10314", 20]],
   741: [
        ["Oricorio - Pom-Pom", "10123", 10],
        ["Oricorio - Pa'u", "10124", 10],
        ["Oricorio - Sensu", "10125", 10]
    ],
   745: [
        ["Lycanroc - Midnight", "10126", 10],
        ["Lycanroc - Dusk", "10152", 8]
    ],
   746: [["Wishiwashi - School", "10127", 10]],
   768: [["Mega Golisopod", "10315", 20]],
   774: [
        ["Minior - Red Core", "10136", 10],
        ["Minior - Orange Core", "10137", 10],
        ["Minior - Yellow Core", "10138", 10],
        ["Minior - Green Core", "10139", 10],
        ["Minior - Blue Core", "10140", 10],
        ["Minior - Indigo Core", "10141", 10],
        ["Minior - Violet Core", "10142", 10]
    ],
   773: [
        ["Silvally - Grass", "773-grass", 10],
        ["Silvally - Fire", "773-fire", 11],
        ["Silvally - Water", "773-water", 12],
        ["Silvally - Electric", "773-electric", 13],
        ["Silvally - Psychic", "773-psychic", 14],
        ["Silvally - Fighting", "773-fighting", 15],
        ["Silvally - Dark", "773-dark", 16],
        ["Silvally - Steel", "773-steel", 17],
        ["Silvally - Dragon", "773-dragon", 18]
    ],
   780: [["Mega Drampa", "10301", 20]],
   800: [
        ["Necrozma - Dusk Mane", "10155", 10],
        ["Necrozma - Dawn Wings", "10156", 11],
        ["Necrozma - Ultra", "10157", 12]
    ],
   801: [
        ["Magearna - Original Color", "10147", 10],
        ["Mega Magearna", "10302", 20],
        ["Mega Magearna (Original Color)", "10316", 21]
    ],
   807: [["Mega Zeraora", "10317", 20]],
   809: [["Gigantamax Melmetal", "10208", 99]],
   812: [["Gigantamax Rillaboom", "10209", 99]],
   815: [["Gigantamax Cinderace", "10210", 99]],
   818: [["Gigantamax Inteleon", "10211", 99]],
   823: [["Gigantamax Corviknight", "10212", 99]],
   826: [["Gigantamax Orbeetle", "10213", 99]],
   834: [["Gigantamax Drednaw", "10214", 99]],
   839: [["Gigantamax Coalossal", "10215", 99]],
   841: [["Gigantamax Flapple", "10216", 99]],
   842: [["Gigantamax Appletun", "10217", 99]],
   844: [["Gigantamax Sandaconda", "10218", 99]],
   845: [
        ["Cramorant - Gulping Form", "10182", 10],
        ["Cramorant - Gorging Form", "10183", 12]
    ],
   849: [
        ["Toxtricity - Low Key", "10184", 10],
        ["Gigantamax Toxtricity", "10219", 99]
    ],
   851: [["Gigantamax Centiskorch", "10220", 99]],
   854: [["Sinistea - Antique Form", "854-antique", 10]],
   855: [["Polteageist - Antique Form", "855-antique", 10]],
   858: [["Gigantamax Hatterene", "10221", 99]],
   861: [["Gigantamax Grimmsnarl", "10222", 99]],
   869: [
        ["Alcremie - Ruby Cream", "869-ruby-cream-strawberry-sweet", 10],
        ["Alcremie - Matcha Cream", "869-matcha-cream-strawberry-sweet", 11],
        ["Alcremie - Mint Cream", "869-mint-cream-strawberry-sweet", 12],
        ["Alcremie - Lemon Cream", "869-lemon-cream-strawberry-sweet", 13],
        ["Alcremie - Salted Cream", "869-salted-cream-strawberry-sweet", 14],
        ["Alcremie - Ruby Swirl", "869-ruby-swirl-strawberry-sweet", 15],
        ["Alcremie - Caramel Swirl", "869-caramel-swirl-strawberry-sweet", 16],
        ["Alcremie - Rainbow Swirl", "869-rainbow-swirl-strawberry-sweet", 17],
        ["Gigantamax Alcremie", "10223", 99]
    ],
   870: [["Mega Falinks", "10303", 20]],
   875: [["Eiscue - Noice Face", "10185", 10]],
   876: [["Indeedee - Female", "10186", 10]],
   877: [["Morpeko - Hangry Mode", "10187", 10]],
   879: [["Gigantamax Copperajah", "10224", 99]],
   884: [["Gigantamax Duraludon", "10225", 99]],
   888: [["Zacian - Crowned Sword", "10188", 10]],
   889: [["Zamazenta - Crowned Shield", "10189", 10]],
   890: [["Eternamax Eternatus", "10190", 99]],
   892: [
        ["Urshifu - Rapid Strike", "10191", 10],
        ["Gigantamax Urshifu (Single Strike)", "10226", 5],
        ["Gigantamax Urshifu (Rapid Strike)", "10227", 15]
    ],
   893: [["Dada", "10192", 10]],
   898: [
        ["Calyrex - Ice Rider", "10193", 10],
        ["Calyrex - Shadow Rider", "10194", 11]
    ],
   901: [["Ursaluna - Bloodmoon", "10272", 10]],
   902: [["Basculegion - Female", "10248", 10]],
   905: [["Enamorus - Therian", "10249", 10]],
   916: [["Oinkologne - Female", "10254", 10]],
   925: [["Maushold - Family of Three", "10257", 10]],
   931: [
        ["Squawkabilly - Blue", "10260", 10],
        ["Squawkabilly - Yellow", "10261", 10],
        ["Squawkabilly - White", "10262", 10]
    ],
   952: [["Mega Scovillain", "10318", 20]],
   964: [["Palafin - Hero", "10256", 10]],
   970: [["Mega Glimmora", "10319", 20]],
   978: [
        ["Mega Tatsugiri (Curly)", "10320", 5],
        ["Tatsugiri - Droopy", "10258", 10],
        ["Mega Tatsugiri (Droopy)", "10321", 15],
        ["Tatsugiri - Stretchy", "10259", 20],
        ["Mega Tatsugiri (Stretchy)", "10322", 25]
    ],
   982: [["Dudunsparce - Three-Segment", "10255", 10]],
   998: [["Mega Baxcalibur", "10325", 20]],
   999: [["Gimmighoul - Roaming", "10263", 10]],
  1012: [["Poltchageist - Artisan Form", "1012-artisan", 10]],
  1013: [["Sinistcha - Masterpiece Form", "1013-masterpiece", 10]],
  1017: [
        ["Ogerpon - Tera Teal", "ogrepon-tera-teal", 5],
        ["Ogerpon - Wellspring Mask", "10273", 10],
        ["Ogerpon - Tera Wellspring", "ogrepon-tera-wellspring", 11],
        ["Ogerpon - Hearthflame Mask", "10274", 20],
        ["Ogerpon - Tera Hearthflame", "ogrepon-tera-hearthflame", 21],
        ["Ogerpon - Cornerstone Mask", "10275", 30],
        ["Ogerpon - Tera Cornerstone", "ogrepon-tera-cornerstone", 31],
    ],
  1024: [
        ["Terapagos - Terastal", "10276", 10],
        ["Terapagos - Stellar", "10277", 20]
    ]
};

// ============================================================
// 2. DATA GENERATION
// ============================================================
const POKEMON_DATA = [];
let page = 1, slot = 1, card_num = 0;
const PER_PAGE = 16;
const SPRITE_PATH = "sprites/{}.png";

function generateData() {
    GENS.forEach((gen, gi) => {
        const genId = gi + 1;

        if (slot > 1) { 
            page++; 
            slot = 1; 
        }

        gen.names.forEach((baseName, i) => {
            const dex = gen.dex_start + i;

            // 1. Add Base Form
            if (![201, 716, 718].includes(dex)) {
                addRow(dex, BASE_FORM_NAMES[dex] || baseName, dex.toString(), genId);
            }

            // 2. Gather all forms together (Regional + Variant)
            let allForms = [];

            if (REGIONAL_FORMS[dex]) {
                REGIONAL_FORMS[dex].forEach(r => {
                    allForms.push({
                        name: `${baseName} - ${r[1]}`,
                        slug: r[2],
                        priority: r[3]
                    });
                });
            }

            if (VARIANT_FORMS[dex]) {
                VARIANT_FORMS[dex].forEach(v => {
                    allForms.push({
                        name: v[0],
                        slug: v[1],
                        priority: v[2]
                    });
                });
            }

            // 3. Sort all forms by priority
            allForms.sort((a, b) => a.priority - b.priority);

            // 4. Add them to the row data
            allForms.forEach(f => addRow(dex, f.name, f.slug, genId));
        });
    });
}

function addRow(dex, name, slug, genId) {
    card_num++;
    POKEMON_DATA.push({ dex, name, slug, page, slot, card: card_num, gen: genId });
    slot++;
    if (slot > PER_PAGE) { 
        slot = 1; 
        page++; 
    }
}

function toRoman(num) {
    const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
    return roman[num - 1];
}

function getGenName(genId) {
    const genObj = GENS[genId - 1];
    const regionName = genObj.name.split('(')[1].replace(')', '').toUpperCase();
    return `GEN ${toRoman(genId)} - ${regionName}`;
}

generateData();

// ============================================================
// 3. RENDER & FILTER LOGIC
// ============================================================
const tbody = document.getElementById('pokedex-body');
const progressDisplay = document.getElementById('progress-display');
const countDisplay = document.getElementById('count-display');

const searchBar = document.getElementById('search-bar');
const genFilter = document.getElementById('gen-filter');
const statusFilter = document.getElementById('status-filter');
const sortFilter = document.getElementById('sort-filter');

const warningBanner = document.getElementById('warning-banner');
const missingListDisplay = document.getElementById('missing-list');
const missingSpritesSet = new Set();

// Slot Color Gradient (Green to Red)
function getSlotColor(slot) {
    if (slot < 1 || slot > PER_PAGE) return 'transparent';
    const t = (slot - 1) / (PER_PAGE - 1);
    const h = 120 * (1 - t);
    const s = 55 + 30 * t;
    const l = 82 - 30 * t;
    return `hsl(${h}, ${s}%, ${l}%)`;
}

window.handleMissingSprite = function(img, pkmnName) {
    img.onerror = null; 
    img.style.display = 'none';
    
    const placeholder = document.createElement('div');
    placeholder.className = 'missing-sprite';
    placeholder.textContent = 'Missing';
    img.parentNode.appendChild(placeholder);

    if (!missingSpritesSet.has(pkmnName)) {
        missingSpritesSet.add(pkmnName);
        warningBanner.style.display = 'block';
        
        const missingArray = Array.from(missingSpritesSet);
        if (missingArray.length > 10) {
            missingListDisplay.textContent = `${missingArray.slice(0, 10).join(', ')}... (and ${missingArray.length - 10} more)`;
        } else {
            missingListDisplay.textContent = missingArray.join(', ');
        }
    }
};

function renderTable() {
    const term = searchBar.value.toLowerCase();
    const selectedGen = genFilter.value;
    const selectedStatus = statusFilter.value;
    const sortOrder = sortFilter.value;

    // 1. Filter Data
    let processedData = POKEMON_DATA.filter(pkmn => {
        // Gen Filter
        if (selectedGen !== 'all' && pkmn.gen !== parseInt(selectedGen)) return false;

        // Search Filter
        if (term) {
            const matchesName = pkmn.name.toLowerCase().includes(term);
            const matchesDex = pkmn.dex.toString().includes(term);
            if (!matchesName && !matchesDex) return false;
        }

        // Status Filter
        if (selectedStatus !== 'all') {
            const uniqueKey = `pkmn_${pkmn.dex}_${pkmn.slug}`;
            const isChecked = localStorage.getItem(uniqueKey) === 'true';
            if (selectedStatus === 'collected' && !isChecked) return false;
            if (selectedStatus === 'missing' && isChecked) return false;
        }

        return true;
    });

    // 2. Sort Data
    // We sort by Dex first, and then by the original Card Number to preserve the Base -> Regional -> Variant order!
    processedData.sort((a, b) => {
        if (sortOrder === 'desc') {
            return b.dex - a.dex || b.card - a.card; 
        } else {
            return a.dex - b.dex || a.card - b.card;
        }
    });

    // 3. Render to DOM
    tbody.innerHTML = '';
    let lastGen = null;
    
    processedData.forEach((pkmn) => {
        // Insert Generation Header dynamically when gen changes
        if (pkmn.gen !== lastGen) {
            const trSep = document.createElement('tr');
            trSep.className = 'gen-separator';
            trSep.innerHTML = `<td colspan="7">${getGenName(pkmn.gen)}</td>`;
            tbody.appendChild(trSep);
            lastGen = pkmn.gen;
        }

        const tr = document.createElement('tr');
        const uniqueKey = `pkmn_${pkmn.dex}_${pkmn.slug}`;
        const spriteUrl = SPRITE_PATH.replace('{}', pkmn.slug);
        const bgColor = getSlotColor(pkmn.slot);

        tr.innerHTML = `
            <td><input type="checkbox" class="have-checkbox" data-key="${uniqueKey}"></td>
            <td>${pkmn.card}</td>
            <td>${pkmn.page}</td>
            <td style="background-color: ${bgColor}; font-weight: bold;">${pkmn.slot}</td>
            <td>
                <img src="${spriteUrl}" alt="${pkmn.name}" loading="lazy" 
                     onerror="handleMissingSprite(this, this.alt)">
            </td>
            <td>${pkmn.name}</td>
            <td>${pkmn.dex}</td>
        `;
        tbody.appendChild(tr);
    });
    
    loadProgress(); 
}

// ============================================================
// 4. LOCALSTORAGE: LOAD & SAVE
// ============================================================
function loadProgress() {
    document.querySelectorAll('.have-checkbox').forEach(cb => {
        const key = cb.dataset.key;
        const saved = localStorage.getItem(key);
        cb.checked = saved === 'true';
    });
    updateProgress();
}

document.addEventListener('change', (e) => {
    if (e.target.classList.contains('have-checkbox')) {
        const key = e.target.dataset.key;
        localStorage.setItem(key, e.target.checked);
        updateProgress();
        
        if (statusFilter.value !== 'all') {
            renderTable();
        }
    }
});

function updateProgress() {
    const totalCards = POKEMON_DATA.length;
    let checkedCards = 0;
    
    POKEMON_DATA.forEach(pkmn => {
        const uniqueKey = `pkmn_${pkmn.dex}_${pkmn.slug}`;
        if (localStorage.getItem(uniqueKey) === 'true') checkedCards++;
    });

    const percent = totalCards > 0 ? ((checkedCards / totalCards) * 100).toFixed(1) : 0;
    progressDisplay.textContent = `Collected: ${percent}%`;
    countDisplay.textContent = `(${checkedCards} / ${totalCards})`;
}

// ============================================================
// 5. EXPORT / IMPORT
// ============================================================
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFile = document.getElementById('import-file');

exportBtn.addEventListener('click', () => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('pkmn_')) {
            data[key] = localStorage.getItem(key) === 'true';
        }
    }

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pokedex_progress.json';
    a.click();
    URL.revokeObjectURL(url);
});

importBtn.addEventListener('click', () => importFile.click());

importFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const data = JSON.parse(event.target.result);
            for (const key in data) {
                localStorage.setItem(key, data[key]);
            }
            renderTable(); 
            alert('Progress imported successfully!');
        } catch (err) {
            alert('Error importing file. Please make sure it is a valid JSON export.');
        }
    };
    reader.readAsText(file);
    e.target.value = '';
});

// ============================================================
// 6. EVENT LISTENERS FOR FILTERS
// ============================================================
searchBar.addEventListener('input', renderTable);
genFilter.addEventListener('change', renderTable);
statusFilter.addEventListener('change', renderTable);
sortFilter.addEventListener('change', renderTable);

// ============================================================
// 7. INITIALIZE
// ============================================================
renderTable();
