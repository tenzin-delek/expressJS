const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('<h1>THIS IS MY HOME PAGE</h1>')
});
app.get('/About/',(req,res)=>{
    res.send('<h1>THIS IS ABOUT PAGE</h1>')
});
app.get('/Downloads/',(req,res)=>{
    res.send('<h1>THIS IS DOWNLOAD PAGE</h1>')
});
app.get('/Community/',(req,res)=>{
    res.send('<h1>THIS IS COMMUNITY PAGE</h1>')
});
app.get('/Success Stories/',(req,res)=>{
    res.send('<h1>THIS IS SUCCESS STORIES PAGE</h1>')
});
app.get('/News/',(req,res)=>{
    res.send('<h1>THIS IS NEWS PAGE</h1>')
});
app.get('/Events/',(req,res)=>{
    res.send('<h1>THIS IS EVENT PAGE</h1>')
});

app.listen(3000,()=>{
    console.log('Server up and running on 3000....\n')
});
