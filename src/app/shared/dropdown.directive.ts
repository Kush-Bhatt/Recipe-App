import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector : '[appDropDown]'
})

export class DropDownDirective{
    @HostBinding('class.open') isOpen = false;
    
    constructor(private elRef: ElementRef){}

    // @HostListener('click') toggleOpen()
    // {
    //     this.isOpen = !this.isOpen;
    // }

    // If you want that a dropdown can also be closed by a click anywhere outside 
    // (which also means that a click on one dropdown closes any other one, btw.), 
    // replace the code of dropdown.directive.ts by this one (placing the listener
    // not on the dropdown, but on the document):
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
      }
}