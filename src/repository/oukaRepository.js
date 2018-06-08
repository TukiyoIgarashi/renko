const request = require('request-promise')

class oukaRepository {

    constructor() {
        this.baseUrl = process.env.OUKA_API_URL
    }

    getConventions() {
        return request(`${this.baseUrl}/conventions`, {json: true})
    }
}

export default new oukaRepository()
