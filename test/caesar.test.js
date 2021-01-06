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
        let expected = "knvdq bzrd";
        let actual = caesar("Lower case",-1)
        expect(actual).to.eql(expected);
    })
})