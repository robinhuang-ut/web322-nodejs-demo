// require mongoose and setup the Schema
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// connect to Your MongoDB Atlas Database
mongoose.connect(
    "mongodb+srv://user1:oldsfdKYJCHOOQCJ@cluster0.lwbxs2c.mongodb.net/?retryWrites=true&w=majority"
    );

// define the company schema
var companySchema = new Schema({
  "companyName":  {
    "type": String,
    "unique": true
  },
  "address": String,
  "phone": String,
  "employeeCount": {
    "type": Number,
    "default": 0
  },
  "country": String
});
// register the Company model using the companySchema
// use the web322_companies collection in the db to store documents
var Company = mongoose.model("web322_companies", companySchema);

// create a new company
var kwikEMart = new Company({
  companyName: "The Kwik-E-Mart",
  address: "Washington",
  phone: "123-456-7890",
  employeeCount: 5,
  country: "U.S"
});

// save the company
kwikEMart.save().then(()=>{
  console.log("The Kwik-E-Mart company was saved to the web322_companies collection");
 
  // Company.findOne({ companyName: "The Kwik-E-Mart" }, "address phone")
  // .exec()
  // .then((company) => {
  //     if(!company) {
  //         console.log("No company could be found");
  //     } else {
  //         console.log(company);
  //     }

      
  //     // exit the program after saving and finding
  //     process.exit();
  // })
  // .catch((err) => {
  //     console.log(`There was an error: ${err}`);
  // });
}).catch(err=>{
  console.log(`There was an error: ${err}`);
  console.log("There was an error saving the Kwik-E-Mart company");
});