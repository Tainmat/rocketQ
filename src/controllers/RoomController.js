const Database = require('../db/config.js');

module.exports = {
    async create(req, res) {
        const db = await Database();
        const pass = req.body.password;
        let roomId = '';
        let isRoom = 1;

        while (isRoom > 0) {
            /* Gera número da sala */
            for (var i = 0; i < 6; i++) {
                roomId += Math.floor(Math.random() * 10).toString();
            }

            /* Verifica número da sala */
            let RoomExistId = await db.all(
                `SELECT COUNT(id) FROM tb_room WHERE id = ${roomId}`,
            );

            isRoom = RoomExistId[0]['COUNT(id)'];
        }

        /* Inseri sala no banco */
        await db.run(`INSERT INTO tb_room (
                id,
                pass,
                in_stat
            ) VALUES (
                ${parseInt(roomId)},
                ${pass},
                1
            )`);

        await db.close();

        res.redirect(`/room/${roomId}`);
    },

    async open(req, res) {
        const db = await Database();
        const roomIdActive = req.params.roomId;
        const questions = await db.all(
            `SELECT * FROM tb_ques WHERE id_room = ${roomIdActive} and in_stat = 1 ORDER BY in_chec ASC, id DESC `,
        );
        let isNoQuestions;

        if (questions.length == 0) {
            isNoQuestions = true;
        }

        res.render('room', {
            roomId: roomIdActive,
            questions: questions,
            isNoQuestions: isNoQuestions,
        });
    },

    async enter(req, res) {
        const db = await Database();
        const roomId = req.body.roomId;

        res.redirect(`/room/${roomId}`);
    },
};
