
const db = localStorage;
const NOTES_KEY = 'notes';

export function loadNotes() {
    const tmp = db.getItem(NOTES_KEY);
    if (tmp === null) {
        return [];
    }
    const notes = JSON.parse(notes);
    return notes;
}


export function saveNotes(notes) {
    db.setItem(NOTES_KEY, JSON.stringify(notes));
}