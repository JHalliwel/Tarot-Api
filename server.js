const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(cors())

const tarot = {
   'the high priestess':{
    'name': 'the high priestess',
    'meaning': 'This card suggests that it is time to retreat and reflect upon the situation and trust your inner instincts to guide you through it.'

   },

   'the magician':{
     'name': 'the magician',
     'meaning': 'energy, potential, and the manifestation of one\'s desires'

   },

  'the empress':{
    'name': 'the empress',
    'meaning': 'She can represent the creation of life, romance, art, or new business.'

  }, 

 'the emperor':{
   'name': 'the emperor',
    'meaning': 'You are on top of things and everything in under your control. It is your hard work, discipline and self control that have bought you this far.'

 },

 'unknown':{
    'Unknown':'unknown'
 }

 }


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})


app.get('/api', (request,response) =>{
  response.json(tarot)
})

app.get('/api/:name', (request, response) =>{
  const tarotName = request.params.name.toLowerCase()
  if(tarot[tarotName]){
    response.json(tarot[tarotName])
  } else {response.json(tarot['unknown'])}
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server Running on PORT:${PORT}`)
})