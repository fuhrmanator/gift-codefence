import { FormatCodeFence } from "../src/formatCodeFence"

var formatter: FormatCodeFence = new FormatCodeFence();

beforeAll(() => {
    // arrange
})

describe("Convert suite:", () => {
    it("should wrap code fence", () => {
        const input = `class Calculator {
  static add(a: number, b: number) {
    return a + b;
  }
}`;
        const actual: number | string = formatter.format(input)
        expect(actual).toEqual("```\\nclass Calculator \\{\\n  static add(a\\: number, b\\: number) \\{\\n    return a + b;\\n  \\}\\n\\}\\n```")
    });

})

