import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Note } from './interfaces/notes';
import { otherPeople } from './other-people';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'notes-list';

    noteForm: FormGroup;

    notes: Note[] = otherPeople;

    localNotes: Note[];

    searchValue: string;

    constructor(
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void {
        this.noteForm = this.formBuilder.group({
            note: ''
        });

        const lsNotes = JSON.parse(localStorage.getItem('notes'));
        if (!!lsNotes) {
            this.notes = this.notes.concat(lsNotes);
        }
    }

    /**
     * Adds the note to the note list and localstorage
     * @param event current event
     */
    addNote(event) {
        event.preventDefault();

        const newNote: Note = {
            userId: 1,
            name: 'Veronica Cavalieri',
            date: Date.now(),
            message: this.noteForm.controls.note.value,
            image: ''
        };

        this.notes.push(newNote);
        // Resets the textarea's content
        this.noteForm.controls.note.reset();

        // The user publishing the note always has an 'id' equal to 1.
        let localNotes = this.notes.filter( note => 1 === note.userId );
        localStorage.setItem( 'notes', JSON.stringify(localNotes) );
    }

    /**
     * Check if the note is to show:
     * if no search parameter is set
     * or the parameter is contained in the name of the user who wrote the note
     * @param note current note
     * @returns true/false
     */
    showNote(note: Note): boolean {
        const name = (note && note.name) ? note.name.toLowerCase() : '';
        return !this.searchValue || (!!this.searchValue && name.includes(this.searchValue.toLowerCase()))
    }

    onSearch(event) {
        this.searchValue = event.target.value;
    }

}
