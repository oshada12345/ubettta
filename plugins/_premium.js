let handler = m => m

handler.before = async function (m) {
    let user = db.data.users[m.sender]                              
    if (new Date() - user.premiumTime > 999999) {
            user.premiumTime = 99999999999
            user.premium = true
        }
    }

export default handler
