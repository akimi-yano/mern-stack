const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jokesDB',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Established a conniection to the database'))
.catch(err=> console.log('Something went wrong when connectiong to the database', err));


