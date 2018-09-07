import { Injectable} from "@angular/core";
import {Book} from "./book";
import {BOOKS} from "./mock-books";

@Injectable()
export class BooksService {
    private _selectedId = -1;

    getBooks(): Book[] {
        return BOOKS;
    }

    getBook(id: number): Book {
        return BOOKS.filter(book => book.id === id)[0];
    }

    setSelectedId(id: number) {
        if (id < BOOKS.length) {
            this._selectedId = id;
        }
    }

    getSelected(): Book {
        return this._selectedId < 0 ? null : this.getBook(this._selectedId);
    }
}