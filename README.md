# Morse Code Translator

A simple web app that translates between English and Morse code. The app auto-detects the input type and produces the correct translation. Core logic is written as pure functions so it can be tested with Jest.

## Features

English ⇄ Morse translation
Automatic input detection
Swap input/output fields
Pure logic separated from DOM for testing

## Technologies

HTML, CSS/SCSS
JavaScript
Jest

## Assets Used

The project uses Google Fonts (Jersey 20) and a background image from Pexels.
Image source: https://www.pexels.com/photo/abstract-close-up-of-illuminated-led-panel-pattern-33966530/
Direct file: https://images.pexels.com/photos/33966530/pexels-photo-33966530.jpeg

## Translation Logic (summary)

English to Morse: uppercase, map characters, join letters with spaces, words with " / ".
Morse to English: split by spaces or slashes, map codes, join letters and words.

**Live Demo** https://dinara-t.github.io/Morse-Code-Translator/
