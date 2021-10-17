export default class {
    x = null;
    y = null;
    rx = null;
    ry = null;
    toSVG() {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
        element.style.setProperty("stroke", "transparent");
        element.style.setProperty("fill", "transparent");
        element.setAttribute("cx", this.x);
        element.setAttribute("cy", this.y);
        element.setAttribute("rx", this.rx);
        element.setAttribute("ry", this.ry);

        return element;
    }
}