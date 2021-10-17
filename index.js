const position = {
    x: null,
    y: null
}

let segments = []

export default class {
    constructor(svg) {
        this.svg = svg;
    }

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     * @protected
     */
    #lineDash = [];

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    /**
     * @private
     */
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

    arc(x, y, radius, startAngle, endAngle, counterClockwise = false) {
        if (isNaN(parseInt(x)) || isNaN(parseInt(y)) || isNaN(parseInt(radius)) || isNaN(parseInt(startAngle)) || isNaN(parseInt(endAngle))) {
            throw new Error("INVALID_VALUE");
        }

        const element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        const points = []

        for (let i = startAngle * 180 / Math.PI; i <= endAngle * 180 / Math.PI; i += 1) {
            points.push([
                parseInt(x) + parseInt(radius) * Math.cos(i * Math.PI / 180),
                parseInt(y) + parseInt(radius) * Math.sin(i * Math.PI / 180)
            ].join(" "));
        }

        element.style.setProperty("stroke", "none");
        element.style.setProperty("fill", "none");

        element.setAttribute("points", points.join(","));

        segments.push(element);
    }

    arcTo(x2, y2, x3, y3, radius) {
        if (Array.isArray(arguments[0])) {
            for (const argument of arguments) {
                arguments.callee.call(...argument);
            }

            return;
        }

        if (isNaN(parseInt(x2)) || isNaN(parseInt(y2)) || isNaN(parseInt(x3)) || isNaN(parseInt(y3)) || isNaN(parseInt(radius))) {
            throw new Error("INVALID_VALUE");
        }

        const element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        const p0 = { x: position.x, y: position.y }
        const p1 = { x: x2, y: y2 }
        const p2 = { x: x3, y: y3 }
        const points = []

        for (let i = 0; i < 1.01; i += 1 / 100) {
            console.log(Math.pow((1 - i), 2) * p0.x + (2 * (1 - i) * i * p1.x) + Math.pow(i, 2) * p2.x)
            points.push(Math.pow((1 - i), 2) * p0.x + (2 * (1 - i) * i * p1.x) + Math.pow(i, 2) * p2.x, Math.pow((1 - i), 2) * p0.y + 2 * (1 - i) * i * p1.y + Math.pow(i, 2) * p2.y);
        }

        element.style.setProperty("stroke", "none");
        element.style.setProperty("fill", "none");

        element.setAttribute("points", points.join(","));

        segments.push(element);
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

            return;
        }

        if (isNaN(parseInt(x2)) || isNaN(parseInt(y2)) || isNaN(parseInt(x3)) || isNaN(parseInt(y3)) || isNaN(parseInt(x4)) || isNaN(parseInt(y4))) {
            throw new Error("INVALID_VALUE");
        }

        const element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        const p0 = { x: position.x, y: position.y }
        const p1 = { x: x2, y: y2 }
        const p2 = { x: x3, y: y3 }
        const p3 = { x: x4, y: y4 }
        const points = []

        for (let i = 0, cX, bX, aX, cY, bY, aY; i < 1.01; i += 1 / 100) {
            cX = 3 * (p1.x - p0.x);
            bX = 3 * (p2.x - p1.x) - cX;
            aX = p3.x - p0.x - cX - bX;

            cY = 3 * (p1.y - p0.y);
            bY = 3 * (p2.y - p1.y) - cY;
            aY = p3.y - p0.y - cY - bY;
            
            points.push([
                (aX * Math.pow(i, 3)) + (bX * Math.pow(i, 2)) + (cX * i) + p0.x,
                (aY * Math.pow(i, 3)) + (bY * Math.pow(i, 2)) + (cY * i) + p0.y
            ].join(" "));
        }

        element.style.setProperty("stroke", "none");
        element.style.setProperty("fill", "none");

        element.setAttribute("points", points.join(","));

        segments.push(element);
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

    ellipse(x, y, radiusX, radiusY, rotation) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        
        element.style.setProperty("stroke", "none");
        element.style.setProperty("fill", "none");
        
        element.setAttribute("cx", parseInt(x));
        element.setAttribute("cy", parseInt(y));
        element.setAttribute("rx", parseInt(radiusX));
        element.setAttribute("ry", parseInt(radiusY));
        element.setAttribute("transform", "rotate(" + (rotation * 180 / Math.PI) + ") translate(" + (rotation * 180 / Math.PI) + " -" + (rotation * 180 / Math.PI) * 2 + ")");

