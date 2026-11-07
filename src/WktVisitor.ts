import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {
    private buffer: string = "";

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.buffer = "POINT EMPTY";
        } else {
            this.buffer = `POINT(${point.x()} ${point.y()})`;
        }
    }

    visitLineString(lineString: LineString): void {
        if (lineString.isEmpty()) {
            this.buffer = "LINESTRING EMPTY";
        } else {
            const pointsWkt: string[] = [];
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                const point = lineString.getPointN(i);
                if (point) {
                    pointsWkt.push(`${point.x()} ${point.y()}`);
                }
            }
            this.buffer = `LINESTRING(${pointsWkt.join(",")})`;
        }
    }

    getResult(): string {
        return this.buffer;
    }
}