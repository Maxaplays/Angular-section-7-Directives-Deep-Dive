import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {conditionallyCreateMapObjectLiteral} from '@angular/compiler/src/render3/view/util';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless (conditioner: boolean) {
    if (!conditioner) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef <any>, private vcRef: ViewContainerRef) { }

}
