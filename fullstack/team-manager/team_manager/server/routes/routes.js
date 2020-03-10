const controller = require("../controllers/controller");
module.exports=(app)=>{
    app.get('/api/v1', controller.findAll);
    app.get('/api/v1/show/:id', controller.findOne);
    app.post('/api/v1/new', controller.create);
    app.put('/api/v1/update/:id', controller.updateOne);
    app.delete('/api/v1/delete/:id', controller.deleteOne);
}