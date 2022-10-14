import fs from'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let whmods = fs.readFileSync('./src/waalaikumsalam.ogg') 
conn.sendFile(m.chat, whmods, '', '', m, true)
}

handler.customPrefix = /^(Assalamu'alaikum|Assalamualaikum)$/i
handler.command = new RegExp

export default handler
