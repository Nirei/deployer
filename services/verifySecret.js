const crypto = require('crypto')
const secret = process.env.SECRET


/**
 * Verify Github's sceret
 * @param {*} payloadBody 
 * @param {*} signature 
 */
const verifySecret = (payloadBody = [], signature = '') => {
    const buffer = Buffer.from(JSON.stringify(payloadBody))
    const Hash = crypto.createHmac('sha1', secret).update(buffer)

    const payloadSignature = `sha1=${Hash.setEncoding('utf-8').digest('hex')}`
    if (payloadSignature === signature) {
        return true
    }

    return false
}

module.exports = verifySecret