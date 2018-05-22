import { RED, GREEN, BLUE, VIOLET, YELLOW, ORANGE } from '../Styles';

export default {
  blocks: {
    currentBlock: ""
  },
  modals: {
    currentModal: null,
    payload: null
  },
  features: {
    currentFeatureEditing: {
      id: "editing...",
      idCurrentlyEditing: ""
    },
    plwi43: {
      id: "plwi43",
      title: "Darkvision",
      uses: "60 ft",
      description: `You can see in dim light withing 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can't discern color in darkness, only shades of grey.`
    },
    "1lk6j3": {
      id: "1lk6j3",
      title: "Hellish Resistance",
      description: `You have resistance to fire damage.`
    },
    "2flj64ffk64": {
      id: "2flj64ffk64",
      title: "Infernal Legacy",
      description: `You know the thaumatugy cantrip.\n\nWhen you reach 3rd level you can cast Hellish Rebuke at 2nd level once per long rest.\n\nWhen you reach 5th level you can cast darkness once per long rest.\n\nCharisma is your spellcasting ability for these spells.`
    },
    tielskgtt444: {
      id: "tielskgtt444",
      title: "Font of Magic",
      uses: "6pts",
      description: `You tap into a deep wellspring of magic within yourself, represented by sorcery points.\n\nYou can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additonal sorcery points. You can also use these points to power Metamagic.\n\n`
    },
    f88fggylas: {
      id: "f88fggylas",
      title: "Metamagic",
      description: `Distant Spell:\n When you cast a spell that has a range of 5 feet or more, you can spend 1 sorcery point to double the range of the spell. If the spell has a range of touch, the range becomes 30 feet.\n\nTwinned Spell:\n When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell.`
    },
    skdjt: {
      id: "skdjt",
      title: "Divine Magic",
      description:
        "Your link to the divine allows you to learn spells from the cleric class. When your Spellcasting feature lets you learn or replace a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list or the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you. In addition, choose an affinity for the source of your divine power: good, evil, law, chaos, or neutrality. You learn an additional spell based on that affinity, as shown below. It is a sorcerer spell for you, but it doesn’t count against your number of sorcerer spells known. If you later replace this spell, you must replace it with a Spell from the cleric spell list."
    },
    poi6tydd: {
      id: "poi6tydd",
      title: "Favored By the Gods",
      uses: "1/rest",
      description: `Divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome.`
    }
  },
  stats: {
    name: "Briuphyxus Silvertouched",
    currentStatEditing: "",
    meleeAttack: {
      selectedIndex: 0,
      key: "str"
    },
    spellAttack: {
      selectedIndex: 2,
      key: "cha",
      casterLevel: 5
    },
    hp: {
      id: "hp",
      title: "HP",
      score: 33,
      max: 33,
      temp: 0
    },
    ac: {
      id: "ac",
      title: "Armor Class",
      shortTitle: "AC",
      baseType: "magic",
      armorType: 0,
      armorInput: 11,
      shield: false,
      itemBonus: true,
      miscBonus: false,
      baseScore: 15,
      shieldBonusScore: 2,
      itemBonusScore: 1,
      miscBonusScore: 0,
      score: 16
    },
    speed: {
      id: "speed",
      currentMode: {
        id: "walk",
        title: "Speed",
        score: 30
      },
      modeInput: 0,
      mode: {
        walk: {
          id: "walk",
          title: "Speed",
          score: 30
        },
        swim: {
          id: "swim",
          title: "Swim",
          score: 15
        },
        climb: {
          id: "climb",
          title: "Climb",
          score: 15
        },
        fly: {
          id: "fly",
          title: "Fly",
          score: 0
        }
      }
    },
    init: {
      id: "init",
      title: "Initiative",
      proficient: false,
      score: 2,
      alert: false,
      extraMod: false,
      extraModAbility: 0,
      extraModScore: 0,
      abilityInput: ""
    },
    prof: {
      id: "prof",
      title: "Proficiency",
      score: 3,
      jack: false,
      champ: false
    },
    hitDie: {
      id: "hitDie",
      title: "Hit Dice",
      sizes: ["d6", "d8", "d10", "d12"],
      count: 5,
      max: 5,
      selectedIndex: 0,
      pool: {
        d12: {
          id: "d12",
          count: 0,
          max: 0
        },
        d10: {
          id: "d10",
          count: 0,
          max: 0
        },
        d8: {
          id: "d8",
          count: 0,
          max: 0
        },
        d6: {
          id: "d6",
          count: 5,
          max: 5
        }
      }
    },
    str: {
      id: "str",
      title: "Strength",
      score: 8,
      mod: -1,
      save: -1,
      color: RED,
      proficient: false,
      skills: [
        {
          id: "Athletics",
          proficient: false,
          score: -1
        }
      ]
    },
    dex: {
      id: "dex",
      title: "Dexterity",
      score: 14,
      mod: 2,
      save: 2,
      color: GREEN,
      proficient: false,
      skills: [
        {
          id: "Acrobatics",
          proficient: false,
          score: 2
        },
        {
          id: "Sleight of Hand",
          proficient: false,
          score: 2
        },
        {
          id: "Stealth",
          proficient: true,
          score: 5
        }
      ]
    },
    con: {
      id: "con",
      title: "Consitution",
      score: 12,
      mod: 1,
      save: 4,
      color: ORANGE,
      proficient: true,
      skills: []
    },
    int: {
      id: "int",
      title: "Intelligence",
      score: 11,
      mod: 0,
      save: 0,
      color: BLUE,
      proficient: false,
      skills: [
        {
          id: "Arcana",
          proficient: true,
          score: 3
        },
        {
          id: "History",
          proficient: false,
          score: 0
        },
        {
          id: "Investigation",
          proficient: false,
          score: 0
        },
        {
          id: "Nature",
          proficient: false,
          score: 0
        },
        {
          id: "Religion",
          proficient: true,
          score: 3
        }
      ]
    },
    wis: {
      id: "wis",
      title: "Wisdom",
      score: 14,
      mod: 2,
      save: 2,
      color: VIOLET,
      proficient: false,
      skills: [
        {
          id: "Animal Handling",
          proficient: false,
          score: 1
        },
        {
          id: "Insight",
          proficient: true,
          score: 4
        },
        {
          id: "Medicine",
          proficient: false,
          score: 1
        },
        {
          id: "Perception",
          proficient: false,
          score: 1
        },
        {
          id: "Survival",
          proficient: false,
          score: 1
        }
      ]
    },
    cha: {
      id: "cha",
      title: "Charisma",
      score: 18,
      mod: 4,
      save: 7,
      color: YELLOW,
      proficient: true,
      skills: [
        {
          id: "Deception",
          proficient: false,
          score: 4
        },
        {
          id: "Intimidation",
          proficient: false,
          score: 4
        },
        {
          id: "Performance",
          proficient: false,
          score: 0
        },
        {
          id: "Persuasion",
          proficient: true,
          score: 7
        }
      ]
    }
  },
  weapons: {
    currentWeaponEditing: {
      id: "editing...",
      idCurrentlyEditing: ""
    },
    qowoit: {
      id: "qowoit",
      title: "Dagger",
      damage: "1d4",
      damageType: "piercing",
      properties: "Finesse, Light, Thrown",
      range: "20/60"
    },
    lightCB: {
      id: "lightCB",
      title: "Light Crossbow",
      damage: "1d6",
      damageType: "piercing",
      properties: "Ammunition, Heavy, 2h",
      range: "100/400"
    },
    PTIWFK: {
      id: "PTIWFK",
      title: "Glass Staff of Defense",
      damage: "1d6",
      damageType: "bludgeoning",
      properties: "Versatile (1d8)",
      range: "melee",
      description: `This slender, hollow staff is made of glass yet is as strong as oak. It weighs 3 pounds. Requires attunement. \n\nWhile holding the staff you gain a +1 bonus to AC. \n\nThe staff has 10 charges, which are used to fuel the spells within it. With the staff in hand, you can use your action to cast one of the following spells: \n\n -Mage Armor (1 charge) \n\n -Shield (2 charges) \n\nThe staff regains 1d6 + 4 expended charges at dawn. If you expend the last charge, roll a d20. On a 1 the staff shatters and is destroyed.`
    }
  },
  spells: {
    currentSpellEditing: {
      id: "",
      spellLevel: ""
    },
    maxSlots: {
      cantrips: true,
      "1st": 4,
      "2nd": 3,
      "3rd": 2,
      "4th": 0,
      "5th": 0,
      "6th": 0,
      "7th": 0,
      "8th": 0,
      "9th": 0
    },
    currentSlots: {
      cantrips: true,
      "1st": 4,
      "2nd": 3,
      "3rd": 2,
      "4th": 0,
      "5th": 0,
      "6th": 0,
      "7th": 0,
      "8th": 0,
      "9th": 0
    },
    spellBook: {
      cantrips: {
        firebolt: {
          id: "firebolt",
          title: "Fire Bolt",
          castingTime: "1 action",
          components: "VS",
          damage: "2d10",
          description: `You hurl a mote of fire at a creature or object within range. On a hit, the target takes 1d10 fire damage.\n  A flammable object hit by this spell ignites if it isn't being worn or carried.`,
          duration: "Instantaneous",
          range: "120 ft",
          school: "Evocation",
          spellLevel: "cantrips"
        },
        shockgrasp: {
          id: "shockgrasp",
          title: "Shocking Grasp",
          castingTime: "1 action",
          components: "VS",
          damage: "2d8",
          description: `Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. \n  On a hit the target takes 1d8 lightning damage, and it can't take reactions until the start of its next turn.`,
          duration: "Instantaneous",
          range: "Touch",
          school: "Evocation",
          spellLevel: "cantrips"
        },
        magehand: {
          id: "magehand",
          title: "Mage Hand",
          castingTime: "1 action",
          components: "VS",
          damage: null,
          description: `A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from your or if you cast this spell again. \n  You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it. \n  The hand can't attack, activate magic items, or carry more than 10 pounds.`,
          duration: "1 minute",
          range: "30 ft",
          school: "Conjuration",
          spellLevel: "cantrips"
        },
        thaumaturgy: {
          id: "thaumaturgy",
          title: "Thaumaturgy",
          castingTime: "1 action",
          components: "V",
          damage: null,
          description: `You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects:\n \n- Your voice booms up to three times as loud as normal for one minute. \n- You cause flames to flicker, brighten, dim, or change color for 1 minute. \n- You cause harmless tremors in the gound for 1 minute. \n- You create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers. \n- You instantaneously cause an unlocked door or window to fly open or slam shut. \n- You alter the appearance of your eyes for 1 minute. \n \nIf you cast this spell multiple times, you can have up to three of its 1 minute effects active at a time, and you can dismiss such an effect as an action.`,
          duration: "up to 1 minute",
          range: "30 ft",
          school: "Transmutation",
          spellLevel: "cantrips"
        },
        message: {
          id: "message",
          title: "Message",
          castingTime: "1 action",
          components: "VSM",
          damage: null,
          description: `You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear. \n You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn't have to follow a straight line and can travel freely around corners or through openings.`,
          duration: "1 round",
          range: "120 ft",
          school: "Transmutation",
          spellLevel: "cantrips"
        },
        light: {
          id: "light",
          title: "Light",
          castingTime: "1 action",
          components: "VM",
          damage: null,
          description: `You touch one object that is no larger than 10 feet in any dimension. Untill the spell ends, the object sheds bright light in a 20-foot radius, and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action. \n If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.`,
          duration: "1 hour",
          range: "Touch",
          school: "Evocation",
          spellLevel: "cantrips"
        }
      },
      "1st": {
        curewounds: {
          id: "curewounds",
          title: "Cure Wounds",
          castingTime: "1 action",
          components: "VS",
          damage: null,
          description: `A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs. \n\nWhen you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.`,
          duration: "Instantaneous",
          range: "Touch",
          school: "Evocation",
          spellLevel: "1st"
        },
        bless: {
          id: "bless",
          title: "Bless",
          castingTime: "1 action",
          components: "VSM",
          damage: null,
          description: `You bless up to three creatures of your choice within range. Whenever a traget makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw. \n\nWhen you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.`,
          duration: "Concentration, 1 minute",
          range: "30 ft",
          school: "Enchantment",
          spellLevel: "1st"
        },
        thunderwave: {
          id: "thunderwave",
          title: "Thunderwave",
          castingTime: "1 action",
          components: "VS",
          damage: "2d8",
          description: `A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half damage and isn't pushed. \n In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell's effect, and the spell emits a thunderous boom audible out to 300 feet. \n\nWhen you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.`,
          duration: "Instantaneous",
          range: "Self (15 ft cube)",
          school: "Evocation",
          spellLevel: "1st"
        },
        TESTY: {
          id: "TESTY",
          title: "Chromatic Orb",
          castingTime: "1 action",
          components:
            "VSM, a 50gp diamond, a piece of wire, a pinch of dust, a vial of holy water",
          damage: "3d8",
          description: `You hurl a 4-inch diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature take 3d8 damage of the type you chose.`,
          duration: "Instantaneous",
          range: "90 ft",
          school: "Evocation",
          spellLevel: "1st"
        }
      },
      "2nd": {
        mirror: {
          id: "mirror",
          title: "Mirror Image",
          castingTime: "1 action",
          components: "VS",
          damage: null,
          description: `Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting in position so it's impossible to track which image is real. \n Each time a creature targets you with an attack during the spells duration, roll a d20 to determine whether the attack instead targets on of your duplicates. \n If you have 3 duplicates, you must roll a 6 or higher to change the attack's target to a duplicate. With 2 duplicates, an 8 or higher; with 1 duplicates, an 11 or higher. \n A duplicate's AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can only be destroyed by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed. \n A creature is unaffected by this spell if it can't see, if it relies on senses other than sight, such as blindsight, or if it can percieve illusions as false, as with truesight.`,
          duration: "1 minute",
          range: "Self",
          school: "Illusion",
          spellLevel: "2nd"
        },
        hellishrebuke: {
          id: "hellishrebuke",
          title: "Hellish Rebuke",
          castingTime: "1 reaction",
          components: "VS",
          damage: "3d10",
          description: `This spell is granted by the Tiefling's Infernal Legacy. \n\nYou point your finger at the creature that damaged you. It is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes 3d10 fire damage on a failed save, or half damage on a successful save. \n\nUsable once per long rest.`,
          duration: "Instantaneous",
          range: "60 ft",
          school: "Evocation",
          spellLevel: "2nd"
        }
      },
      "3rd": {
        fireball: {
          id: "fireball",
          title: "Fireball",
          castingTime: "1 action",
          components: "VSM",
          damage: "8d6",
          description: `A bright streak flashes from your pointing finger to a point you choose within ranged, and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half damage on a successful one. \n The fire spreads around corners. It ignites flammable objects in the area that aren't being worn or carried. \n\nWhen you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each level above 3rd.`,
          duration: "Instantaneous",
          range: "150 ft",
          school: "Evocation",
          spellLevel: "3rd"
        },
        haste: {
          id: "haste",
          title: "Haste",
          castingTime: "1 action",
          components: "VSM",
          damage: null,
          description: `Choose a willing creature that you see within range. Untill the spell ends, the target's speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. \n That action can only be used to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action. \n When the spell ends, the target can't move or take actions until after its next turn, as a wave of lethargy sweeps over it. `,
          duration: "Concentration, 1 minute",
          range: "30 ft",
          school: "Transmutation",
          spellLevel: "3rd"
        }
      },
      "4th": {},
      "5th": {},
      "6th": {},
      "7th": {},
      "8th": {},
      "9th": {}
    }
  },
  notes: {
    pp: "",
    gp: "112",
    ep: "",
    sp: "97",
    cp: "7",
    consumable: "",
    armor: "Staff of Defense\n\nOakenShield\n -engraved with the symbol of Selune\n\nTwo Daggers\n\n",
    equipment: "Stone of Speech\n -tied to Feinthir, a transmutation wizard\n\nRing of Spilled Blood\n -1/day turn a beverage into a health potion\n\nArcane Focus\n -a polished moonstone on a silver chain engraved with arcane runes inlaid w/ silver.\n\n5 sticks of incense\n\nSilverfanged Direwolf cloak\n\nWaterproof Sack\n\nDungeoneer's Pack \n -crowbar\n -a hammer \n -10 pitons \n -block & tackle \n -a flask \n -piece of chalk \n -a tinderbox \n -10 days rations \n -50ft of hempen rope \n -4 apples \n -ink pen, well, & paper",
    race: "Tiefling",
    xp: "6500",
    classlvl: "Sorcer 5",
    alignment: "chaotic good",
    background: "urchin/acolyte",
    weaponProfs: "Daggers\nDarts\nSlings\nQuarterstaffs\nLight Crossbows",
    armorProfs: "",
    toolProfs: "Thieves' tools",
    languages: "Common\nInfernal\nCelestial",
    personality: "(Urchin) I hide scraps of food and trinkets away in pockets",
    ideals:
      "(Urchin) Aspiration - I'm going to prove that I'm worthy of a better life",
    bonds: "(Acolyte) I owe my life to the priest who took me in.",
    flaws: "(Urchin) It's not stealing if I need it more than someone else.",
    notes: `Orphaned as a child. I spent my childhood on the streets of the cities, living homeless, and getting by mostly by staying out of the way. I was never a big kid, so I ran from most fights or stayed out of them entirely by sneaking around, and pilfering food to scrape by. When I was 12 I was taken in by a kindly cleric of Selune, a goddess of the moon. While most people saw me as a demon or an abberation, the priest saw me as something else- a likeness of their goddess, kind and caring, something to be valued, not tossed aside. The priest taught me the ways of their goddess- to value life, to be good, to not carelessly destroy life. \n\nWhile with that cleric I was taught the ways of Selune and her followers. Eventually the sorcerous blood began to show through more and more, and I became too much of a liability to stay in the town any longer, and from there I set out on my own again with the teaching of Selune to guide me.`
  }
};