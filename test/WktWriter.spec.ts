import { describe, it, expect } from "vitest";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Geometry from "../src/Geometry";
import Envelope from "../src/Envelope";

describe("test WktWriter", () => {
    it("should write an empty Point", () => {
        const writer = new WktWriter();
        const p = new Point();
        expect(writer.write(p)).to.equal("POINT EMPTY");
    });

    it("should write a Point with coordinates", () => {
        const writer = new WktWriter();
        const p = new Point([3.0, 4.0]);
        expect(writer.write(p)).to.equal("POINT(3 4)");
    });

    it("should write an empty LineString", () => {
        const writer = new WktWriter();
        const l = new LineString();
        expect(writer.write(l)).to.equal("LINESTRING EMPTY");
    });

    it("should write a LineString with coordinates", () => {
        const writer = new WktWriter();
        const p1 = new Point([0.0, 0.0]);
        const p2 = new Point([1.0, 1.0]);
        const p3 = new Point([5.0, 5.0]);
        const l = new LineString([p1, p2, p3]);
        
        expect(writer.write(l)).to.equal("LINESTRING(0 0,1 1,5 5)");
    });
});