import Point from "./Point";
import Geometry from "./Geometry";

export default class LineString implements Geometry {
    private points: Point[];

    constructor(points?: Point[]) {
        this.points = points ? points : [];
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number): Point | undefined {
        return this.points[n];
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length ===0;
    }

    translate(dx: number, dy: number): void {
        if (!this.isEmpty()) {
            for (const point of this.points) {
                point.translate(dx, dy);
            }
        }
    }
}