        segments.push(element);
    }

    fill() {        
        segments.forEach((segment) => {
            segment.style.setProperty("fill", this.fillStyle);
            if (segment.hasOwnProperty("parentElement")) {
                return;
            }
            
            this.svg.appendChild(segment);
        });
    }

    fillRect(x, y, width, height) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        element.style.setProperty("fill", this.fillStyle);

        element.setAttribute("x", x);
        element.setAttribute("y", y);
        element.setAttribute("width", width);
        element.setAttribute("height", height);

        this.svg.appendChild(element);
    }

    fillText(content, x, y) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "text");
        
        element.style.setProperty("stroke-width", this.lineWidth);
        element.style.setProperty("stroke", "none");
        element.style.setProperty("fill", this.fillStyle);
        element.style.setProperty("font", this.font);

        element.setAttribute("x", x);
        element.setAttribute("y", y);

        element.innerHTML = content;

        this.svg.appendChild(element);
    }

    getContextAttributes() {}

    getImageData() {}

    getLineDash() {
        return this.#lineDash.split(/\s+/g);
    }

    getTransform() {}

    isPointInPath() {}

    isPointInStroke() {}

    lineTo(x, y) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "line");
        
        element.style.setProperty("stroke", "none");
        
        element.setAttribute("x1", position.x);
        element.setAttribute("y1", position.y);
        element.setAttribute("x2", position.x = x);
        element.setAttribute("y2", position.y = y);

        segments.push(element);
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

    quadraticCurveTo(cpx, cpy, x, y) {
        if (Array.isArray(arguments[0])) {
            for (const argument of arguments) {
                this.quadraticCurveTo(...argument);
            }

            return;
        }

        if (isNaN(parseInt(cpx)) || isNaN(parseInt(cpy)) || isNaN(parseInt(x)) || isNaN(parseInt(y))) {
            throw new Error("INVALID_VALUE");
        }

        const element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        const p0 = { x: position.x, y: position.y }
        const p1 = { x: cpx, y: cpy }
        const p2 = { x: x, y: y }
        const points = []

        for (let i = 0; i < 1; i += 1 / 10) {
            points.push([
                position.x = Math.pow((1 - i), 2) * p0.x + 2 * (1 - i) * i * p1.x + Math.pow(i, 2) * p2.x,
                position.y = Math.pow((1 - i), 2) * p0.y + 2 * (1 - i) * i * p1.y + Math.pow(i, 2) * p2.y
            ].join(" "));
        }

        element.style.setProperty("stroke", "none");
        element.style.setProperty("fill", "none");

        element.setAttribute("points", points.join(","));

        segments.push(element);
    }

    rect(x, y, width, height) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "rect");

        element.style.setProperty("stroke", "none");
        element.style.setProperty("fill", "none");

        element.setAttribute("x", x);
        element.setAttribute("y", y);
        element.setAttribute("width", width);
        element.setAttribute("height", height);

        segments.push(element);
    }

    resetTransform() {}

    restore() {}

    rotate() {}

    save() {}

    scale() {}

    setLineDash(...args) {
        this.#lineDash = args.join(" ");
    }

    setTransform() {}

    stroke() {
        segments.forEach((segment) => {
            segment.style.setProperty("stroke", this.strokeStyle);
            segment.style.setProperty("stroke-dasharray", this.#lineDash);
            segment.style.setProperty("stroke-linecap", this.lineCap);
            segment.style.setProperty("stroke-linejoin", this.lineJoin);
            segment.style.setProperty("stroke-width", this.lineWidth);
            if (segment.hasOwnProperty("parentElement")) {
                return;
            }
            
            this.svg.appendChild(segment);
        });
    }

    strokeRect(x, y, width, height) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        
        element.style.setProperty("stroke", this.strokeStyle);
        element.style.setProperty("stroke-linecap", this.lineCap);
        element.style.setProperty("stroke-linejoin", this.lineJoin);
        element.style.setProperty("stroke-width", this.lineWidth);
        element.style.setProperty("fill", "none");

        element.setAttribute("x", x);
        element.setAttribute("y", y);
        element.setAttribute("width", width);
        element.setAttribute("height", height);

        this.svg.appendChild(element);
    }

    strokeText(content, x, y) {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "text");
        
        element.style.setProperty("stroke-width", this.lineWidth);
        element.style.setProperty("stroke", this.strokeStyle);
        element.style.setProperty("fill", "none");
        element.style.setProperty("font", this.font);

        element.setAttribute("x", x);
        element.setAttribute("y", y);

        element.innerHTML = content;

        this.svg.appendChild(element);
    }

    transform() {}

    translate(x, y) {}
}