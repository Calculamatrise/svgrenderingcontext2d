import Line from "./utils/Line.js";
import Polyline from "./utils/Polyline.js";
import Ellipse from "./utils/Ellipse.js";
import Rect from "./utils/Rect.js";
import Text from "./utils/Text.js";

const position = {
    x: null,
    y: null
}

let segments = []

export default class {
    constructor(svg) {
        this.svg = svg;
    }

    #direction = "ltr";
    get direction() {
        return this.#direction;
    }
    /**
     * @param {string} value
     */
    set direction(value) {
        if (!["ltr", "rtl", "inherit"].includes(value)) {
            throw new Error("whatever");
        }

        this.#direction = value;
    }

    #fillStyle = "#000000";
    get fillStyle() {
        return this.#fillStyle;
    }
    /**
     * @param {string} value
     */
    set fillStyle(value) {
        this.#fillStyle = value;
    }

    #filter = "none";
    get filter() {
        return this.#filter;
    }
    /**
     * @param {string} value
     */
    set filter(value) {
        // <filter-function1> [<filter-function2>] [<filter-functionN>]
        // contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)
        this.#filter = value;
    }

    #font = "10px sans-serif";
    get font() {
        return this.#font;
    }
    /**
     * @param {string} value
     */
    set font(value) {
        // 10px Arial
        this.#font = value;
    }

    #globalAlpha = 1;
    get globalAlpha() {
        return this.#globalAlpha;
    }
    /**
     * @param {number} value
     */
    set globalAlpha(value) {
        if (isNaN(parseInt(value))) {
            throw new Error("NaN");
        }

        this.#globalAlpha = parseInt(value);
    }

    #globalCompositeOperation = "source-over";
    get globalCompositeOperation() {
        return this.#globalCompositeOperation;
    }
    /**
     * @param {string} value
     */
    set globalCompositeOperation(value) {
        this.#globalCompositeOperation = value;
    }

    #imageSmoothingEnabled = true;
    get imageSmoothingEnabled() {
        return this.#imageSmoothingEnabled;
    }
    /**
     * @param {number} value
     */
    set imageSmoothingEnabled(value) {
        this.#imageSmoothingEnabled = value;
    }

    #imageSmoothingQuality = "low";
    get imageSmoothingQuality() {
        return this.#imageSmoothingQuality;
    }
    /**
     * @param {string} value
     */
    set imageSmoothingQuality(value) {
        this.#imageSmoothingQuality = value;
    }

    #lineCap = "butt";
    get lineCap() {
        return this.#lineCap;
    }
    /**
     * @param {string} value
     */
    set lineCap(value) {
        this.#lineCap = value;
    }

    #lineDashOffset = 0;
    get lineDashOffset() {
        return this.#lineDashOffset;
    }
    /**
     * @param {number} value
     */
    set lineDashOffset(value) {
        this.#lineDashOffset = value;
    }

    #lineJoin = "miter";
    get lineJoin() {
        return this.#lineJoin;
    }
    /**
     * @param {string} value
     */
    set lineJoin(value) {
        this.#lineJoin = value;
    }

    #lineWidth = 1;
    get lineWidth() {
        return this.#lineWidth;
    }
    /**
     * @param {number} value
     */
    set lineWidth(value) {
        this.#lineWidth = value;
    }

    #miterLimit = 10;
    get miterLimit() {
        return this.#miterLimit;
    }
    /**
     * @param {number} value
     */
    set miterLimit(value) {
        this.#miterLimit = value;
    }

    #shadowBlur = 0;
    get shadowBlur() {
        return this.#shadowBlur;
    }
    /**
     * @param {number} value
     */
    set shadowBlur(value) {
        this.#shadowBlur = value;
    }

    #shadowColor = "rgba(0, 0, 0, 0)";
    get shadowColor() {
        return this.#shadowColor;
    }
    /**
     * @param {string} value
     */
    set shadowColor(value) {
        this.#shadowColor = value;
    }

    #shadowOffsetX = 0;
    get shadowOffsetX() {
        return this.#shadowOffsetX;
    }
    /**
     * @param {number} value
     */
    set shadowOffsetX(value) {
        this.#shadowOffsetX = value;
    }

