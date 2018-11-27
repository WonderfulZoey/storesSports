import { Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCounter]'
})
export class CounterDirective {

  constructor(private container:ViewContainerRef,
              private template:TemplateRef<Object>) { }

  @Input("counterOf") counter:number;
  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.container.clear();
    for(let i = 0; i < this.counter; i++){
       this.container.createEmbeddedView(this.template,new CounterDirectiveContext(i+1));
    }
  }

}
//结构型指令
class CounterDirectiveContext {
  constructor(public $implicit:any){

  }
}
