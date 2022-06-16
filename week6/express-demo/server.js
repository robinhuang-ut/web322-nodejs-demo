const express = require('express');
const app = express();
const router = express.Router();
const path = require("path");
const data = require('./data/stats.json');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const { body, validationResult } = require('express-validator');

app.locals.title = 'Web App'
app.locals.email = 'demo@myapp.com'
app.engine('.hbs', exphbs.engine({ 
    extname: '.hbs' ,
    helpers: { 
        strong: function(options){
            return '<strong>' + options.fn(this) + '</strong>';
        },
        list: function(context, options) {
            var ret = "<ul>";
            
            for(var i = 0; i < context.length; i++) {
                ret = ret + "<li>" + options.fn(context[i]) + "</li>";
            }
            
            return ret + "</ul>";
        }
    }
}));
app.set('view engine', '.hbs');

const server = app.listen(3000, () => {
    console.log('server listening on port', server.address().port);
    // console.log('app.locals.title:',app.locals.title);
    // console.log('app.locals.email:',app.locals.email);
})

//Built-in middleware
app.use(express.static('static'));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Third-party middleware
app.use(cookieParser()); 

app.use(bodyParser.text({ type: 'text/html' })); // parse an HTML body into a string

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
// app.post('/login', urlencodedParser, function (req, res) {
//     res.send('welcome, ' + req.body.username)
//   })
  
  // POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
    // create user in req.body
    res.send(req.body);
})





//Application-level middleware
// app.use('/stats/:id', (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
//   })

//loading a series of middleware functions at a mount point
// app.use('/stats/:id', (req, res, next) => {
//     console.log('Request URL:', req.originalUrl)
//     next()
// }, (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
// })


//skip the rest of the middleware functions from a router middleware stack
app.get('/stats/:id', (req, res, next) => {
    // if the ID is 1, skip to the next route
    if (req.params.id === '1') next('route')
    // otherwise pass the control to the next middleware function in this stack
    else next()
  }, (req, res, next) => {
    // send a regular response
    res.send('regular')
  })

//GET with Routing Parameters
app.get('/stats/:id', (req, res)=> {
    const location_id = Number(req.params.id);
    const location = data.filter((location) => location.id === location_id);
    res.send(location)

})
// handler for the /stats/:id path, which sends a special response
app.get('/stats/:id', (req, res, next) => {
    res.send('special');

})

// send (JSON formatted) data
app.get("/getData", function(req,res){
    
    var someData = {
    name: "John",
    age: 23,
    occupation: "developer",
    company: "Scotiabank"
    };

    res.json(someData);
});

app.get("/viewData", function(req,res){
    
    var someData = 
    // [
    {
        name: "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank",
        visible: true,
        contract: false

    }
    // ,
    // {
    //     name: "Sarah",
    //     age: 32,
    //     occupation: "manager",
    //     company: "TD",
    //     visible: true,
    //     contract: false
    // }]
    ;
    
    res.render('viewData.hbs', {
        data: someData,
        // layout: false // do not use the default Layout (main.hbs)
    });
        
});

app.get("/viewDataHTMLString", function(req,res){

    var someData = {
        name: "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank"
    };

    var htmlString = "<!doctype html>" + 
                    "<html>" +
                        "<head>" + 
                            "<title>" + "View Data" + "</title>" +
                        "</head>" +
                        "<body>" + 
                            "<table border='1'>" + 
                                "<tr>" + 
                                    "<th>" + "Name" + "</th>" + 
                                    "<th>" + "Age" + "</th>" + 
                                    "<th>" + "Occupation" + "</th>" + 
                                    "<th>" + "Company" + "</th>" + 
                                "</tr>" + 
                                "<tr>" + 
                                    "<td>" + someData.name + "</td>" + 
                                    "<td>" + someData.age + "</td>" + 
                                    "<td>" + someData.occupation + "</td>" + 
                                    "<td>" + someData.company + "</td>" + 
                                "</tr>" + 
                            "</table>" + 
                        "</body>" + 
                    "</html>";

    res.send(htmlString);
});


//an array with a middleware sub-stack that handles GET requests
function logOriginalUrl (req, res, next) {
    console.log('Request URL:', req.originalUrl)
    next()
  }
  
function logMethod (req, res, next) {
    console.log('Request Type:', req.method)
    next()
}
  
const logStuff = [logOriginalUrl, logMethod]
app.get('/array', logStuff, (req, res, next) => {
    res.send('User Info')
})


app.use('/chain', (req, res, next) => {
    console.log('Request Type:', req.method)
    next()
})

// app.use((req, res, next) => {
//     let d = new Date();
//     console.log('Time:', d.toString())
//     // const p = new path(); //Something broke! TypeError: path is not a constructor
    
//     next();
// })

//Router-level middleware
router.use('/router', (req, res, next) => {
    console.log('Time:', Date.now())
    next()
})

router.get('/router', (req, res, next) => {
    console.log(req.params.id)
    res.send(Date.now().toString());
  })

// mount the router on the app
app.use('/', router)



app.get("/", function(req,res){
    // throw new Error('BROKEN') // Express will catch this on its own.
    res.send(
        "Welcome to WEB322.<br /><a href='/about'>Learn more about WEB322</a><br /><a href='/headers'>headers page</a>"
    );
    // Cookies that have not been signed
    // console.log('Cookies: ', req.cookies);

    // Cookies that have been signed
    // console.log('Signed Cookies: ', req.signedCookies);
  });
  
app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname, "/about.html"));

});

app.get("/form", function(req,res){
    res.sendFile(path.join(__dirname, "/form.html"));

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




//GET - download method
app.get('/download', (req, res) => {
    res.download('data/stats.json')
})

//GET - redirect method
app.get('/redirect', (req, res) => {
    res.redirect('https://web322.ca')
})


app.post('/profile', function (req, res, next) {
    // res.send('A POST request at /profile');
    res.send(req.body);
    console.log('req.body:',req.body);
    // console.log('req.cookies.name:',req.cookies.name)

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
    // res.send('A Post method')
    res.send(req.body);
    console.log('req.body:',req.body);
    console.log('req.headers:',req.headers);
    res.send(req.body)
}).put((req, res) => {
    res.send('A Put method')
})


// now add a route that we can POST the form data to
// IE: http://localhost/register-user
// add the middleware function (upload.single("photo")) for multer to process the file upload in the form
// the string you pass the single() function is the value of the
// 'name' attribute on the form for the file input element
app.post("/register-user",  
    body('username').not().isEmpty().trim().escape(),
    // email must be email format
    body('email').isEmail().normalizeEmail(outlookdotcom_remove_subaddress = true),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 }),
    (req, res) => {

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const formData = req.body;
        let dataReceived;
        dataReceived = "Your submission was received:<br/><br/>" +
        "Your form data was:<br/>" + JSON.stringify(formData) + "<br/><br/>"; 
        
        res.send(dataReceived);
    }
  );


app.use((req, res) => {
    // res.status(404).end(); //quickly end the response without any data
    res.status(404).send("Customized Error: Page Not Found");

});

//Error-handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})


