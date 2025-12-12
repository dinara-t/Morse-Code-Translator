import {
  translateToMorse,
  translateToEnglish,
  detectInputType,
} from "./translator.js";

const inputEl = document.getElementById("input-text");
const outputEl = document.getElementById("output-text");
const translateBtn = document.getElementById("translate-btn");
const swapBtn = document.getElementById("swap-btn");
const modeLabel = document.getElementById("mode-label");

function updateModeLabel() {
  const value = inputEl.value;
  const type = detectInputType(value);
  if (type === "english") {
    modeLabel.textContent = "Detected: English → Morse";
  } else if (type === "morse") {
    modeLabel.textContent = "Detected: Morse → English";
  } else {
    modeLabel.textContent = "Waiting for input…";
  }
}

function runTranslation() {
  const value = inputEl.value;
  const type = detectInputType(value);
  if (type === "english") {
    const result = translateToMorse(value);
    outputEl.value = result;
    modeLabel.textContent = "Translated English → Morse";
  } else if (type === "morse") {
    const result = translateToEnglish(value);
    outputEl.value = result;
    modeLabel.textContent = "Translated Morse → English";
  } else {
    outputEl.value = "";
    modeLabel.textContent = "Nothing to translate";
  }
}

function swapFields() {
  const inputValue = inputEl.value;
  const outputValue = outputEl.value;
  inputEl.value = outputValue;
  outputEl.value = inputValue;
  updateModeLabel();
}

translateBtn.addEventListener("click", runTranslation);
swapBtn.addEventListener("click", swapFields);
inputEl.addEventListener("input", updateModeLabel);

updateModeLabel();