    #shadowOffsetY = 0;
    get shadowOffsetY() {
        return this.#shadowOffsetY;
    }
    /**
     * @param {number} value
     */
    set shadowOffsetY(value) {
        this.#shadowOffsetY = value;
    }

    #strokeStyle = "#000000";
    get strokeStyle() {
        return this.#strokeStyle;
    }
    /**
     * @param {string} value
     */
    set strokeStyle(value) {
        this.#strokeStyle = value;
    }

    #textAlign = "start";
    get textAlign() {
        return this.#textAlign;
    }
    /**
     * @param {string} value
     */
    set textAlign(value) {
        this.#textAlign = value;
    }

    #textBaseline = "alphabetic";
    get textBaseline() {
        return this.#textBaseline;
    }
    /**
     * @param {string} value
     */
    set textBaseline(value) {
        this.#textBaseline = value;
    }

    /**
     * @readonly
     */
    [Symbol.toStringTag] = "SVGRenderingContext2D";

    arc(x, y, radius, segmentLength = 5) {
        if (x === void 0 || isNaN(parseInt(x)) || y === void 0 || isNaN(parseInt(y)) || radius === void 0 || isNaN(parseInt(radius)) || isNaN(parseInt(segmentLength))) {
            throw new Error("INVALID_VALUE");
        }

        const arc = new Polyline();

        for (let i = 0; i <= 360; i += segmentLength) {
            arc.addPoint(parseInt(x) + parseInt(radius) * Math.cos(i * Math.PI / 180), parseInt(y) + parseInt(radius) * Math.sin(i * Math.PI / 180))
        }

        segments.push(arc);
    }

    arcTo(x2, y2, x3, y3, radius) {
        if (Array.isArray(arguments[0])) {
            for (const argument of arguments) {
                arguments.callee.call(...argument);
            }

            return this;
        }

        if (isNaN(parseInt(x2)) || isNaN(parseInt(y2)) || isNaN(parseInt(x3)) || isNaN(parseInt(y3)) || isNaN(parseInt(radius))) {
            throw new Error("INVALID_VALUE");
        }

        const arc = new Polyline();
        
        const p0 = {x: position.x, y: position.y},
            p1 = {x: x2, y: y2},
            p2 = {x: x3, y: y3};

        for (let i = 0; i < 1; i += 1 / 10) {
            console.log(Math.pow((1 - i), 2) * p0.x + (2 * (1 - i) * i * p1.x) + Math.pow(i, 2) * p2.x)
            arc.addPoint(Math.pow((1 - i), 2) * p0.x + (2 * (1 - i) * i * p1.x) + Math.pow(i, 2) * p2.x, Math.pow((1 - i), 2) * p0.y + 2 * (1 - i) * i * p1.y + Math.pow(i, 2) * p2.y);
        }

        segments.push(arc);
    }

    beginPath() {
        position.x = null;
        position.y = null;

        segments = []
    }

    bezierCurveTo(x2, y2, x3, y3, x4, y4) {
        if (Array.isArray(arguments[0])) {
            for (const argument of arguments) {
                arguments.callee.call(...argument);
            }

            return this;
        }

        if (isNaN(parseInt(x2)) || isNaN(parseInt(y2)) || isNaN(parseInt(x3)) || isNaN(parseInt(y3)) || isNaN(parseInt(x4)) || isNaN(parseInt(y4))) {
            throw new Error("INVALID_VALUE");
        }

        const bezierCurve = new Polyline();

        let p0 = { x: position.x, y: position.y },
            p1 = { x: x2, y: y2 },
            p2 = { x: x3, y: y3 },
            p3 = { x: x4, y: y4 };

        for (let i = 0, cX, bX, aX, cY, bY, aY; i < 1; i += 1 / 10) {
            cX = 3 * (p1.x - p0.x);
            bX = 3 * (p2.x - p1.x) - cX;
            aX = p3.x - p0.x - cX - bX;

            cY = 3 * (p1.y - p0.y);
            bY = 3 * (p2.y - p1.y) - cY;
            aY = p3.y - p0.y - cY - bY;
            
            bezierCurve.addPoint((aX * Math.pow(i, 3)) + (bX * Math.pow(i, 2)) + (cX * i) + p0.x, (aY * Math.pow(i, 3)) + (bY * Math.pow(i, 2)) + (cY * i) + p0.y);
        }

        segments.push(bezierCurve);
    }

