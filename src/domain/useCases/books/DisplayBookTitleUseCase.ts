import { IBookRepository } from "../../interfaceAdapters/repositories/IBookRepository"

export const displayBookTitleUseCase = {
    execute(repository: IBookRepository) {
        const books = repository.getBooks();
        books.forEach((book) => {
            console.log(book.title)
        });
    }
}