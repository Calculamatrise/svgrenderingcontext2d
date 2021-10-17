export default class {
    x1 = null;
    y1 = null;
    x2 = null;
    y2 = null;
    setPoints(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    toSVG() {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "line");
        element.style.setProperty("stroke", "transparent");
        element.setAttribute("x1", this.x1);
        element.setAttribute("y1", this.y1);
        element.setAttribute("x2", this.x2);
        element.setAttribute("y2", this.y2);

        return element;
    }
}