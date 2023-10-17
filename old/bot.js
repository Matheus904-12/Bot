const discord = require("discord.js")
const cliente = new discord.Cliente()

cliente.on("ready", () => {
    console.log("logado")
})

cliente.on('message', (message) => {
    if (message.content === "oi"){
        message.reaply("Oi Math")
    }
})

cliente,login('MTE2MzgzMTc0Nzg5MzUzNDc2MA.GsKcFB.kdDnd9FolEQYn1G0fudeqkCV6DgbFW6VU0RcI0')