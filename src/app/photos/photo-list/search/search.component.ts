import { Component, OnInit, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';



@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy {

    @Output() onTyping = new EventEmitter<string>();
    @Input() value = '';
    debounce: Subject<string> = new Subject<string>();

    constructor() { }

    ngOnInit(): void {
        this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.onTyping.emit(filter));
    }
    ngOnDestroy(): void {
       this.debounce.unsubscribe();
    }
}