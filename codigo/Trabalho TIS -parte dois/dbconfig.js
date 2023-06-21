const config = {

    server : 'localhost',
    authentication: {
        type : 'default',
        options : {
            userName: 'sa',
            password: 'teste123',
        }
    },

    options:{
        encrypt: false,
        database: 'Loja'

    },
    port : 1433


}

module.exports = config;