import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {
    it("should build envelope from inserted coordinates (example from spec)", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);
        const result = builder.build();

        expect(result.getXmin()).to.equal(0.0);
        expect(result.getYmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(2.0);
        expect(result.getYmax()).to.equal(3.0);
    });

    it("should build empty envelope if no coordinates inserted", () => {
        const builder = new EnvelopeBuilder();
        const result = builder.build();
        expect(result.isEmpty()).to.be.true;
    });
});