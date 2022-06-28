const Database = require('./config.js');

const initDb = {
    async init() {
        const db = await Database();

        await db.exec(`CREATE TABLE tb_room (
          id INTEGER NOT NULL PRIMARY KEY,
          pass TEXT NOT NULL,
          in_stat BIT NOT NULL
        )`);

        await db.exec(`CREATE TABLE tb_ques (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          ds_ques TEXT NOT NULL,
          id_room INT NOT NULL REFERENCES tb_room(id) on DELETE CASCADE,
          in_chec BIT NOT NULL,
          in_stat BIT NOT NULL 
        )`);

        await db.close();
    },
};

initDb.init();
