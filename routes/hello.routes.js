module.exports= (app) => {
    const hello=require('../controllers/hello.controller.js');

    app.post('/hello', hello.create);

    app.get('/hello', hello.findAll);

    app.get('/hello/:helloId', hello.findOne);

    app.put('/hello/:helloId', hello.update);

    app.delete('/hello/:helloId', hello.delete);
};
