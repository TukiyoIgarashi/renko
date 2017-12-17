import slack from "../repository/slackRepository"
import api from "../repository/oukaRepository"

class furuyoniModel {

    watchConventions() {
        return api.getConventions()
                .then((body) => {
                    if (body.length === 0) {
                        this.notify(`empty conventions!!`)
                    }
                })
                .catch((err) => {
                    this.notify(`get conventions error!!`)
                })
    }

    notify(text) {
        return slack.postMessage("#notification", text).then(console.log)
    }
}

export default new furuyoniModel()