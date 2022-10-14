let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Pulsa [087824889163]
│ • Dana [087824889163]
╰────

╭─「 Donasi • Non Pulsa 」
  *•PAKE BOT MINIMAL DONASI*
│ *•MAUBRUN BOT TANPA KENDALAL?*
│ *•LINK NYA:https://bit.ly/3T1LvLe*
  *•RUN NYA GRATIS KOK*
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
