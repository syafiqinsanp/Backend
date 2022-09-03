const { Router } = require('express')
const m$user = require('../modules/user.modules')
const response = require('../helpers/response')

const UserController = Router()

/**
 * List User
 */
UserController.get('/', async (req, res, next) => {
    const list = await m$user.listUser()

    response.sendResponse(res, list)
})

/**
 * Detail User
 */
UserController.get('/detail', async (req, res, next) => {
    // req.query
    // http://localhost:5001/api/user/detail?id=1
    const detail = await m$user.detailUser(req.query.id)

    response.sendResponse(res, detail)
})

/**
 * Add User
 * @param {string} nama
 * @param {string} alamat
 * @param {string} artikel
 * @param {string} komentar
 */
UserController.post('/', async (req, res, next) => {
    // req.body req.params req.query
    const add = await m$user.addUser(req.body)

    response.sendResponse(res, add)
})

/**
 * Edit User
 * @param {number} id
 * @param {string} nama
 * @param {string} alamat
 * @param {string} artikel
 * @param {string} komentar
 */
UserController.put('/', async (req, res, next) => {
    const edit = await m$user.editUser(req.body)

    response.sendResponse(res, edit)
})

/**
 * Delete User
 * @param {number} id
 */
UserController.delete('/:id', async (req, res, next) => {
    const del = await m$user.deleteUser(req.params.id)

    response.sendResponse(res, del)
})

module.exports = UserController