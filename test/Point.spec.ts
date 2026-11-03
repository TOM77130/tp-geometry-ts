import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("should return 'Point' for getType()", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });
    it("Should be empty with no arg", () => {
        const p = new Point();
        expect(p.isEmpty()).to.be.true;
    });
    it("Should be empty with arg", () => {
        const p = new Point([3.0,4.0]);
        expect(p.isEmpty()).to.be.false;
    });
    it("should translate point coordinates", () => {
        const p = new Point([3.0, 4.0]);
        p.translate(1.0, -2.0);
        expect(p.x()).to.equal(4.0);
        expect(p.y()).to.equal(2.0);
    });

    it("should translate if empty", () => {
        const p = new Point();
        p.translate(1.0, 1.0);
        expect(p.isEmpty()).to.be.true;
    });

    it("should clone a point", () => {
        const p1 = new Point([1.0, 2.0]);
        const p2 = p1.clone();
        p2.translate(10.0, 10.0);
        
        expect(p1.x()).to.equal(1.0);
        expect(p1.y()).to.equal(2.0);
        
        expect(p2.x()).to.equal(11.0);
        expect(p2.y()).to.equal(12.0);
    });
});

