import { Book } from "../../entities/Book";

export interface IBookRepository {
    getBooks(): Book[];
}