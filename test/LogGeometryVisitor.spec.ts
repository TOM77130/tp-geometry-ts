import { describe, it, expect, vi, afterEach } from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    // Nettoie l'espion console.log après chaque test
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("should log an empty point", () => {
        const consoleSpy = vi.spyOn(console, "log");
        const visitor = new LogGeometryVisitor();
        const p = new Point();
        
        p.accept(visitor);
        expect(consoleSpy).toHaveBeenCalledWith("Je suis un point vide.");
    });

    it("should log a point with coordinates", () => {
        const consoleSpy = vi.spyOn(console, "log");
        const visitor = new LogGeometryVisitor();
        const p = new Point([2.0, 3.0]);
        
        p.accept(visitor);
        expect(consoleSpy).toHaveBeenCalledWith("Je suis un point avec x=2 et y=3.");
    });

    it("should log an empty LineString", () => {
        const consoleSpy = vi.spyOn(console, "log");
        const visitor = new LogGeometryVisitor();
        const l = new LineString();
        
        l.accept(visitor);
        expect(consoleSpy).toHaveBeenCalledWith("Je suis une polyligne vide.");
    });

    it("should log a LineString with points", () => {
        const consoleSpy = vi.spyOn(console, "log");
        const visitor = new LogGeometryVisitor();
        const l = new LineString([
            new Point([0.0, 0.0]), 
            new Point([1.0, 1.0]), 
            new Point([2.0, 2.0])
        ]);
        
        l.accept(visitor);
        expect(consoleSpy).toHaveBeenCalledWith("Je suis une polyligne définie par 3 point(s).");
    });
});