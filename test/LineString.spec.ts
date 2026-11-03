import { describe, it, expect } from "vitest";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(l.getNumPoints()).to.equal(0);
        expect(l.getPointN(3)).to.be.equal(undefined);
    });

    it("test constructor with points", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([4.0, 2.0]);
        const l = new LineString([a, b]);

        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(0)).to.equal(a);
        expect(l.getPointN(1)).to.equal(b);
        expect(l.getPointN(3)).to.be.undefined;
    });

    it("should return 'LineString' for getType()", () => {
        const l = new LineString();
        expect(l.getType()).to.equal("LineString");
    });
    it("Should be empty with no arg", () => {
        const l = new LineString();
        expect(l.isEmpty()).to.be.true;
    });
    it("Should be empty with arg", () => {
        const a = new Point([3.0, 4.0]);
        const b = new Point([4.0, 2.0]);
        const l = new LineString([a, b]);
        expect(l.isEmpty()).to.be.false;
    });
    it("should translate all points in the LineString", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = new Point([3.0, 4.0]);
        const l = new LineString([p1, p2]);
        
        l.translate(2.0, 1.0);
        
        expect(l.getPointN(0)?.x()).to.equal(3.0);
        expect(l.getPointN(0)?.y()).to.equal(3.0);
        expect(l.getPointN(1)?.x()).to.equal(5.0);
        expect(l.getPointN(1)?.y()).to.equal(5.0);
    });
    it("should translate empty LineString", () => {
        const l = new LineString();
        l.translate(2.0, 1.0);
        expect(l.isEmpty()).to.be.true;
    });
});