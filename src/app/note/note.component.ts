import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectorRef, Component, ElementRef,
    Input, OnInit, ViewChild } from '@angular/core';
import { Note } from '../interfaces/notes';

@Component({
    selector: 'note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, AfterViewInit {

    showTrimmed: boolean = false;

    @Input() data: Note;
    @ViewChild('noteBoxRef', { static: false }) noteBoxRef: ElementRef;

    constructor(
        private cdref: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        // Is the message longer than 3 lines?
        // (Each line of the message is 22px high)
        if (!!this.noteBoxRef && this.noteBoxRef.nativeElement.clientHeight > 66) {
            this.showTrimmed = true;
            this.cdref.detectChanges();
        }
    }

    expandNote(event) {
        event.preventDefault();

        this.showTrimmed = false;
    }
}
