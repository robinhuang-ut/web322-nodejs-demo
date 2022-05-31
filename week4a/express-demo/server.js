const express = require('express')
const app = express()
const path = require("path");
const data = require('./data/stats.json');

app.locals.title = 'Web App'
app.locals.email = 'demo@myapp.com'

const server = app.listen(3000, () => {
    console.log('server listening on port', server.address().port);
    console.log('app.locals.title:',app.locals.title);
    console.log('app.locals.email:',app.locals.email);
})
app.use(express.static('static'));

app.get("/", function(req,res){
    res.send("Welcome to WEB322.<br /><a href='/about'>Learn more about WEB322</a><br /><a href='/headers'>headers page</a>"
    );
  });
  
app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname, "/about.html"));

});

app.get("/headers", (req, res) => {
    const headers = req.headers;
    res.send(headers);
    console.log('Res Content-Type:',res.get('Content-Type'));
  });

app.get('/stats', (req, res) => {
    res.send(data);
    // res.json(data);
   
})

//GET with Routing Parameters
app.get('/stats/:id', (req, res)=> {
    const location_id = Number(req.params.id);
    const location = data.filter((location) => location.id === location_id);
    res.send(location)
})


//GET - download method
app.get('/download', (req, res) => {
    res.download('data/stats.json')
})

//GET - redirect method
app.get('/redirect', (req, res) => {
    res.redirect('https://web322.ca')
})


app.post('/profile', function (req, res, next) {
    res.send('A POST request at /profile')

  })


app.put('/update', (req, res) => {
    res.send('A PUT request at /update')
})


app.delete('/delete', (req, res) => {
    res.send('A DELETE request at /delete')
})

//Route chaining
app.route('/chain')
.get((req, res) => {
    res.send('A Get method')
}).post((req, res) => {
    res.send('A Post method')
}).put((req, res) => {
    res.send('A Put method')
})

app.use((req, res) => {
    // res.status(404).end(); //quickly end the response without any data
    res.status(404).send("Customized Error: Page Not Found");

});