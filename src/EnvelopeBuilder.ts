import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xMin: number = Number.MAX_VALUE;
    private yMin: number = Number.MAX_VALUE;
    private xMax: number = -Number.MAX_VALUE;
    private yMax: number = -Number.MAX_VALUE;
    private hasData: boolean = false;

    insert(coordinate: Coordinate): void {
        if (coordinate.length >= 2) {
            this.hasData = true;
            if (coordinate[0] < this.xMin) this.xMin = coordinate[0];
            if (coordinate[1] < this.yMin) this.yMin = coordinate[1];
            if (coordinate[0] > this.xMax) this.xMax = coordinate[0];
            if (coordinate[1] > this.yMax) this.yMax = coordinate[1];
        }
    }

    build(): Envelope {
        if (!this.hasData) {
            return new Envelope();
        }
        return new Envelope([this.xMin, this.yMin], [this.xMax, this.yMax]);
    }
}