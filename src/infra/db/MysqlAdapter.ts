import { ISqlAdapter } from "../../domain/interfaceAdapters/db/ISqlAdapter";
import mysql from "mysql";

export class MysqlAdapter implements ISqlAdapter {
	private connection;

	connect(email: string, mdp: string) {
		this.connection = mysql.createConnection({
			host: "localhost",
			user: "email",
			password: "mdp",
			database: "my_db",
		});

		this.connection.connect();
	}

	select(value: string): any {
		this.connection.query(
			"SELECT 1 + 1 AS solution",
			function (error, results, fields) {
				if (error) throw error;
				return results
			}
		);
	}
}
