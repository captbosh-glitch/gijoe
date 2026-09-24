const TROOPS = [
  {
    id: 'cobra-trooper',
    name: 'Cobra Trooper',
    affiliation: 'Cobra',
    role: 'Basic Infantry',
    firstYear: '1982',
    equipment: 'Assault rifle, grenades, multi-layered body armor, composite helmet with built-in comms',
    bio: 'Originally code-named "The Enemy," the Cobra Trooper is the standard-issue foot soldier of the Cobra Organization — the faceless, blue-uniformed rank and file that fills out every Cobra assault.',
    image: 'images/cobratrooper.jpg'
  },
  {
    id: 'cobra-officer',
    name: 'Cobra Officer',
    affiliation: 'Cobra',
    role: 'Infantry Officer',
    firstYear: '1983',
    equipment: 'Sidearm, field gear, command insignia',
    bio: 'The field leadership layer between Cobra Commander and the rank-and-file Troopers, Cobra Officers organize and direct squads of Troopers and Vipers on the ground.',
    image: 'images/cobraofficer.jpg'
  },
  {
    id: 'viper',
    name: 'Viper',
    affiliation: 'Cobra',
    role: 'Elite Infantry',
    firstYear: '1986',
    equipment: 'Combination assault rifle/grenade launcher, night vision, telescopic sights, mirrored battle mask',
    bio: 'Introduced to replace the original Cobra Trooper as Cobra’s standard foot soldier, the Viper’s mirrored mask echoes Cobra Commander’s own, and its gear reflects a more professional, better-equipped fighting force.',
    image: 'images/viper.jpg'
  },
  {
    id: 'bat',
    name: 'B.A.T.',
    fullName: 'Battle Android Trooper',
    affiliation: 'Cobra',
    role: 'Robotic Soldier',
    firstYear: '1986',
    equipment: 'Built-in rifle, autonomous combat systems',
    bio: 'Designed by Dr. Mindbender, the B.A.T. is Cobra’s answer to unlimited cannon fodder — an expendable android soldier that never questions an order and never runs out of nerve.',
    toyDesigner: 'Paul Sorton — 1991 Cobra B.A.T. v2 sculpt',
    image: 'images/bat.jpg'
  },
  {
    id: 'crimson-guard',
    name: 'Crimson Guard',
    affiliation: 'Cobra',
    role: 'Elite Trooper',
    firstYear: '1985',
    equipment: 'Standard-issue rifle, red-accented dress uniform',
    bio: 'Cobra’s elite corps, personally commanded by Tomax and Xamot, the Crimson Guard is drawn from Cobra’s most loyal and capable members and used for the organization’s highest-priority operations.',
    image: 'images/crimsonguard.jpg'
  },
  {
    id: 'tele-viper',
    name: 'Tele-Viper',
    affiliation: 'Cobra',
    role: 'Communications Specialist',
    firstYear: '1985',
    equipment: 'Communications headset with distinctive radio-dish helmet, sidearm',
    bio: 'Instantly recognizable by the satellite-dish-shaped helmet piece, the Tele-Viper handles Cobra’s battlefield communications and signal intelligence.',
    image: 'images/televiper.jpg'
  },
  {
    id: 'snow-serpent',
    name: 'Snow Serpent',
    affiliation: 'Cobra',
    role: 'Polar Assault Trooper',
    firstYear: '1985',
    equipment: 'Cold-weather gear, skis, rifle',
    bio: 'Cobra’s answer to arctic warfare, the Snow Serpent operates in frozen terrain where standard Cobra Troopers would be useless.',
    image: 'images/snowserpent.jpg'
  },
  {
    id: 'techno-viper',
    name: 'Techno-Viper',
    affiliation: 'Cobra',
    role: 'Battlefield Technician',
    firstYear: '1987',
    equipment: 'Tool harness, energy weapon, repair gear',
    bio: 'Cobra’s field technician corps, Techno-Vipers repair and maintain Cobra’s vehicles and equipment under combat conditions.',
    image: 'images/technoviper.jpg'
  },
  {
    id: 'gyro-viper',
    name: 'Gyro-Viper',
    affiliation: 'Cobra',
    role: 'Mamba Helicopter Pilot',
    firstYear: '1987',
    equipment: 'Mamba mini-helicopter',
    bio: 'Trained pilots of Cobra’s single-seat Mamba helicopter, Gyro-Vipers give Cobra fast, nimble air support for close reconnaissance and strikes.',
    image: 'images/gyroviper.jpg'
  },
  {
    id: 'ice-viper',
    name: 'Ice-Viper',
    affiliation: 'Cobra',
    role: 'W.O.L.F. Driver',
    firstYear: '1987',
    equipment: 'W.O.L.F. all-terrain vehicle, cold-weather gear',
    bio: 'Cold-weather specialists who pilot the W.O.L.F. vehicle, Ice-Vipers extend Cobra’s reach into arctic terrain.',
    image: 'images/iceviper.jpg'
  },
  {
    id: 'sea-slug',
    name: 'Sea Slug',
    affiliation: 'Cobra',
    role: 'Sea Ray Navigator',
    firstYear: '1987',
    equipment: 'Sea Ray submarine',
    bio: 'The navigator crew of Cobra’s Sea Ray mini-submarine, Sea Slugs handle Cobra’s underwater operations and naval sabotage.',
    image: 'images/seaslug.jpg'
  },
  {
    id: 'worms',
    name: 'W.O.R.M.S.',
    fullName: 'Weapons-Ordnance Recon Maggot Specialist',
    affiliation: 'Cobra',
    role: 'Maggot Vehicle Driver',
    firstYear: '1987',
    equipment: 'Maggot tunneling vehicle',
    bio: 'Cobra’s underground specialists, W.O.R.M.S. troopers pilot the burrowing Maggot vehicle to strike from beneath the battlefield.',
    image: 'images/worms.jpg'
  },
  {
    id: 'royal-guard',
    name: 'Royal Guard',
    affiliation: 'Cobra-La',
    role: 'Cobra-La Soldier',
    firstYear: '1987',
    equipment: 'Living insect body parts bonded as organic armor',
    bio: 'Cobra-La’s arthropod-themed military force, the Royal Guard fuses living insect parts directly onto their bodies as armor, forming the front line defending Golobulus’s domain.',
    image: 'images/royalguard.jpg'
  },
  {
    id: 'alley-viper',
    name: 'Alley Viper',
    affiliation: 'Cobra',
    role: 'Urban Assault Trooper',
    firstYear: '1989',
    equipment: 'Riot shield, submachine gun, urban camo armor',
    bio: 'Cobra’s answer to city fighting, the heavily armored Alley Viper is built for close-quarters urban combat where the standard Viper’s open terrain training falls short.',
    image: 'images/alleyviper.jpg'
  },
  {
    id: 'aero-viper',
    name: 'Aero-Viper',
    affiliation: 'Cobra',
    role: 'Condor Z-25 Pilot',
    firstYear: '1989',
    equipment: 'Condor Z-25 stealth fighter',
    bio: 'Trained pilots of the radar-evading Condor Z-25, Aero-Vipers give Cobra a stealth air-superiority option the Joe team can’t always see coming.',
    image: 'images/aeroviper.jpg'
  },
  {
    id: 'frag-viper',
    name: 'Frag-Viper',
    affiliation: 'Cobra',
    role: 'Grenade Thrower',
    firstYear: '1989',
    equipment: 'Grenade launcher, fragmentation grenades',
    bio: 'Cobra’s dedicated grenadiers, Frag-Vipers soften up entrenched positions with explosive ordnance before the rest of a Cobra assault moves in.',
    image: 'images/fragviper.jpg'
  },
  {
    id: 'heat-viper',
    name: 'HEAT Viper',
    affiliation: 'Cobra',
    role: 'Bazooka Man',
    firstYear: '1989',
    equipment: 'HEAT (High Explosive Anti-Tank) bazooka',
    bio: 'Cobra’s anti-armor specialists, HEAT Vipers carry high-explosive anti-tank rockets built to knock out Joe vehicles that a standard rifle can’t touch.',
    image: 'images/heatviper.jpg'
  },
  {
    id: 'night-viper',
    name: 'Night-Viper',
    affiliation: 'Cobra',
    role: 'Night Fighter',
    firstYear: '1989',
    equipment: 'Night-vision gear, suppressed weapon, dark urban camo',
    bio: 'Night-Vipers strike under cover of darkness, trained and equipped for infiltration and combat when visibility favors whoever can see in the dark.',
    image: 'images/nightviper.jpg'
  },
  {
    id: 'track-viper',
    name: 'Track-Viper',
    affiliation: 'Cobra',
    role: 'H.I.S.S. II Driver',
    firstYear: '1989',
    equipment: 'H.I.S.S. II tank',
    bio: 'The driver corps for Cobra’s upgraded H.I.S.S. II tank, Track-Vipers bring the next generation of Cobra armor to the field.',
    image: 'images/trackviper.jpg'
  },
  {
    id: 'laser-viper',
    name: 'Laser-Viper',
    affiliation: 'Cobra',
    role: 'Laser Trooper',
    firstYear: '1990',
    equipment: 'Laser rifle',
    bio: 'Cobra’s directed-energy infantry, Laser-Vipers carry experimental laser rifles that outrange and outgun standard-issue Joe weapons.',
    image: 'images/laserviper.jpg'
  },
  {
    id: 'range-viper',
    name: 'Range-Viper',
    affiliation: 'Cobra',
    role: 'Wilderness Trooper',
    firstYear: '1990',
    equipment: 'Long rifle, survival gear',
    bio: 'Cobra’s wilderness specialists, Range-Vipers operate in backcountry terrain far from any road or supply line.',
    image: 'images/rangeviper.jpg'
  },
  {
    id: 'rock-viper',
    name: 'Rock-Viper',
    affiliation: 'Cobra',
    role: 'Mountain Trooper',
    firstYear: '1990',
    equipment: 'Climbing gear, rifle',
    bio: 'Cobra’s mountain-warfare corps, Rock-Vipers scale terrain the Joe team would otherwise consider impassable.',
    image: 'images/rockviper.jpg'
  },
  {
    id: 'saw-viper',
    name: 'S.A.W.-Viper',
    affiliation: 'Cobra',
    role: 'Heavy Machine Gunner',
    firstYear: '1990',
    equipment: 'Squad Automatic Weapon',
    bio: 'Cobra’s heavy-weapons infantry, S.A.W.-Vipers lay down sustained automatic fire to pin down and break up Joe advances.',
    image: 'images/sawviper.jpg'
  },
  {
    id: 'night-creeper',
    name: 'Night Creeper',
    affiliation: 'Cobra',
    role: 'Ninja / Corporate Mercenary',
    firstYear: '1990',
    equipment: 'Ninja weapons, high-tech gear',
    bio: 'A syndicate of hi-tech ninja mercenaries hired by Cobra as spies and assassins, the Night Creepers first appeared hired to eliminate Storm Shadow.',
    image: 'images/nightcreeper.jpg'
  },
  {
    id: 'crimson-guard-immortal',
    name: 'Crimson Guard Immortal',
    affiliation: 'Cobra',
    role: 'Elite Trooper',
    firstYear: '1991',
    equipment: 'Standard-issue rifle, reinforced armor',
    bio: 'An even more battle-hardened tier of the Crimson Guard, the Immortals are Cobra’s toughest and most loyal elite troopers, reserved for missions the regular Guard can’t finish.',
    image: 'images/crimsonguardimmortal.jpg'
  },
  {
    id: 'incinerators',
    name: 'Incinerators',
    affiliation: 'Cobra',
    role: 'Flamethrower Trooper',
    firstYear: '1991',
    equipment: 'Flamethrower, fireproof suit',
    bio: 'Cobra’s dedicated flame-weapons corps, the Incinerators burn out entrenched Joe positions and anything else standing between Cobra and its objective.',
    image: 'images/incinterators.jpg'
  },
  {
    id: 'night-vulture',
    name: 'Night Vulture',
    affiliation: 'Cobra',
    role: 'Air Recon Trooper',
    firstYear: '1991',
    equipment: 'Night-vision gear, glider wings',
    bio: 'Cobra’s nocturnal air-reconnaissance corps, Night Vultures scout Joe positions from above under cover of darkness.',
    image: 'images/nightvulture.jpg'
  },
  {
    id: 'sky-creeper',
    name: 'Sky Creeper',
    affiliation: 'Cobra',
    role: 'Air Recon Leader',
    firstYear: '1991',
    equipment: 'Night-vision gear, glider wings',
    bio: 'The leader of Cobra’s Night Vulture air-recon squads, Sky Creeper coordinates aerial surveillance missions over contested territory.',
    image: 'images/skycreeper.jpg'
  },
  {
    id: 'sludge-viper',
    name: 'Sludge Viper',
    affiliation: 'Cobra',
    role: 'Hazardous Waste Viper',
    firstYear: '1991',
    equipment: 'Hazmat suit, toxic waste gear',
    bio: 'Cobra’s hazardous-materials infantry, Sludge Vipers handle and weaponize toxic waste as both a defensive barrier and an offensive tool.',
    image: 'images/sludgeviper.jpg'
  },
  {
    id: 'cobra-air-devil',
    name: 'Cobra Air Devil',
    affiliation: 'Cobra',
    role: 'Acrobatic Aerial Assault Trooper',
    firstYear: '1992',
    equipment: 'Parachute gear, acrobatic harness',
    bio: 'An acrobatic airborne trooper, the Cobra Air Devil drops into combat performing aerial maneuvers designed to disorient defenders before landing.',
    image: 'images/cobraairdevil.jpg'
  },
  {
    id: 'flak-viper',
    name: 'Flak-Viper',
    affiliation: 'Cobra',
    role: 'Anti-Aircraft Trooper',
    firstYear: '1992',
    equipment: 'Portable anti-aircraft launcher',
    bio: 'Cobra’s anti-aircraft infantry, Flak-Vipers defend Cobra installations and formations from Joe air support.',
    image: 'images/flakviper.jpg'
  },
  {
    id: 'headhunters',
    name: 'Headhunters',
    affiliation: 'Cobra',
    role: 'Narcotic Guard',
    firstYear: '1992',
    equipment: 'Sidearm, enforcer gear',
    bio: 'Headman’s personal enforcers, the Headhunters guard Cobra’s drug-trafficking operations and keep rivals and informants in line.',
    image: 'images/headhunters.jpg'
  },
  {
    id: 'heli-vipers',
    name: 'Heli-Vipers',
    affiliation: 'Cobra',
    role: 'Battle Copter Trooper',
    firstYear: '1992',
    equipment: 'Battle helicopter',
    bio: 'Cobra’s helicopter infantry corps, Heli-Vipers crew Cobra’s battle copters and deliver troops directly into contested airspace.',
    image: 'images/heliviper.jpg'
  },
  {
    id: 'ninja-viper',
    name: 'Ninja-Viper',
    affiliation: 'Cobra',
    role: 'Cobra Ninja Trooper',
    firstYear: '1992',
    equipment: 'Ninja weapons',
    bio: 'The rank-and-file counterpart to Cobra’s named ninja specialists, the Ninja-Viper extends Cobra’s martial-arts forces beyond a handful of named swordsmen.',
    image: 'images/ninjaviper.jpg'
  },
  {
    id: 'toxo-zombie',
    name: 'Toxo-Zombie',
    affiliation: 'Cobra',
    role: 'Toxic Disaster Trooper',
    firstYear: '1992',
    equipment: 'Hazmat suit, toxic sprayer',
    bio: 'A hazardous-materials trooper suited for disaster-zone operations, the Toxo-Zombie moves through contamination that would down an unprotected soldier in minutes.',
    toyDesigner: 'Paul Sorton — 1992 Toxo-Zombie (Eco-Warriors)',
    image: 'images/toxozombie.jpg'
  },
  {
    id: 'bio-vipers',
    name: 'Bio-Viper',
    affiliation: 'Cobra',
    role: 'Mega Monster',
    firstYear: '1993',
    equipment: 'Bio-engineered mutation',
    bio: 'A monstrous bio-engineered mutation grown from Cobra’s genetic experiments, the Bio-Viper is less soldier than living weapon.',
    image: 'images/bioviper.jpg'
  },
  {
    id: 'cobra-baat',
    name: 'Cobra B.A.A.T.',
    fullName: 'Battle Armored Android Trooper',
    affiliation: 'Cobra',
    role: 'Android Trooper',
    firstYear: '1993',
    equipment: 'Built-in armor plating, integrated weapons',
    bio: 'An upgraded successor to the original B.A.T., the B.A.A.T. wraps Cobra’s android infantry in heavier battle armor.',
    image: 'images/cobrabaat.jpg'
  },
  {
    id: 'crimson-guard-commander',
    name: 'Crimson Guard Commander',
    affiliation: 'Cobra',
    role: 'Elite Officer',
    firstYear: '1993',
    equipment: 'Officer sidearm, command insignia',
    bio: 'The officer tier of Cobra’s Crimson Guard, the Crimson Guard Commander directs Guardsmen and Immortals alike in the field.',
    image: 'images/crimsonguardcommander.jpg'
  },
  {
    id: 'cyber-vipers',
    name: 'Cyber-Viper',
    affiliation: 'Cobra',
    role: 'Cybernetic Officer',
    firstYear: '1993',
    equipment: 'Cybernetic enhancements, sidearm',
    bio: 'A cybernetically enhanced officer corps, Cyber-Vipers combine human command judgment with machine-augmented reflexes.',
    image: 'images/cyberviper.jpg'
  },
  {
    id: 'mega-vipers',
    name: 'Mega-Viper',
    affiliation: 'Cobra',
    role: 'Mega Monster Trainer',
    firstYear: '1993',
    equipment: 'Containment gear, prod',
    bio: 'The handlers responsible for Cobra’s Mega Monster program, Mega-Vipers train and control the Bio-Vipers and Monstro-Vipers in the field.',
    image: 'images/megaviper.jpg'
  },
  {
    id: 'monstro-vipers',
    name: 'Monstro-Viper',
    affiliation: 'Cobra',
    role: 'Mega Monster',
    firstYear: '1993',
    equipment: 'Bio-engineered mutation',
    bio: 'Another product of Cobra’s Mega Monster program, the Monstro-Viper is a hulking bio-engineered creature unleashed on the battlefield.',
    image: 'images/monstroviper.jpg'
  },
  {
    id: 'nitro-viper',
    name: 'Nitro-Viper',
    affiliation: 'Cobra',
    role: 'Detonator Driver',
    firstYear: '1993',
    equipment: 'Detonator vehicle',
    bio: 'The driver corps for Cobra’s Detonator vehicle, Nitro-Vipers bring explosive ordnance delivery to the battlefield on wheels.',
    image: 'images/nitroviper.jpg'
  },
  {
    id: 'red-ninjas',
    name: 'Red Ninja',
    affiliation: 'Cobra',
    role: 'Battle Axe Operator',
    firstYear: '1993',
    equipment: 'Battle axe',
    bio: 'Cobra’s battle-axe-wielding ninja corps, Red Ninjas bring brute-force close combat to match the Joe team’s own Ninja Force.',
    image: 'images/redninja.jpg'
  },
  {
    id: 'headhunter-stormtroopers',
    name: 'Headhunter Stormtrooper',
    affiliation: 'Cobra',
    role: 'Elite Urban Crime Guard',
    firstYear: '1993',
    equipment: 'Riot gear, sidearm',
    bio: 'An elite tier of Headman’s Headhunter enforcers, Headhunter Stormtroopers protect Cobra’s narcotics operations from Joe and rival interference alike.',
    image: 'images/headhunterstormtrooper.jpg'
  }
];