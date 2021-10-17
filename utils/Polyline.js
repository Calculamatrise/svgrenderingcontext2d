export default class {
    points = []
    addPoint(...points) {
        this.points.push(points.join(" "));
    }
    toSVG() {
        const element = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
        element.style.setProperty("stroke", "transparent");
        element.style.setProperty("fill", "transparent");
        element.setAttribute("points", this.points.join(","));

        return element;
    }
}