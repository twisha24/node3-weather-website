const path = require('path')
const express = require('express')
const { title } = require('process')
const hbs= require('hbs')


// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
  
 const app = express()
const publicDirectoryPath= path.join(__dirname, '../public')
const viewsPath= path.join(__dirname,'../templates/views')
const partialsPath= path.join(__dirname,'../templates/partials')

 app.set('view engine' , 'hbs')
 app.set('views',viewsPath)
 hbs.registerPartials(partialsPath)
 app.use(express.static(publicDirectoryPath))

 app.get('' , (req , res)=>{
   res.render('index' , {
    title: 'weather ',
    name:'Twisha'

   })
  })

   app.get('/about', (req, res)=>{
    res.render('about',{
      title:'about me',
      name:'Twisha'
    })
  })
    app.get('/help', (req, res)=>{
      res.render('help',{
        helptext: 'this is a helpful text.',
        title:'help',
        name:'Twisha'
        
      })
   })
  

 

//  app.get('/help' , (req , res)=>{
//     res.send({name: 'Twisha',
//     age :20
 
//   })
//})
//   app.get('/about', (req,res)=>{
//     res.send('<h1> ABOUT<h1>')
//   })
  app.get('/weather', (req,res)=>{
    if (!req.query.address) {
      return res.send({
        error: 'you must provide an address'
      })
    }
    res.send({
      forecast:'it is snowing',
      location:'Philadelphia',
      address:req.query.address
    })
  })
  app.get('/products',(req,res)=>{
    if(!req.query.search){
       return res.send({
        error:'you must provide a search term'
      })
    }
    console.log(req.query.search)
    res.send({
     
      products:[]
    })

  })

  
  app.get('/help/*', (req,res)=>{
    res.render('404',{
      title:'404',
      name:'Twisha',
      errorMessage:' help article not found'
    })
  })


  app.get('*', (req,res)=>{
    res.render('404',{
      title:'404',
      name:'Twisha',
      errorMessage:'page not found'
    })
  })



 app.listen(3000, () => {
    console.log("server is up on the port 3000")
 })

