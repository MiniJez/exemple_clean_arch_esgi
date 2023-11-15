import { MysqlAdapter } from "../infra/db/MysqlAdapter";
import { BookRepositoryImpl } from "../domain/repositories/BookRepositoryImpl";
import { displayBookTitleUseCase } from "../domain/useCases/books/DisplayBookTitleUseCase";

const bookRepoMysql = new BookRepositoryImpl(new MysqlAdapter())
//const bookRepoElasticSearch = new BookRepositoryImpl(new ElasticSearchAdapter())

displayBookTitleUseCase.execute(bookRepoMysql);
//autreUseCase.execute(bookRepoElasticSearch)