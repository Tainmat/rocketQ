//IMPORTANDO BANCO DE DADOS
const Database = require('../db/config');

module.exports = {
    index(req, res) {
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password;

        console.log(
            `[roomId] = ${roomId} | [questionId] = ${questionId} | [action] = ${action} | [password] = ${password} | `,
        );
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
