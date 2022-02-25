const path = require("path")
const express = require("express")
const request = require("postman-request")
const app = express()
const publicDirectoryPath = path.join(__dirname,"../public")
const port = process.env.PORT || 3320

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'../views'))
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{res.status(200).render('index')})
app.get('/about',(req,res)=>{res.status(200).render('about')})
app.get('/help',(req,res)=>{res.status(200).render('help')})


app.get('/',(req,res)=>{
    movie = req.query.t
    year = req.query.y
    const url = "https://www.omdbapi.com/?t=" + movie + "&apikey=b0b2852e&y=" + year
    request({url:url, json:true}, (error, response)=>{
        if(error){
            res.send("Unable to connect to movie database server.")
        }
        else if(response.body.Error){
            res.send("Unable to find movie.")
        }
        else{
               res.send({
                   Title: response.body.Title,
                   Year: response.body.Year,
                   Ratings: response.body.Ratings[1],
                   Awards: response.body.Awards
                })
            }
                
            })

        })


app.listen(port,()=>
console.log("Server is up on port port " + port))