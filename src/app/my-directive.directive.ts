import {Directive, ElementRef, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {
  private hasViews = false;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) {}

    @Input() set appMyDirective(condition: boolean) {
      if (condition && !this.hasViews) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasViews = true;
      } else if (!condition && this.hasViews) {
        this.viewContainer.clear();
        this.hasViews = false;
      }
    }

}
