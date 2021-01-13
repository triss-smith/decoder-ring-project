const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return false if the shift value is equal to 0",() => {
        let actual = caesar("tester", 0);
        expect(actual).to.be.false;
    })
})

describe("caesar", () => {
    it("should return false if the shift value is less than -25",() => {
        let actual = caesar("tester", -26);
        expect(actual).to.be.false;
    })
})

describe("caesar", () => {
    it("should return false if the shift value is greater than 25",() => {
        let actual = caesar("tester", 26);
        expect(actual).to.be.false;
    })
})
describe("caesar", () => {
    it("should ignore case of input", () => {
        let expected = "cheud";
        let actual = caesar("ZebRa",3)
        expect(actual).to.eql(expected);
    })
})
describe("caesar", () => {
    it("should handle shifts that go past the end ot the alphabet", () => {
        let expected = "cheud";
        let actual = caesar("zebra",3);
        expect(actual).to.eql(expected);
    })
})
describe("caesar", () => {
    it("should handle shifts that go past the end of the alphabet", () => {
        let expected = "xxoasxoh";
        let actual = caesar("aardvark",-3);
        expect(actual).to.eql(expected);
    })
})
describe("caesar", () => {
    it("should maintain spaces and nonalphabetic symbols in the message", () => {
        let expected = "yxiaro'p dxqb";
        let actual = caesar("Baldur's Gate", -3);
        expect(actual).to.eql(expected);
    })
})
describe("caesar", () => {
    it("should decode a message given false as a third argument", () => {
        let expected = "baldur's gate";
        let actual = caesar("Yxiaro'p Dxqb", -3,false);
        expect(actual).to.eql(expected);

    })
})
describe("caesar", () => {
    it("should return false if no shift value is present", () => {
        actual = caesar("messsage");
        expect(actual).to.be.false;
    })
})
