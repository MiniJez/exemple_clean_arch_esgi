import { Book } from "../entities/Book";
import { ISqlAdapter } from "../interfaceAdapters/db/ISqlAdapter";
import { IBookRepository } from "../interfaceAdapters/repositories/IBookRepository";

export class BookRepositoryImpl implements IBookRepository {
    private db: ISqlAdapter;

    constructor(db: ISqlAdapter) {
        this.db = db
        db.connect("email@test.fr", "test")
    }

    getBooks(): Book[] {
        const res = this.db.select("SELECT * FROM Books");
        const books = res.map((book) => {
            return {
                id: book.id,
                title: book.title,
                auteur: book.autor
            }
        })
        return books;
    }
}