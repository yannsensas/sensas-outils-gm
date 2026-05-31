// keywords.js — Module Ouïe · Sensas Toulouse
// Mots-clés transmis au binôme après chaque mime validé, dans l'ordre fixe.
// Modifier uniquement ce fichier pour changer les mots, sans toucher à mimes.js.

const KEYWORDS_VERSION = "1.0.0";

const keywords = [
  "Humanité",
  "Tolérance",
  "Egalité",
  "Partage",
  "Mixité",
  "Ecoute",
  "Inclusion",
  "Accessibilité"
];

if (typeof window !== "undefined") {
  window.KEYWORDS_VERSION = KEYWORDS_VERSION;
  window.keywords = keywords;
}