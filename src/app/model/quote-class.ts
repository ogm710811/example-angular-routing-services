import { quote } from './quote-interface';

export class Quote implements quote {
    id: number;
    text: string;
    author: string;

    constructor( idQuote : number, textQuote : string, authorQuote : string ) {
        this.id = idQuote;
        this.text = textQuote;
        this.author = authorQuote;
    }
}