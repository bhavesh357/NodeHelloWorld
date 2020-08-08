const Hello= require('./../app/models/hello.model');

exports.create = (req,res) => {
    const hello= new Hello({
        name: req.body.name,
        message: "Hello "
    });

    hello.save()
    .then( data => {
        res.send(data);
    }).catch( err => {
        res.status(500),send({
            message: err.message || "Some error Occured"
        });
    })
};

exports.findAll = (req,res) => {
    Hello.find()
    .then(data => {
        res.send(data);
    }).catch( err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving hellos."
        });
    })
};

exports.findOne = (req,res) => {
    Hello.findById(req.params.noteId)
    .then( hello => {
        if(!hello){
            return res.status(404).send({
                message: "Hello not found with id " + req.params.helloId
            })
        }
        res.send(hello);
    }).catch( err => {
        if(err.kind==='ObjectId') {
            return res.status(404).send({
                message: "hello not found with id " + req.params.helloId
            }); 
        }
        return res.status(500).send({
            message: "Error retrieving hello with id " + req.params.helloId
        });
    });
};

exports.update = (req,res) => {
    if(!req.body.name) {
        return res.status(400).send({
            message: "Hello content can not be empty"
        });
    }
    Hello.findByIdAndUpdate(req.params.helloId, {
        name: req.body.name,
        message: "Hello "
    }, {new: true})
    .then(hello => {
        if(!hello) {
            return res.status(404).send({
                message: "Hello not found with id " + req.params.helloId
            });
        }
        res.send(note);
    }).catch( err => {
        if(err.kind==='ObjectId') {
            return res.status(404).send({
                message: "hello not found with id " + req.params.helloId
            }); 
        }
        return res.status(500).send({
            message: "Error retrieving hello with id " + req.params.helloId
        });
    });
};

exports.delete = (req,res) => {
    Hello.findByIdAndRemove(req.params.noteId)
    .then(hello => {
        if(!note) {
            return res.status(404).send({
                message: "Hello not found with id " + req.params.helloId
            });
        }
        res.send({message: "Hello deleted successfully!"});
    }).catch( err => {
        if(err.kind==='ObjectId') {
            return res.status(404).send({
                message: "hello not found with id " + req.params.helloId
            }); 
        }
        return res.status(500).send({
            message: "Error retrieving hello with id " + req.params.helloId
        });
    });
};