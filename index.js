const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

(async() => {
    mongoose.connect('mongodb://root:root@localhost:27017/mongo_delete?authSource=admin', { useNewUrlParser: true, useUnifiedTopology: true });

    const PersonSchema = new mongoose.Schema({
        name: String,
        age: Number
    });
    
    PersonSchema.plugin(mongooseDelete);
    const Person = mongoose.model('people', PersonSchema);

    const leonan = new Person({ name: 'Leonan Luppi', age: 24 });
    const leonan_result = await leonan.save();
    console.log(leonan_result);
    await leonan.delete();
    await leonan.restore();
    console.log(await Person.find({}));
})();


