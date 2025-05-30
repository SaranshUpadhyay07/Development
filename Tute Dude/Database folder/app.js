// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/data");
// const fruitsScheme = new mongoose.Schema({
//     name: String,
//     rating: Number
// });

// const item = mongoose.model("First", fruitsScheme);
// const element = new item({
//     name:"Apple",
//     rating: 10
// });

// const element2 = new item({
//     name:"Watermelon",
//     rating: 9
// });

// const element3 = new item({
//     name:"Orange",
//     rating: 7
// });

// item.insertMany([element2, element3])

// this ☝️ code is for inserting data in mongodb database 

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/data");
const fruitsScheme = new mongoose.Schema({
    name: {
      type:String,
      required: [true, "Enter name of fruit"]  
    },
    rating: {
        type:Number,
        min:1,
        max:10
    }
});

const item = mongoose.model("First", fruitsScheme);

// item.find()
//   .then(data => {
//     data.forEach(function(data){
//         console.log(data.name);
//     })
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Data validation

// const element = new item ({
//    name:"Chikoo",
//     rating: 10
// });
// element.save();


// 🟡 delete a record

// item.deleteOne({name:"Chikoo"})

// 🟡 update

// item.updateOne({name: "Apple"}, {$set:{name: "Saransh ka "}})


// item.find()
//   .then(data => {
//     data.forEach(function(data){
//         console.log(data.name);
//     })
//   })
//   .catch(err => {
//     console.error(err);
//   });

// Deleting 

// item.deleteMany({ name: "Chikoo" })
//   .then(result => {
//     console.log(`Deleted ${result.deletedCount} Chikoo(s)`);
//     return item.find();
//   })
//   .then(data => {
//     console.log("Remaining fruits:");
//     data.forEach(doc => console.log(doc.name));
//   })
//   .catch(err => console.error("Error:", err));

//   item.find()
//   .then(data => {
//     data.forEach(function(data){
//         console.log(data.name);
//     })
//   })
//   .catch(err => {
//     console.error(err);
//   });

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  fav : fruitsScheme
});

const per = mongoose.model("favPerson",personSchema);

const grapes = new item({
  name: "Cherry",
  rating:9
});
grapes.save();

const person1 = new per({
  name:"Amy",
  age:21,
  fav: grapes
});
person1.save();