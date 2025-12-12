const {
  translateToMorse,
  translateToEnglish,
  detectInputType,
  EN_TO_MORSE,
  MORSE_TO_EN,
} = require("../js/translator.js");

describe("Morse translator core functions", () => {
  test("EN_TO_MORSE has SOS mapping", () => {
    expect(EN_TO_MORSE.S).toBe("...");
    expect(EN_TO_MORSE.O).toBe("---");
  });

  test("MORSE_TO_EN builds reverse mapping", () => {
    expect(MORSE_TO_EN["..."]).toBe("S");
    expect(MORSE_TO_EN["---"]).toBe("O");
  });

  test("translate English to Morse for single word", () => {
    const result = translateToMorse("sos");
    expect(result).toBe("... --- ...");
  });

  test("translate English to Morse for multiple words", () => {
    const result = translateToMorse("sos sos");
    expect(result).toBe("... --- ... / ... --- ...");
  });

  test("translate English handles extra spaces", () => {
    const result = translateToMorse("  Hello   World  ");
    expect(result).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });

  test("translate Morse to English for single word", () => {
    const result = translateToEnglish("... --- ...");
    expect(result).toBe("SOS");
  });

  test("translate Morse to English for multiple words with slash", () => {
    const result = translateToEnglish("... --- ... / ... --- ...");
    expect(result).toBe("SOS SOS");
  });

  test("translate Morse to English for multiple words with triple spaces", () => {
    const result = translateToEnglish("... --- ...   ... --- ...");
    expect(result).toBe("SOS SOS");
  });

  test("detectInputType identifies English", () => {
    expect(detectInputType("Hello world")).toBe("english");
    expect(detectInputType("SOS sos")).toBe("english");
  });

  test("detectInputType identifies Morse", () => {
    expect(detectInputType("... --- ...")).toBe("morse");
    expect(detectInputType("..-. --- --- / -... .- .-.")).toBe("morse");
  });

  test("detectInputType empty or non-string", () => {
    expect(detectInputType("   ")).toBe("empty");
    expect(detectInputType(null)).toBe("empty");
    expect(detectInputType(undefined)).toBe("empty");
  });
});