    clearRect(x, y, width, height) {
        // Same sort of thing with deleting segments with the select tool.
    }

    clip() {}

    closePath() {
        
    }

    createImageData() {
        return this.svg.outerHTML;
    }

    createLinearGradient() {}

    createPattern() {}

    createRadialGradient() {}

    drawFocusIfNeeded() {}

    drawImage() {}

    ellipse(x, y, rx, ry) {
        const ellipse = new Ellipse();

        ellipse.x = parseInt(x);
        ellipse.y = parseInt(y);
        ellipse.rx = parseInt(rx);
        ellipse.ry = parseInt(ry);

        segments.push(ellipse);
    }

    fill() {        
        segments.forEach((segment) => {
            const element = segment.toSVG();

            element.style.setProperty("fill", this.fillStyle);
            if (element.hasOwnProperty("parentElement")) {
                return;
            }
            
            this.svg.appendChild(element);
        });
    }

    fillRect(x, y, width, height) {
        const rect = new Rect();

        rect.x = parseInt(x);
        rect.y = parseInt(y);
        rect.width = parseInt(width);
        rect.height = parseInt(height);

        const element = rect.toSVG();

        element.style.setProperty("fill", this.fillStyle);
        element.style.setProperty("stroke-width", this.lineWidth);

        this.svg.appendChild(element);
    }

    fillText(content, x, y) {
        const text = new Text();

        text.x = parseInt(x);
        text.y = parseInt(y);
        text.content = content;

        const element = text.toSVG();

        element.style.setProperty("font", this.font);
        element.style.setProperty("fill", this.fillStyle);
        element.style.setProperty("stroke-width", this.lineWidth);

        this.svg.appendChild(element);
    }

    getContextAttributes() {}

    getImageData() {}

    getLineDash() {}

    getTransform() {}

    isPointInPath() {}

    isPointInStroke() {}

    lineTo(x, y) {
        const line = new Line();

        line.setPoints(position.x, position.y, position.x = x, position.y = y);

        segments.push(line);
    }

    measureText(text) {
        return {
            width: text.length * parseInt(this.font),
            height: parseInt(this.font),
            actualBoundingBoxLeft: 0,
            actualBoundingBoxRight: 0
        }
    }

    moveTo(x, y) {
        position.x = parseInt(x);
        position.y = parseInt(y);
    }

    putImageData(data) {
        this.svg;
    }

    quadraticCurveTo() {}    

    rect(x, y, width, height) {
        const rect = new Rect();

        rect.x = parseInt(x);
        rect.y = parseInt(y);
        rect.width = parseInt(width);
        rect.height = parseInt(height);

        segments.push(rect);
    }

    resetTransform() {}

    restore() {}

    rotate() {}

    save() {}

    scale() {}

    setLineDash() {}

    setTransform() {}

    stroke() {
        segments.forEach((segment) => {
            const element = segment.toSVG();

            element.style.setProperty("stroke", this.strokeStyle);
            element.style.setProperty("stroke-width", this.lineWidth);
            if (element.hasOwnProperty("parentElement")) {
                return;
            }
            
            this.svg.appendChild(element);
        });
    }

    strokeRect(x, y, width, height) {
        const rect = new Rect();

        rect.x = parseInt(x);
        rect.y = parseInt(y);
        rect.width = parseInt(width);
        rect.height = parseInt(height);

        const element = rect.toSVG();

        element.style.setProperty("stroke", this.strokeStyle);
        element.style.setProperty("stroke-width", this.lineWidth);

        this.svg.appendChild(element);
    }

    strokeText(content, x, y) {
        const text = new Text();

        text.x = parseInt(x);
        text.y = parseInt(y);
        text.content = content;

        const element = text.toSVG();

        element.style.setProperty("font", this.font);
        element.style.setProperty("stroke", this.strokeStyle);
        element.style.setProperty("stroke-width", this.lineWidth);

        this.svg.appendChild(element);
    }

    transform() {}

    translate(x, y) {}
}