export class Task {
    text: string;
    day: string;
    reminder: boolean;

    constructor() {
        this.text = '';
        this.day = '';
        this.reminder = false;
    }
}