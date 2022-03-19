import { Component, LitElement, svg } from '@rxdi/lit-html';
import { VesicaService } from './vesica.service';

@Component({
  selector: 'rx-vesica',
  template(this: VesicaComponent) {
    return svg`
    <svg viewBox="-110 -110 220 220" xmlns="http://www.w3.org/2000/svg">
      ${this.drawCircle()}
      ${VesicaService.generate()}
    </svg>`
  },
})
export class VesicaComponent extends LitElement {
  drawCircle() {
    const strokeWidth = Math.floor(Math.random() * VesicaService.width + 1) / VesicaService.wres;
    const styles = VesicaService.style(VesicaService.color, "none", strokeWidth);
    return VesicaService.circle(100, styles);
  }
}