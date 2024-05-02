import pg from 'pg';
import * as dotenv from 'dotenv'
dotenv.config()
class Example {
    static connection = null;
    constructor() {

        this.connection = new pg.Pool({
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            port: process.env.DATABASE_PORT,
        })

        this.createTable();
    }

    async create(name, price) {
        try {
            const { rows } = await this.connection.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING id,name,price', [name, price]);
            return rows.shift();
        } catch (error) {
            console.log(error);
        }
    }

    async find() {
        try {
            const { rows } = await this.connection.query('SELECT * FROM products', []);
            if (rows.length < 1) {
                return [];
            }
            return rows;
        } catch (error) {
            console.log(error);
        }
    }

    async findOne(id) {
        try {
            const { rows } = await this.connection.query(`SELECT * FROM products WHERE id=$1`, [id]);
            if (rows.length < 1) {
                return { message: `Registro ${id} não encontrado` };
            }
            return rows.shift();
        } catch (error) {
            console.log(error);
        }
    }

    async update(name, price, id) {
        try {
            const { rows } = await this.connection.query(`UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING id,name,price`, [name, price, id]);
            return rows.shift();
        } catch (error) {
            console.log(error);
        }
    }

    async remove(id) {
        try {
            const { rowCount } = await this.connection.query(`DELETE FROM products WHERE id = $1`, [id]);
            if (rowCount < 1) {
                return { message: `Não foi possivel deletar o registro ${id}` }

            }
            return { message: `Registro deletado com sucesso` };
        } catch (error) {
            console.log(error);
        }

    }

    async createTable() {
        try {
            await this.connection.query(`CREATE TABLE IF NOT EXISTS products (
                id serial NOT NULL PRIMARY KEY,
                name TEXT NOT NULL,
                price REAL
              )`);
        } catch (error) {
            console.log(error);
        }
    }


}

export { Example }