
interface Style {
  stroke: string;
  fill: string;
  strokeWidth: string;
}

export class VesicaService {
  public static color = "#3ba6f1";
  public static width = 0.5;
  public static wres = 2;
  public static generate(depth = 0, ls = 1) {
    const r = Math.random();

    if (depth < 10) {
      if (r > 0.7) { // simple scale in
        const s = (Math.random()) * 0.2 + 0.8;
        const st = this.style(this.color, "none", Math.floor(Math.random() * this.width + 1) / this.wres / ls);
        // draw base circle
        const base = this.scale(s, s, [this.randomShape(100, st)])

        const elm = this.generate(depth + 1, ls * s);
        base.appendChild(elm);
        return base;
      } else if (r > 0.6) {
        const st = this.style(this.color, "none", Math.floor(Math.random() * this.width + 1) / this.wres / ls);
        const elm = this.group([]);
        const rspace = 5 + Math.random() * 10;
        const count = Math.floor(Math.random() * 5);
        // let r = 100;
        const npn = 3 + Math.floor(Math.random() * 16);
        const nps = 3 + Math.floor(Math.random() * 16);
        const mode = Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
          switch (mode) {
            case 0: elm.appendChild(this.circle(r, st)); break;
            case 1: elm.appendChild(this.rect(r * (Math.sqrt(2)), r * (Math.sqrt(2)), st)); break;
            case 2: elm.appendChild(this.npoly(r, npn, nps, st)); break;
          }
          // r = r - rspace;
        }
        var nscale = (100 - rspace * count) / 100
        elm.appendChild(this.scale(nscale, nscale, [this.generate(depth + 1, ls * nscale)]));
        return elm;
      } else if (r > 0.5) { // simple rotate
        const s = Math.floor((Math.random()) * 8) * 45;
        // draw base circle
        const base = this.rotate(s)

        const elm = this.generate(depth, ls); // dont count depth
        base.appendChild(elm);
        return base;
      } else if (r > 0.4) { // twin scale in
        const st = this.style(this.color, "none", Math.floor(Math.random() * this.width + 1) / this.wres / ls);
        const ratio = Math.random();
        const s1 = this.translate(-100 + ratio / 2 * 200, 0, [this.scale(ratio, ratio, [this.randomShape(100 * ratio, st), this.generate(depth + 1, ls * ratio)])]);
        const s2 = this.translate(-100 + ((ratio + 1) / 2 * 200), 0, [this.scale(1 - ratio, 1 - ratio, [this.randomShape(100 * (1 - ratio), st), this.generate(depth + 1, ls * (1 - ratio))])]);

        return this.group([s1, s2])
      } else { // flower
        const base = this.group();
        const size = Math.random() * 100;
        const num = (1 << (Math.random() * 4 + 1));
        const shape = this.scale(size / 100, size / 100, [this.generate(depth + 7, ls * size / 100)]);
        for (let i = 0; i < num; i++) {
          var relm = this.rotate(360 * i / num, [this.translate(0, 100 - size, [shape.cloneNode(true)])]);
          base.appendChild(relm);
        }
        const s = (100 - size) / 100;
        const st = this.style(this.color, "none", Math.floor(Math.random() * this.width + 1) / this.wres / ls);
        // draw base circle
        //base.appendChild(scale(s,s,[randomShape(100, st)]));
        base.appendChild(this.scale(s, s, [this.generate(depth + 1, ls * s)]));

        return base;
      }
    }
    const s = this.style(this.color, "none", Math.floor(Math.random() * this.width + 1) / this.wres / ls);
    return this.randomShape(100, s);
  }

  public static randomShape(size: number, style: Style) {
    var r = Math.random();
    if (r > 0.4) {
      return this.circle(size, style);
    } else if (r > 0.2) {
      return this.rect(size * (Math.sqrt(2)), size * (Math.sqrt(2)), style);
      //return group([circle(size, style), rect(size*(Math.sqrt(2)), size*(Math.sqrt(2)), style)]);
    } else {
      return this.npoly(size, (3 + Math.floor(Math.random() * 16)), (3 + Math.floor(Math.random() * 16)), style);
    }
  }

  public static scale(x: number, y: number, child: SVGElement[]) {
    var elm = this.svgElm("g");
    elm.setAttribute("transform", "scale(" + x + "," + y + ")");
    this.addChild(elm, child);
    return elm;
  }

  public static rotate(deg: number, child?: SVGElement[]) {
    var elm = this.svgElm("g");
    elm.setAttribute("transform", "rotate(" + deg + ")");
    this.addChild(elm, child);
    return elm;
  }

  public static translate(x: number, y: number, child?: Node[]) {
    var elm = this.svgElm("g");
    elm.setAttribute("transform", "translate(" + x + "," + y + ")");
    this.addChild(elm, child);
    return elm;
  }

  public static group(child?: SVGElement[]) {
    var elm = this.svgElm("g");
    this.addChild(elm, child);
    return elm;
  }
  public static npoly(r: number, n: number, s: number, style: Style) {
    var elm = this.svgElm("polygon");
    var points = [];
    var c = 0;
    for (var i = 0; i < n; i++) {
      points.push(r * Math.cos(Math.PI * 2 * c / n) + "," + r * Math.sin(Math.PI * 2 * c / n));
      c += s;
    }
    elm.setAttribute("points", points.join(" "));
    elm.setAttribute("stroke", style.stroke);
    elm.setAttribute("stroke-width", style.strokeWidth);
    elm.setAttribute("fill", style.fill);
    return elm;
  }

  public static rect(w: number, h: number, style: Style) {
    const elm = this.svgElm("rect");
    elm.setAttribute("x", String(-w / 2));
    elm.setAttribute("y", String(-h / 2));
    elm.setAttribute("width", String(w));
    elm.setAttribute("height", String(h));
    elm.setAttribute("stroke", style.stroke);
    elm.setAttribute("stroke-width", style.strokeWidth);
    elm.setAttribute("fill", style.fill);
    return elm;
  }

  public static circle(r: number, style: Style) {
    const elm = this.svgElm("circle");
    elm.setAttribute("r", String(r));
    elm.setAttribute("stroke", style.stroke);
    elm.setAttribute("stroke-width", style.strokeWidth);
    elm.setAttribute("fill", style.fill);
    return elm;
  }

  public static addChild(p: SVGElement, c: Node[]) {
    if (Array.isArray(c)) {
      c.forEach(function (i) {
        p.appendChild(i);
      });
    }
    return p;
  }

  public static style(stroke: string, fill: string, strokeWidth: number): Style {
    return {
      stroke: stroke,
      fill: fill,
      strokeWidth: String(strokeWidth),
    }
  }

  public static svgElm(name: string) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }
}