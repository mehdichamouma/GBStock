import {
  initDatabase,
  getUser,
  getAllUsers
} from "../index.js"

import resetDb from "../../../resetDb"
import {expect} from "chai"
import config from "../../../config"

describe("DB", function() {
  this.timeout(0)
  before(async () => {
    await initDatabase({
      host     : config.DB.HOST,
      user     : config.DB.USER,
      password : config.DB.PASSWORD,
      multipleStatements: true
    }, config.DB.NAME)
    await resetDb()
  })

  describe("getUser", () => {
    it("should return an user", async () => {
      let user = await getUser("1")
      expect(user.USERNUMBER).to.eql(1)
      expect(user.EMAIL).to.eql("abc@john.fr")
    })
  })


  describe("getAllUsers", () => {
    it("should return all the users", async () => {
      let users = await getAllUsers(1)
      expect(users).to.have.a.lengthOf(2)
    })
  })


})
