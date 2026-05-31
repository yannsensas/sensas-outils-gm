// mimes.js — Module Ouïe · Sensas Toulouse
const MIMES_VERSION = "1.0.0";

const MIMES_CATEGORIES = [
  "animaux","actions","metiers","sports","danses",
  "personnages","personnalites","expressions","enfants","adulte"
];

const MIMES_PUBLIC_LEVELS = ["all","adult","explicit"];

const mimes = [
  // ANIMAUX
  { id:"mime_001", label:"Pingouin qui marche", category:"animaux", difficulty:1, public:"all", keyword:"GLACE", tags:["enfants"] },
  { id:"mime_002", label:"Singe qui se gratte", category:"animaux", difficulty:1, public:"all", keyword:"JUNGLE", tags:["enfants"] },
  { id:"mime_003", label:"Chien qui fait le beau", category:"animaux", difficulty:1, public:"all", keyword:"TRUFFE", tags:["enfants"] },
  { id:"mime_004", label:"Serpent qui rampe", category:"animaux", difficulty:1, public:"all", keyword:"VENIN", tags:["enfants"] },
  { id:"mime_005", label:"Chat qui fait sa toilette", category:"animaux", difficulty:2, public:"all", keyword:"PELAGE", tags:[] },
  { id:"mime_006", label:"Aigle qui fond sur sa proie", category:"animaux", difficulty:2, public:"all", keyword:"SERRES", tags:[] },
  { id:"mime_007", label:"Crabe qui marche de côté", category:"animaux", difficulty:2, public:"all", keyword:"PINCE", tags:["enfants"] },
  { id:"mime_008", label:"Tortue qui rentre dans sa carapace", category:"animaux", difficulty:2, public:"all", keyword:"LENTEUR", tags:["enfants"] },
  { id:"mime_009", label:"Gorille qui se frappe la poitrine", category:"animaux", difficulty:1, public:"all", keyword:"DOMINANT", tags:[] },
  { id:"mime_010", label:"Pieuvre avec 8 bras", category:"animaux", difficulty:3, public:"all", keyword:"TENTACULE", tags:[] },
  { id:"mime_011", label:"Kangourou avec son bébé", category:"animaux", difficulty:2, public:"all", keyword:"POCHE", tags:["enfants"] },
  { id:"mime_012", label:"Flamant rose sur une patte", category:"animaux", difficulty:2, public:"all", keyword:"EQUILIBRE", tags:[] },
  // ACTIONS
  { id:"mime_020", label:"Couper du bois à la hache", category:"actions", difficulty:1, public:"all", keyword:"FORET", tags:[] },
  { id:"mime_021", label:"Pêcher à la canne", category:"actions", difficulty:1, public:"all", keyword:"HAMECON", tags:[] },
  { id:"mime_022", label:"Faire de la corde à sauter", category:"actions", difficulty:1, public:"all", keyword:"RYTHME", tags:["enfants"] },
  { id:"mime_023", label:"Conduire une voiture de sport", category:"actions", difficulty:1, public:"all", keyword:"VOLANT", tags:[] },
  { id:"mime_024", label:"Eplucher une orange", category:"actions", difficulty:2, public:"all", keyword:"AGRUME", tags:[] },
  { id:"mime_025", label:"Prendre une photo", category:"actions", difficulty:1, public:"all", keyword:"CLIC", tags:[] },
  { id:"mime_026", label:"Tailler une barbe avec des ciseaux", category:"actions", difficulty:2, public:"all", keyword:"POILS", tags:[] },
  { id:"mime_027", label:"Jongler avec 3 balles", category:"actions", difficulty:2, public:"all", keyword:"CIRQUE", tags:["enfants"] },
  { id:"mime_028", label:"Plonger dans une piscine", category:"actions", difficulty:2, public:"all", keyword:"SPLASH", tags:[] },
  { id:"mime_029", label:"Pelleter de la neige", category:"actions", difficulty:1, public:"all", keyword:"BLIZZARD", tags:[] },
  { id:"mime_030", label:"Escalader un mur de briques", category:"actions", difficulty:2, public:"all", keyword:"SOMMET", tags:[] },
  { id:"mime_031", label:"Mourir au ralenti façon film d'action", category:"actions", difficulty:2, public:"all", keyword:"RIDEAU", tags:[] },
  // METIERS
  { id:"mime_040", label:"Chirurgien en opération", category:"metiers", difficulty:2, public:"all", keyword:"BISTOURI", tags:[] },
  { id:"mime_041", label:"Chef cuisinier qui goûte sa sauce", category:"metiers", difficulty:1, public:"all", keyword:"RECETTE", tags:[] },
  { id:"mime_042", label:"Boxeur sur le ring", category:"metiers", difficulty:1, public:"all", keyword:"KO", tags:[] },
  { id:"mime_043", label:"Arbitre de foot qui siffle", category:"metiers", difficulty:1, public:"all", keyword:"CARTON", tags:[] },
  { id:"mime_044", label:"Violoniste sur scène", category:"metiers", difficulty:2, public:"all", keyword:"ARCHET", tags:[] },
  { id:"mime_045", label:"Dentiste qui arrache une dent", category:"metiers", difficulty:2, public:"all", keyword:"MOLAIRE", tags:[] },
  { id:"mime_046", label:"Astronaute en apesanteur", category:"metiers", difficulty:2, public:"all", keyword:"ORBITE", tags:["enfants"] },
  { id:"mime_047", label:"Mannequin sur un podium", category:"metiers", difficulty:1, public:"all", keyword:"DEFILE", tags:[] },
  { id:"mime_048", label:"Paparazzi qui mitraille", category:"metiers", difficulty:2, public:"all", keyword:"FLASH", tags:[] },
  { id:"mime_049", label:"Clown qui fait des grimaces", category:"metiers", difficulty:1, public:"all", keyword:"PISTE", tags:["enfants"] },
  { id:"mime_050", label:"Chauffeur de taxi qui klaxonne", category:"metiers", difficulty:1, public:"all", keyword:"COURSE", tags:[] },
  // SPORTS
  { id:"mime_060", label:"Slalom à ski", category:"sports", difficulty:2, public:"all", keyword:"POUDREUSE", tags:[] },
  { id:"mime_061", label:"Service au tennis", category:"sports", difficulty:1, public:"all", keyword:"FILET", tags:[] },
  { id:"mime_062", label:"Coup de pied retourné au foot", category:"sports", difficulty:3, public:"all", keyword:"CISEAU", tags:[] },
  { id:"mime_063", label:"Lancer du marteau", category:"sports", difficulty:2, public:"all", keyword:"DISQUE", tags:[] },
  { id:"mime_064", label:"Plongeon de haut vol", category:"sports", difficulty:2, public:"all", keyword:"VRILLE", tags:[] },
  { id:"mime_065", label:"Surfer sur une vague", category:"sports", difficulty:2, public:"all", keyword:"TUBE", tags:[] },
  { id:"mime_066", label:"Tir à l'arc", category:"sports", difficulty:1, public:"all", keyword:"CIBLE", tags:["enfants"] },
  { id:"mime_067", label:"Combat de sumo", category:"sports", difficulty:2, public:"all", keyword:"DOHYO", tags:[] },
  { id:"mime_068", label:"Lancer de javelot", category:"sports", difficulty:2, public:"all", keyword:"STADE", tags:[] },
  { id:"mime_069", label:"Saut en longueur", category:"sports", difficulty:2, public:"all", keyword:"SABLIERE", tags:[] },
  // DANSES
  { id:"mime_080", label:"Breakdance avec un freeze", category:"danses", difficulty:3, public:"all", keyword:"BATTLE", tags:[] },
  { id:"mime_081", label:"Tango avec un partenaire imaginaire", category:"danses", difficulty:2, public:"all", keyword:"MILONGA", tags:[] },
  { id:"mime_082", label:"Moonwalk de Michael Jackson", category:"danses", difficulty:2, public:"all", keyword:"THRILLER", tags:[] },
  { id:"mime_083", label:"La Macarena", category:"danses", difficulty:1, public:"all", keyword:"FIESTA", tags:[] },
  { id:"mime_084", label:"Danse du robot", category:"danses", difficulty:1, public:"all", keyword:"MECANIQUE", tags:["enfants"] },
  { id:"mime_085", label:"Floss dance", category:"danses", difficulty:1, public:"all", keyword:"VIRAL", tags:["enfants"] },
  { id:"mime_086", label:"Cancan french-style", category:"danses", difficulty:2, public:"all", keyword:"MOULIN", tags:[] },
  { id:"mime_087", label:"Gigue irlandaise", category:"danses", difficulty:3, public:"all", keyword:"CELTIQUE", tags:[] },
  { id:"mime_088", label:"Gangnam Style", category:"danses", difficulty:1, public:"all", keyword:"KOREA", tags:["enfants"] },
  // PERSONNAGES
  { id:"mime_100", label:"Dark Vador", category:"personnages", difficulty:1, public:"all", keyword:"EMPIRE", tags:["enfants","star-wars"] },
  { id:"mime_101", label:"Gollum cherchant son précieux", category:"personnages", difficulty:2, public:"all", keyword:"ANNEAU", tags:[] },
  { id:"mime_102", label:"Superman en vol", category:"personnages", difficulty:1, public:"all", keyword:"CAPE", tags:["enfants"] },
  { id:"mime_103", label:"Hermione qui lance un sort", category:"personnages", difficulty:1, public:"all", keyword:"BAGUETTE", tags:["enfants"] },
  { id:"mime_104", label:"Captain Jack Sparrow qui titube", category:"personnages", difficulty:2, public:"all", keyword:"RHUM", tags:[] },
  { id:"mime_105", label:"The Rock qui soulève des haltères", category:"personnages", difficulty:2, public:"all", keyword:"MUSCLES", tags:[] },
  { id:"mime_106", label:"Shrek dans son marais", category:"personnages", difficulty:1, public:"all", keyword:"OIGNONS", tags:["enfants"] },
  { id:"mime_107", label:"Mime coincé dans une boîte invisible", category:"personnages", difficulty:1, public:"all", keyword:"SILENCE", tags:["enfants"] },
  { id:"mime_108", label:"Zombie des Walking Dead", category:"personnages", difficulty:1, public:"all", keyword:"CERVEAU", tags:[] },
  { id:"mime_109", label:"Gandalf tenant son bâton", category:"personnages", difficulty:2, public:"all", keyword:"MAGIE", tags:[] },
  { id:"mime_110", label:"Yoda en méditation", category:"personnages", difficulty:2, public:"all", keyword:"FORCE", tags:["enfants","star-wars"] },
  // PERSONNALITES
  { id:"mime_120", label:"Cristiano Ronaldo qui fête un but (SIUUU)", category:"personnalites", difficulty:1, public:"all", keyword:"SIIUU", tags:[] },
  { id:"mime_121", label:"Freddie Mercury sur scène", category:"personnalites", difficulty:2, public:"all", keyword:"BOHEMIAN", tags:[] },
  { id:"mime_122", label:"Barack Obama qui fait un discours", category:"personnalites", difficulty:2, public:"all", keyword:"CHANGE", tags:[] },
  { id:"mime_123", label:"Einstein qui écrit des formules au tableau", category:"personnalites", difficulty:2, public:"all", keyword:"RELATIF", tags:[] },
  { id:"mime_124", label:"Chaplin qui marche avec sa canne", category:"personnalites", difficulty:2, public:"all", keyword:"MUET", tags:[] },
  { id:"mime_125", label:"Napoleon la main dans la veste", category:"personnalites", difficulty:2, public:"all", keyword:"ELBE", tags:[] },
  { id:"mime_126", label:"Mick Jagger qui se déhanche", category:"personnalites", difficulty:2, public:"all", keyword:"SATISFACTION", tags:[] },
  // EXPRESSIONS
  { id:"mime_140", label:"Avoir le cafard", category:"expressions", difficulty:2, public:"all", keyword:"BLUES", tags:[] },
  { id:"mime_141", label:"Casser les pieds de quelqu'un", category:"expressions", difficulty:2, public:"all", keyword:"CASSE", tags:[] },
  { id:"mime_142", label:"Tourner en rond", category:"expressions", difficulty:1, public:"all", keyword:"CERCLE", tags:[] },
  { id:"mime_143", label:"Avoir les pieds dans le plat", category:"expressions", difficulty:2, public:"all", keyword:"GAFFEUR", tags:[] },
  { id:"mime_144", label:"Avaler des couleuvres", category:"expressions", difficulty:2, public:"all", keyword:"HUMILIATION", tags:[] },
  { id:"mime_145", label:"Avoir le vent en poupe", category:"expressions", difficulty:2, public:"all", keyword:"SUCCES", tags:[] },
  { id:"mime_146", label:"Se prendre les pieds dans le tapis", category:"expressions", difficulty:2, public:"all", keyword:"GAFFE", tags:[] },
  // ENFANTS
  { id:"mime_160", label:"Pikachu qui lance un éclair", category:"enfants", difficulty:1, public:"all", keyword:"POKEBALL", tags:["enfants"] },
  { id:"mime_161", label:"Elsa qui crée de la glace", category:"enfants", difficulty:1, public:"all", keyword:"LIBERE", tags:["enfants"] },
  { id:"mime_162", label:"Bob l'Éponge qui absorbe de l'eau", category:"enfants", difficulty:1, public:"all", keyword:"BIKINI", tags:["enfants"] },
  { id:"mime_163", label:"Minion qui mange une banane", category:"enfants", difficulty:1, public:"all", keyword:"BEE-DO", tags:["enfants"] },
  { id:"mime_164", label:"Simba qui rugit pour la première fois", category:"enfants", difficulty:2, public:"all", keyword:"PRIDE", tags:["enfants"] },
  { id:"mime_165", label:"Mario qui saute sur un champignon", category:"enfants", difficulty:1, public:"all", keyword:"KOOPA", tags:["enfants"] },
  { id:"mime_166", label:"Spiderman qui lance sa toile", category:"enfants", difficulty:1, public:"all", keyword:"ARAIGNEE", tags:["enfants"] },
  // ADULTE suggestif
  { id:"mime_200", label:"Striptease ultra-lent", category:"adulte", difficulty:1, public:"adult", keyword:"EFFEUILLEE", tags:[] },
  { id:"mime_201", label:"Envoyer des baisers coquins", category:"adulte", difficulty:1, public:"adult", keyword:"SEDUCTION", tags:[] },
  { id:"mime_202", label:"Danser comme dans un clip R&B", category:"adulte", difficulty:1, public:"adult", keyword:"TWERK", tags:[] },
  { id:"mime_203", label:"Mimer un massage très sensuel", category:"adulte", difficulty:2, public:"adult", keyword:"HUILE", tags:[] },
  { id:"mime_205", label:"Simuler un rendez-vous galant", category:"adulte", difficulty:2, public:"adult", keyword:"FLIRT", tags:[] },
  { id:"mime_206", label:"Scène romantique façon Titanic", category:"adulte", difficulty:2, public:"adult", keyword:"PROUE", tags:[] },
  // ADULTE explicite
  { id:"mime_220", label:"Mimer l'acte avec une chaise (à deux)", category:"adulte", difficulty:1, public:"explicit", keyword:"FRICTION", tags:[] },
  { id:"mime_221", label:"Orgasme de When Harry Met Sally", category:"adulte", difficulty:1, public:"explicit", keyword:"SALLY", tags:[] },
  { id:"mime_222", label:"Kamasutra — position 69", category:"adulte", difficulty:2, public:"explicit", keyword:"ARITHMETIQUE", tags:[] },
  { id:"mime_223", label:"Lap dance imaginaire", category:"adulte", difficulty:1, public:"explicit", keyword:"BILLET", tags:[] },
  { id:"mime_224", label:"Infirmière et patient (jeux de rôles)", category:"adulte", difficulty:2, public:"explicit", keyword:"STETHOSCOPE", tags:[] },
  { id:"mime_225", label:"Le couple discret en vacances", category:"adulte", difficulty:2, public:"explicit", keyword:"CHAMBRE", tags:[] },
  { id:"mime_226", label:"La scène de Ghost avec la poterie", category:"adulte", difficulty:2, public:"explicit", keyword:"ARGILE", tags:[] },
];

if (typeof window !== "undefined") {
  window.MIMES_VERSION = MIMES_VERSION;
  window.MIMES_CATEGORIES = MIMES_CATEGORIES;
  window.MIMES_PUBLIC_LEVELS = MIMES_PUBLIC_LEVELS;
  window.mimes = mimes;
}
