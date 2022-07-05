//Import DB
const Database = require('../db/config');

module.exports = {
    async index(req, res) {
        const db = await Database();
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        //Check the password is corretc
        const roomSearch = await db.get(
            `SELECT * FROM tb_room WHERE id = ${roomId}`,
        );
        if (roomSearch.pass === password) {
            if (action == 'delete') {
                await db.run(
                    `UPDATE TB_QUES SET in_stat = 0 WHERE id_room = ${roomId} and id = ${questionId}`,
                );
            } else if (action == 'check') {
                await db.run(
                    `UPDATE TB_QUES SET in_chec = 1 WHERE id_room = ${roomId} and id = ${questionId}`,
                );
            }
        }

        res.redirect(`/room/${roomId}`);
    },

    async create(req, res) {
        const db = await Database();
        const question = req.body.question;
        const roomId = req.params.room;

        await db.run(`INSERT INTO tb_ques(
            ds_ques,
            id_room,
            in_chec,
            in_stat
        ) VALUES (
            "${question}",
            ${roomId},
            0,
            1
        )
        `);

        res.redirect(`/room/${roomId}`);
    },
};
