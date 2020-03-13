const controller = require('../controllers/controller');

module.exports = (app)=>{
    app.get('/api/v1', controller.findAll);
    app.get('/api/v1/show/:id', controller.findOne);
    app.put('/api/v1/edit/:id', controller.updateOne);
    app.delete('/api/v1/delete/:id', controller.deleteOne);
    app.post('/api/v1/new',controller.create);
}