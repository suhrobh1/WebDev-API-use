import express from 'express';
import fetch from 'node-fetch';
import 'dotenv/config';
import asyncHandler from 'express-async-handler';

const PORT = process.env.PORT
const app = express();

app.use(express.static('public'));

// Note: Don't add or change anything above this line.
/* Add your code here */

let counter = 0

function hitCounter(){
   counter += 1
   if (counter % 10 == 0){
       console.log(`Total requests for random-person: ${counter}`)
   }
    
}

 app.get('/express', async (req, res) =>{
    // console.log("indexjs log", res)
    hitCounter()
    const response =  await fetch('https://randomuser.me/api/');
    const data = await response.json();
    res.send(data)
    // console.log(data)
    
    
  
})


// Note: Don't add or change anything below this line.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});