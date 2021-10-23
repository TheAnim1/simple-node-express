const express= require('express')
var cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('hello Fahad from the other side')
})

const users = [
    {
        id: 1,
        name: "Farhan",
        location: "Dhaka"
    },
    {
        id: 2,
        name: "Avik",
        location: "Uttara"
    }
]
app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search) {
        const serachResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(serachResult);
    }else{
        res.send(users) 
    }
    
});

//app.Method
app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting', req.body)
    res.json(newUser)
})




app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy fazli aam!')
})
app.get('/fruits', (req, res) => {
    res.send(['Mangoes', 'Apple', 'Banana'])
})

app.get('/users/:ids', (req, res) => {
    const id = req.params.ids;
    const user = users[id];
    res.send(user)
})
app.listen(port, ()=>{
    console.log('listening to', port)
});