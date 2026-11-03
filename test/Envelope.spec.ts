import { describe, it, expect } from "vitest";
import Envelope from "../src/Envelope";

describe("test Envelope", () => {
    it("should be empty no arg", () => {
        const env = new Envelope();
        expect(env.isEmpty()).to.be.true;
        expect(Number.isNaN(env.getXmin())).to.be.true;
    });

    it("should construct with min and max coordinates", () => {
        const env = new Envelope([0.0, 0.0], [2.0, 3.0]);
        expect(env.isEmpty()).to.be.false;
        expect(env.getXmin()).to.equal(0.0);
        expect(env.getYmin()).to.equal(0.0);
        expect(env.getXmax()).to.equal(2.0);
        expect(env.getYmax()).to.equal(3.0);
    });

    it("should return correct toString representation", () => {
        const env = new Envelope([0.0, 0.0], [2.0, 3.0]);
        expect(env.toString()).to.equal("0,0,2,3");
    });
});