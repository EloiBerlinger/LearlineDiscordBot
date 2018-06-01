const dotenv = require("dotenv")
class Environnement {

  constructor() {
    this.env = dotenv.config()
  }

  getEnv() {
    return this.env.parsed
  }

}

module.exports = new Environnement()
