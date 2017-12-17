const token = process.env.MYSLACK_TOKEN
const Slack = require('slack')
const bot = new Slack({token})

class SlackRepository {

    postMessage(channel, text) {
        return bot.chat.postMessage({
            channel: channel,
            text: text,
            as_user: true
        }).catch(console.log)
    }
}

export default new SlackRepository()