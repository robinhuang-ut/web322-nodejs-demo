const Sequelize = require('sequelize');

// set up sequelize to point to our postgres database
var sequelize = new Sequelize('d6ujnl3iar8u7g'
    , 'ifjsbifzliwugs', 'c7acdf94caf20c68e61d7c807aa959afabd83c36c7c13c9dc5dc1faf3995a902', {
    host: 'ec2-44-206-89-185.compute-1.amazonaws.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});


// Define our "User" and "Task" models

// var User = sequelize.define('User', {
//     fullName: Sequelize.STRING, // the user's full name (ie: "Jason Bourne")
//     title: Sequelize.STRING // the user's title within the project (ie, developer)
// });

// var Task = sequelize.define('Task', {
//     title: Sequelize.STRING, // title of the task
//     description: Sequelize.TEXT // main text for the task
// });

// Associate Tasks with user & automatically create a foreign key
// relationship on "Task" via an automatically generated "UserId" field

// User.hasMany(Task);

// sequelize.sync().then(function () {
    
//     // Create user "Jason Bourne"
//     User.create({
//         fullName: "Jason Bourne",
//         title: "developer"
//     }).then(function (user) {

//         console.log("user created");
        
//             // Create "Task 1" for the new user
//         Task.create({
//             title: "Task 1",
//             description: "Task 1 description",
//             UserId: user.id // set the correct Userid foreign key
//         }).then(function(){ console.log("Task 1 created")});

//         // Create "Task 2" for the new user
//         Task.create({
//             title: "Task 2",
//             description: "Task 2 description",
//             UserId: user.id // set the correct Userid foreign key
//         }).then(function(){ console.log("Task 2 created")});
//     });

// });

// Define a "Name" model

var Name = sequelize.define('Name', {
    fName: Sequelize.STRING,  // first Name
    lName: Sequelize.STRING, // Last Name
});

// sequelize.sync().then(function () {

//     Name.create({
//         fName: "Kyler",
//         lName: "Odin"
//     }).then(function(){ console.log("Kyler Odin created")});

//     Name.create({
//         fName: "Grier",
//         lName: "Garrick"
//     }).then(function(){ console.log("Grier Garrick created")});

//     Name.create({
//         fName: "Kolby",
//         lName: "Greyson"
//     }).then(function(){ console.log("Kolby Greyson created")});

// });

// sequelize.sync().then(function () {

//     // return all first names only
//     Name.findAll({ 
//         attributes: ['fName']
//     }).then(function(data){        
//         console.log("All first names");
//         for(var i =0; i < data.length; i++){
//             console.log(data[i].fName);
//         }
//     });

//     // return all first names where id == 2
//     Name.findAll({ 
//         attributes: ['fName'],
//         where: {
//             id: 2
//         }
//     }).then(function(data){
//         console.log("All first names where id == 2");
//         for(var i =0; i < data.length; i++){
//             console.log(data[i].fName);
//         }
//     });

// });

// sequelize.sync().then(function () {
//     // update User 2's last name to "James"
//     // NOTE: this also updates the "updatedAt field"
//     Name.update({
//         lName: "Flug"
//     }, {
//         where: { id: 2 } // only update user with id == 2
//     }).then(function () { console.log("successfully updated user 2");});

// });

sequelize.sync().then(function () {

    // remove User 3 from the database
    Name.destroy({
        where: { id: 1 } // only remove user with id == 1
    }).then(function () { console.log("successfully removed user 1");});

});