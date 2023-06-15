import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; oshada\nNICKNAME: oshada\nORG: FallZx\nTITLE:\nitem1.TEL;waid=94703698781:+94703698781\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:fuck.com\nitem2.EMAIL;type=INTERNET: pakaya@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 katunayake;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hay Kak Itu Ownerku FallZx, Dia Lagi Need Kontak Cewek`)
}
if (command == 'creator') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; oshada\nNICKNAME: oshada\nORG: FallZx\nTITLE:\nitem1.TEL;waid=94703698781:+94703698781\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://www.pakaya.my.id\nitem2.EMAIL;type=INTERNET: pacaya@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Idfhndfdhfdshonesidfha;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
m.reply(`Hai Kak Itu Nomor Developerku Yang Memprogram Aku, Mohon Jangan Ewe Aku ya mas >,<`)
}
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|owner|owner2)$/i

export default handler
