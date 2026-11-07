import { describe, it, expect } from "vitest";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktVisitor", () => {
    it("should write an empty Point", () => {
        const visitor = new WktVisitor();
        const p = new Point();
        
        p.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT EMPTY");
    });

    it("should write a Point with coordinates", () => {
        const visitor = new WktVisitor();
        const p = new Point([3.0, 4.0]);
        
        p.accept(visitor);
        // On attend (3 4) et non (3.0 4.0) en raison du formatage JS
        expect(visitor.getResult()).to.equal("POINT(3 4)");
    });

    it("should write an empty LineString", () => {
        const visitor = new WktVisitor();
        const l = new LineString();
        
        l.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });

    it("should write a LineString with coordinates", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([0.0, 0.0]);
        const p2 = new Point([1.0, 1.0]);
        const p3 = new Point([5.0, 5.0]);
        const l = new LineString([p1, p2, p3]);
        
        l.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING(0 0,1 1,5 5)");
    });
});