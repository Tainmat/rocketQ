const Database = require('./config.js');

const initDb = {
    async init() {
        const db = await Database();

        await db.exec(`CREATE TABLE tb_room (
          id INTEGER PRIMARY KEY,
          pass TEXT
        )`);

        await db.exec(`CREATE TABLE tb_ques (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ds_ques TEXT NOT NULL,
          in_chec INT
        )`);

        await db.close();
    },
};

initDb.init();
