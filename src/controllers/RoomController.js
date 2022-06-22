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

            /* Inseri sala no banco */
            if (isRoom === 0)
                await db.run(`INSERT INTO tb_room (
                id,
                pass
            ) VALUES (
                ${parseInt(roomId)},
                ${pass}
            )`);
        }

        await db.close();

        res.redirect(`/room/${roomId}`);
    },

    open(req, res) {
        const roomIdActive = req.params.roomId;
        res.render('room', { roomId: roomIdActive });
    },
};
