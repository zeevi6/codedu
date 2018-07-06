const express = require('express')
const router = express.Router()
const user = require('./user/index')
const userinfo = require('./userinfo/index')
const join = require('./join/index')
const logout = require('./logout/index')
const study = require('./study/index')
const quiz = require('./quiz/index')
const main = require('./main/index')
const userstats = require('./userstats/index')
const result = require('./result/index')

router.use('/user', user)
router.use('/userinfo', userinfo)
router.use('/userstats', userstats)
router.use('/join', join)
router.use('/logout', logout)
router.use('/study', study)
router.use('/quiz', quiz)
router.use('/main', main)
router.use('/result', result)

module.exports = router