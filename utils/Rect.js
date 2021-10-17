export default class {
    x = null;
    y = null;
    width = 0;
    height = 0;
    toSVG() {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        element.style.setProperty("stroke", "transparent");
        element.style.setProperty("fill", "transparent");
        element.setAttribute("x", this.x);
        element.setAttribute("y", this.y);
        element.setAttribute("width", this.width);
        element.setAttribute("height", this.height);

        return element;
    }
}