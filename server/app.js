const express = require('express');
var { graphqlHTTP } = require("express-graphql")
 

const app = express();

app.use('/graphql',graphqlHTTP({

}));


app.listen(4000,()=>{
    console.log('server is running on port 4000');
})