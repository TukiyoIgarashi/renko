const request = require('request-promise')

class oukaRepository {

    constructor() {
        this.baseUrl = `https://9ppduxkd2f.execute-api.us-west-2.amazonaws.com/${process.env.OUKA_API_STAGE}`
    }

    getConventions() {
        return request(`${this.baseUrl}/conventions`, {json: true})
    }
}

export default new oukaRepository()
