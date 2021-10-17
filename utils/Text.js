export default class {
    x = null;
    y = null;
    content = null;
    toSVG() {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "text");
        element.style.setProperty("stroke", "transparent");
        element.style.setProperty("fill", "transparent");
        element.setAttribute("x", this.x);
        element.setAttribute("y", this.x);
        element.innerHTML = this.content;

        return element;
    }
}