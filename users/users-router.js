const express = require("express")
const usersModel = require("./users-model")
const bcrypt = require('bcryptjs')

const router = express.Router()

function restricted() {
  return async (req, res, next) => {
    try {
      // authorize the user here
      // const { username, password } = req.headers
      // if (!username || !password) {
      //   return res.status(401).json(authError)
      // }
      // const user = await users.model.findBy({username}).first()
      // if (!user){
      //   return res.status
      // }
    } catch (err) {
      next(err)
    }
  }
}

router.get("/", async (restricted, req, res, next) => {
  try {
    const users = await usersModel.find()

    res.json(users)
  } catch (err) {
    next(err)
  }
})

module.exports = router
