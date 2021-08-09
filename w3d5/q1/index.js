const app= require('express')
const path = require('path');

// const app=express();
// const itemList=[];
// app.use(express.urlencoded({ extended: false }));
// app.get('/', (req, res, nex) => {
// res.send(
// `<ul>
// ${ itemList.forEach(item=>{
// `<li>${item}</li>`}
// }})
// </ul>`
// )
// })

app.get('/',(req,res)=>{
    res.send(
        `<form action="/" method="post">
        <input type="text" name="singleinput"/>
        <button type="submit">submit</button>
        </form>`
    )
})


app.post('/',(req,res,next)=>{

let item= req.body.singleinput;
itemList.push(item);
res.redirect('/');

})