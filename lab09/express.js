
//Talha Ayyaz
//entity name:reviews



const express=require('express')
const path=require('path')
const app=express();
const fs=require('fs');
let reviews;
const bodyparser=require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(path.join(__dirname, 'public')));



fs.readFile('public/reviews.json',(err,data)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        reviews=JSON.parse(data);
        console.log(reviews)
         app.listen(8080);

    }
})


//get methods
app.get('/reviews/:id', (req, res) => {
    const review_id = req.params.id;

    const review = reviews.find(r => r.review_id == review_id);

    if (!review) {
        return res.status(404).json({ message: 'Review not found' });
    }

    res.status(200);
    res.json(review);
});



app.get('/reviews', (req, res) => {
    res.status(200);
    res.json(reviews);
});


//post method
app.post('/reviews',(req,res)=>{
    reviews.push(req.body)
    res.write('review Added');
    res.end();
})