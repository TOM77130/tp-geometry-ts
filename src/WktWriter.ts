import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter {
    write(geometry: Geometry): string {
        if (geometry instanceof Point) {
            if (geometry.isEmpty()) {
                return "POINT EMPTY";
            }
            return `POINT(${geometry.x()} ${geometry.y()})`;
            
        } else if (geometry instanceof LineString) {
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY";
            }
            
            const pointsWkt: string[] = [];
            for (let i = 0; i < geometry.getNumPoints(); i++) {
                const point = geometry.getPointN(i);
                if (point) {
                    pointsWkt.push(`${point.x()} ${point.y()}`);
                }
            }
            return `LINESTRING(${pointsWkt.join(",")})`;
            
        } else {
            throw new TypeError("geometry type not supported");
        }
    }
}