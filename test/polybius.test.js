const {expect} = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should ignore case of input", () => {
        let expected = "23513434112251";
        let actual = polybius("mEsSage",true);
        expect(actual).to.eql(expected);
    })
})
describe("polybius", () => {
    it("should, when encoding, translate 'i' and 'j' to 42", () => {
        expected = "4242";
        actual = polybius("ij",true);
        expect(actual).to.eql(expected);
    })
})