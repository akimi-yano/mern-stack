const controller = require("../controllers/controller");

module.exports=(app)=>{
    app.get('/api/v1', controller.findAll);
    app.post('/api/v1/new', controller.create);
}