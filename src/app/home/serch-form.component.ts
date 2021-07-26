import { ElementRef } from '@angular/core';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { View } from '@nativescript/core';

@Component({
    selector: 'SearhForm',
    templateUrl: './search-form.component.html'
  })
export class SearchFormComponent {
    @ViewChild("flayout") layout: ElementRef;
    textFieldValue: string = "";
    @Output() search: EventEmitter<string> = new EventEmitter<string>(); 

    onButtonTap(): void {
        console.log(this.textFieldValue)
        if (this.textFieldValue.length > 2) {
            this.search.emit(this.textFieldValue)
        }
        const layout = <View>this.layout.nativeElement
        layout.animate({
            opacity: 0.5,
            rotate: 360,
            duration: 1000,
            delay: 150
        })
    }
}
