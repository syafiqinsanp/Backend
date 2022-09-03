const UserController = require("./controllers/UserControllers");

// Define url API in Here
const _routes = [
    ['/user', UserController]
]

// http://localhost:5001/api/user

const routes = (app) => {
    _routes.forEach((route) => {
        const [ url, controller ] = route
        app.use(`/api${url}`, controller)
    })
}

module.exports = routes