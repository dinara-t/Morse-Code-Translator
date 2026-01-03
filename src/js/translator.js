import { EN_TO_MORSE, MORSE_TO_EN } from "./alphabet.js";

function normalizeEnglish(str) {
  if (typeof str !== "string") return "";
  return str.trim().toUpperCase();
}

function getUntranslatableInfoMessage() {
  return "? represents untranslatable characters";
}

function translateToMorse(englishStr) {
  const normalized = normalizeEnglish(englishStr);
  if (!normalized) return "";
  const words = normalized.split(/\s+/);
  const morseWords = words.map((word) => {
    const letters = Array.from(word);
    const morseLetters = letters.map((ch) => {
      if (EN_TO_MORSE[ch]) return EN_TO_MORSE[ch];
      return "?";
    });
    return morseLetters.join(" ");
  });
  return morseWords.join(" / ");
}

function translateToEnglish(morseStr) {
  if (typeof morseStr !== "string") return "";
  const trimmed = morseStr.trim();
  if (!trimmed) return "";

  if (/^[\/\s]+$/.test(trimmed)) return "?";

  const normalized = trimmed.replace(/\s{3,}/g, "   ");
  const wordTokens = normalized.split(/\s{3}|\/+/);
  const englishWords = wordTokens
    .filter((w) => w.trim().length > 0)
    .map((wordCode) => {
      const codes = wordCode.trim().split(/\s+/);
      const letters = codes.map((code) => {
        if (MORSE_TO_EN[code]) return MORSE_TO_EN[code];
        return "?";
      });
      return letters.join("");
    });
  return englishWords.join(" ");
}

function detectInputType(str) {
  if (typeof str !== "string") return "empty";
  const trimmed = str.trim();
  if (!trimmed) return "empty";
  const morsePattern = /^[.\-\s\/]+$/;
  if (morsePattern.test(trimmed)) return "morse";
  return "english";
}

export {
  translateToMorse,
  translateToEnglish,
  detectInputType,
  getUntranslatableInfoMessage,
  EN_TO_MORSE,
  MORSE_TO_EN,
};
