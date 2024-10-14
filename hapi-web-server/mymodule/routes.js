const { method } = require("lodash");

routes = [
    {
        method : "GET",
        path : "/",
        handler : (request, h) => "homepage"
    },
    {
        method : "*",
        path : "/",
        handler : (request, h) => "Halaman tidak dapat diakses dengan method tersebut",

    },
    {
        method : "GET",
        path : "/about",
        handler : (request, h) => "about page"
    },
    {
        method : "*",
        path : "/about",
        handler : (request, h) => "Halaman tidak dapat diakses dengan method tersebut"
    },
    {
        method : "GET",
        path : "/users/{username?}",
        handler : (request, h) =>{
            const {username = "unknown"} = request.params;
            return `halo ${username} selamat datang`
        }
    },
    {
        method : "GET",
        path : "/hello/{username?}",
        handler : (request, h) =>{
            const {username = "strangers"} = request.params;
            const {lang} = request.query;
            if (lang === "id") {
                return `halo ${username}!!! selamat datang`
            }

            return `hello ${username}!!! welcome`
        }
    },
    {
        method : "GET",
        path : "/{any*}",
        handler : (request, h) => "halaman tidak ditemukan              "
    },
]

module.exports = routes