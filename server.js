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

 'the hierophant':{
   'name':'the hierophant',
   'meaning': 'It can represent marriage in an arranged setup. It can also mean a teacher or counsellor who will help in learning / education of the querent.'
 },

'the lovers': {
  'name': 'the lovers',
  'meaning': 'represent relationships and choices. Its appearance in a spread indicates some decision about an existing relationship, a temptation of the heart, or a choice of potential partners. Often an aspect of the querent\'s life will have to be sacrificed; a bachelor(ette)\'s lifestyle may be sacrificed and a relationship gained (or vice versa), or one potential partner may be chosen while another is turned down. Whatever the choice, it should not be made lightly, as the ramifications will be lasting.'
},

'the chariot': {
    'name': 'the chariot',
    'meaning': 'represent travel, especially driving or taking a road trip.'
  },

  'fortitude': {
    'name': 'fortitude',
    'meaning': ' predicts the triumphant conclusion to a major life problem, situation or temptation through strength of character. It is a very happy card if you are fighting illness or recovering from injury.'
  },

  'the hermit': {
    'name': 'the hermit',
    'meaning': 'you are in a phase of introspection where you are drawing your attention inwards and looking for answers within. You are in need of a period of inner reflection, away from the current demands of your position.'
  },

  'wheel of fortune': {
    'name': 'wheel of fortune',
    'meaning': 'change in the querent\'s life, such change being in station, position or fortune: such as the rich becoming poor, or the poor becoming rich.'
  },

  'justice': {
    'name': 'justice',
    'meaning': 'fairest decision will be made. Justice is the sword that cuts through a situation, and will not be swayed by outer beauty when deciding what is fair and just.'
  },

  'the hanged man': {
    'name': 'the hanged man',
    'meaning': 'suggests ultimate surrender, sacrifice, or being suspended in time.'
  },

  'death': {
    'name': 'death',
    'meaning': 'Unlikely that this card actually represents a physical death. Typically it implies an end, possibly of a relationship or interest, and therefore implies an increased sense of self-awareness.'
  },

  'temperance ': {
    'name': 'temperance',
    'meaning':'learn to bring about balance, patience and moderation in your life. You should take the middle road, avoiding extremes and maintain a sense of calm.'
  },

  'the devil': {
    'name': 'the devil',
    'meaning': 'It represents being seduced by the material world and physical pleasures. Also living in fear, domination and bondage, being caged by an overabundance of luxury, discretion should be used in personal and business matters'
  },

  'the tower': {
    'name': 'the tower',
    'meaning': 'danger, crisis, destruction, and liberation. It is associated with sudden unforseen change.'
  },

  'the star': {
    'name': 'the star',
    'meaning': 'find yourself feeling inspired. It brings renewed hope and faith and a sense that you are truly blessed by the universe at this time.'
  },

  'the moon': {
    'name': 'the moon',
    'meaning': 'llusion and deception, and therefore often suggests a time when something is not as it appears to be. Perhaps a misunderstanding on your part, or a truth you cannot admit to yourself'
  },

  'the sun': {
    'name': 'the sun',
    'meaning': 'good fortune, happiness, joy and harmony. It represents the universe coming together and agreeing with your path and aiding forward movement into something greater.'
  },

  'judgment': {
    'name': 'judgment',
    'meaning': 'time of resurrection and awakening, a time when a period of our life comes to an absolute end making way for dynamic new beginnings.'
  },

  'the fool': {
    'name':'the fool',
    'meaning': 'new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner\'s luck, improvisation and believing in the universe.',
  },

  'the world': {
    'name': 'the world',
    'meaning': 'ending to a cycle of life, a pause in life before the next big cycle beginning with the fool. It is an indicator of a major and inexorable change, of tectonic breadth.',
  },

  'page of wands': {
    'name': 'page of wands',
    'meaning': 'take time to connect with your inner self and use your originality and talents to carve a life path that is unique to you and you alone.',
  },

  'knight of wands': {
    'name': 'knight of wands',
    'meaning': 'indicates that things are going better than you expected and any ventures you have taken on are likely to be more successful than you hoped. ',
  },

  'queen of wands': {
    'name': 'queen of wands',
    'meaning': 'taking charge of things and organising your life.',
  },

  'king of wands': {
    'name': 'king of wands',
    'meaning': 'indicates that you will have the energy, experience and enthusiasm to accomplish what you set out to achieve at this time. You are taking control of your life. You will motivate those around you, lead the way forward and set a good example for those who look up to you.',
  },

  'ace of wands': {
    'name': 'ace of wands',
    'meaning': 'good news and new beginnings.',
  },

  'two of wands': {
    'name': 'two of wands',
    'meaning': ' having two paths, you have decisions to make or a choice between two options but remember the grass isn’t always greener on the other side! This card can signify overseas travel, sudden departures, emigration and deciding if you will stay or go. It can also indicate a lack of contentment with your life, restlessness, withdrawal and detachment. It can represent waiting, anticipation and wanderlust. It is also a card of cooperation, business partnerships or overseas expansion.',
  },

  'three of wands': {
    'name': 'three of wands',
    'meaning': 'represents freedom, adventure, travel, moving abroad and foreign lands. It can indicate hard work paying off, success and being happy with your choices or the outcome of your situation.',
  },

  'four of wands': {
    'name': 'four of wands',
    'meaning': 'success, prosperity, stability, security and laying down roots. It tells you that you will be proud of your achievements and that your self-esteem will be high when it appears. It also represents team work, community spirit and communities or families coming together.',
  },

  'five of wands': {
    'name': 'five of wands',
    'meaning': 'clashing personalities or egos, pent up energy and aggression, irritation and frustration. You can expect a lack of cooperation, lack of control, pettiness, strikes, chaos or unruliness when it appears in your Tarot reading. It can also represent being rough, defensive or territorial and can signify competition and sports',
  },

  'six of wands': {
    'name': 'six of wands',
    'meaning': 'success, victory, winning, triumph, achievement and having the advantage. It also signifies praise, acclaim, awards, recognition, applause and goodwill',
  },

  'seven of wands': {
    'name': 'seven of wands',
    'meaning': 'someone who is protective, defensive, assertive, forceful, relentless, determined and territorial. It can suggest that you are under attack, being harassed, blamed or scapegoated but you are resisting. Life may be challenging, busy and hectic with this card in your Tarot spread so you will need stamina to endure.',
  },

  'eight of wands': {
    'name': 'eight of wands',
    'meaning': 'represents hastiness, speed, rushing, progress, movement and action, sudden action, excitement, exciting times, travel, freedom, holidays and holiday romances. Whatever you turn your hand to at the moment will take off at great speed and gain momentum. You will be feeling positive and energetic. You will be thinking on your feet, seeing results and finding solutions. Your hard work will be paying off and you will be ahead of the game. Also represents infatuation, obsession and getting carried away or being swept off your feet.',
  },

  'nine of wands': {
    'name': 'nine of wands',
    'meaning': 'you are half way through a battle. Recent events have left you drained of all energy and feeling like you can’t go on, but you are so close to getting what you want! You just need to gather the last of your strength and push forward and you will be successful. It represents ongoing battles, being battle weary, drained of energy and fatigued. It also signifies courage, persistence, strength of will, having a backbone, holding out and perseverance',
  },

  'ten of wands': {
    'name': 'ten of wands',
    'meaning': 'a situation that started off as a good idea but has now become a burden. It signifies problems, responsibilities, being overburdened, overloaded and stressed. It indicates that you have a huge weight on your shoulders and you feeling obligated, saddled and restricted.',
  },

  'page of cups': {
    'name': 'page of cups',
    'meaning': 'happy news, important information, invitations to social events, gossip or the potential for romantic proposals. It can also represent your inner child so don’t take things too seriously when this card appears. It may be a sign that you need to connect to your inner child by embracing the fun and frivolous side of life. It can also represent beauty, fashion, glamour or style so you may be trying out a new personal style or having fun',

  },

  'knight of cups': {
    'name': 'knight of cups',
    'meaning': 'represent proposals, offers, good news and invitations. The news or offers he brings usually carry with them a lot of excitement. They are the kinds of offers or news we hope to receive. Knights as action takers and as such,',
  },

  'queen of cups': {
    'name': 'queen of cups',
    'meaning': 'generally signify a woman or women in your life who will be supportive and caring towards you.',

  }, 
  
  'king of cups': {
    'name': 'king of cups',
    'meaning': 'indicate that you will be finding the balance between your mind and your heart. You will learn to control your emotions and find the wisdom to accept that which you cannot change. You should be gaining a deeper level of emotional maturity when this card appears. You will become calmer, more sympathetic to others and tolerant.',

  },

  'ace of cups': {
    'name': 'ace of cups',
    'meaning': 'new beginnings, usually in terms of love, empathy, compassion and/or happiness',
  },

  'two of cups': {
    'name': 'two of cups',
    'meaning': 'relates to unity and love in romantic relationships it can signify harmony and mutual respect and appreciation in friendships and partnerships.',
  },

  'three of cups': {
    'name': 'three of cups',
    'meaning': 'it can signify someone from your past coming back in to your life. It can also signify parties, festivals, weddings, engagement parties, baby showers and other similar celebrations.',

  },

  'four of cups': {
    'name': 'four of cups',
    'meaning': ' can represent missed opportunities, remorse or regret. It can also signify becoming self-absorbed due to depression, negativity or apathy.',
  },

  'five of cups': {
    'name': 'five of cups',
    'meaning': 'present sadness, loss, loneliness and despair. When this card appears it indicates that you are focusing on the negative. This may be the result of some sort of trauma or unwelcome change you have suffered. As such, this card can signify heartbreak, divorce or separation.',
  },

  'six of cups': {
    'name': 'six of cups ',
    'meaning': 'represent nostalgia, childhood memories and focusing on the past.',
  },

  'seven of cups': {
    'name': 'seven of cups ',
    'meaning': 'represents having lots of options to choose from or multiple possibilities open to you. It can be an indication that you have so many choices or so many things going on at once that you may be overwhelmed or unable to focus properly. You need to limit the amount of things you are taking on to a manageable amount. There is no point in agreeing to do things if you can’t give them the time and attention they deserve. Try to be realistic about what you can commit to.',
  },

  'eight of cups': {
    'name': 'eight of cups',
    'meaning': 'represents abandonment. It can signify walking away from people or situations in your life or abandoning your plans. It can indicate disappointment, escapism and turning your back on or leaving bad situation. ',
  },

  'nine of cups': {
    'name': 'nine of cups',
    'meaning': 'indicates your wishes will be coming true or your dreams will become a reality. If you have experienced hardship, sorrow or pain recently, this card tells you that the bad times are behind you now and a time of happiness, joyfulness and fulfilment is coming.',
  },

  'ten of cups': {
    'name': 'ten of cups',
    'meaning': 'represents true happiness and emotional and spiritual fulfilment. It tells you that you will be living your happy ever after and can look forward to domestic bliss.',
  },

  'page of pentacles': {
    'name': 'page of pentacles ',
    'meaning': 'bearer of good news in earthly matters such as money, business, education, career, property or health. It represents making a solid start or laying the foundation for future success.',
  },

  'knight of pentacles': {
    'name': 'knight of pentacles',
    'meaning': 'represents common sense, responsibility, practicality, working hard for what you want and finishing what you start.',
  },

  'queen of pentacles': {
    'name': 'queen of pentacles',
    'meaning': 'represents high social status, prosperity, wealth, luxury, success and financial independence. This Minor Arcana card tells you to approach issues in a sensible, practical, no-nonsense manner and you will be successful. She tells you to set goals and work towards them steadily.',
  },

  'king of pentacles': {
    'name': 'king of pentacles',
    'meaning': 'represents trying to better oneself, hard work paying off, reaching goals, seeing things through to the end and being proud of your achievements. ',
  },

  'ace of pentacles': {
    'name': 'ace of pentacles',
    'meaning': 'represents new beginnings and prosperity. You should be feeling very optimistic when this card appears as it brings with it feelings of positivity, inspiration and new exciting energy.',
  },

  'two of pentacles ': {
    'name': 'two of pentacles',
    'meaning': 'indicate that you are trying to find or maintain the balance between various areas of your life.',
  },

  'three of pentacles': {
    'name': 'three of pentacles',
    'meaning': 't represents learning, studying and apprenticeship. It also signifies hard work, determination, dedication and commitment so whatever you are doing at the moment, you are likely to be giving it 100%. It also signifies building on success or foundations. You have worked hard to overcome your challenges and the effort you have put in should be paying off. ',

  },

  'four of pentacles': {
    'name': 'four of pentacles',
    'meaning': 'indicate that you are holding on to people, possessions, situations or past issues. It can be an indication that there are deep seated issues affecting you that you need to process and let go of.',
  },

  'five of pentacles': {
    'name': 'five of pentacles',
    '': 'it represents hardship, rejection or a negative change in circumstances. You may be feeling like the world is against you and nothing is going your way when it appears. It can signify bad luck, struggles or adversity. Homelessness, unemployment, alienation and poverty it can signify illness, divorce, breakups or scandals causing turmoil in your life. If you are feeling left out the cold, firstly, remember that this situation is only temporary and then ask yourself if you are reaching out for any help or support that is available. There is help out there for you. It may be in the form of moral support from friends or family, financial assistance from social welfare, or even the kindness of strangers but whatever it is, take it. Nothing lasts forever and this hardship too shall pass.',
  },

  'six of pentacles': {
    'name': 'six of pentacles',
    'meaning': 'represents gifts, kindness and generosity. Someone in your life may be very generous towards you with gifts or money or simply generous with their time, knowledge or wisdom. Alternately, you may have so much wealth and prosperity that you are the one in a position to help others.',
  },

  'seven of pentacles': {
    'name': 'seven of pentacles',
    'meaning': 'indicates that you have been working very hard and it will soon start to pay off.',
  },

  'eight of pentacles': {
    'name': 'eight of pentacles',
    'meaning': 'indicates a time of hard work, commitment, diligence and dedication. The effort you put in will not be in vain as your hard work will pay off and lead to results, rewards or the accomplishment of your goals.',
  },

  'nine of pentacles': {
    'name': 'nine of pentacles',
    'meaning': 'great omen to get as it represents success, independence, confidence, freedom, security and stability. It is a Minor Arcana card of abundance, prosperity and wealth gained through hard work, self-discipline and control and self-reliance. It signifies that you have worked very hard to create the success and status you are experiencing and now is the time to enjoy it. So indulge yourself, pamper yourself and enjoy the luxury and contentment your accomplishments bring you',
  },

  'ten of pentacles': {
    'name': 'ten of pentacles',
    'meaning': 'represents solid foundations, security and happiness in all areas of your life. Like all Pentacle cards it is usually connected to financial or material issues so you can expect especially good things in those areas of your life when it appears. It is also a good card to get in relation to family as it represents family responsibilities, family values and support. You could find yourself tracing your ancestry or discovering your family tree when it appears. You may be feeling very close to your family at this time.',
  },

  'page of swords': {
    'name': 'page of swords',
    'meaning': ' represents delayed news, ideas, planning and inspiration. It can also signify being protective, guarded and vigilant.',
  },

  'knight of swords': {
    'name': 'knight of swords',
    'meaning': 'it tells you that a big change is coming, one you have been awaiting for quite some time and you better be ready to roll with it when it does. It’s time to jump in and seize the moment!',
  },

  'queen of swords': {
    'name': 'queen of swords',
    'meaning': 'represent an older woman in your life who will step in when you are vulnerable and protect you or help you to overcome a problem. It represents being intelligent, sharp witted, witty, honest, truthful and candid.',
  },

  'king of swords': {
    'name': 'king of swords',
    'meaning': 'represents structure, routine, self-discipline, power authority.',
  },

  'ace of swords': {
    'name': 'ace of swords',
    'meaning': 'represents new ideas, new beginnings, new projects, new plans and breakthroughs. It also indicates intellectual ability, mental clarity, clear thinking and the ability to concentrate.',
  },

  'two of swords': {
    'name': 'two swords',
    'meaning': 'represents a stalemate, truce or being at a crossroads. It indicates that you are sitting on the fence or struggling to make/ avoiding a difficult, stressful or painful decision.',
  },

  'three of swords': {
    'name': 'three of swords',
    'meaning': 'represents unhappiness, heartache, sorrow and sadness.',
  },

  'four of swords': {
    'name': 'represents fear, anxiety and stress. You will be feeling overwhelmed and mentally overloaded when it appears.',
    'meaning': '',
  },

  'five of swords': {
    'name': 'five of swords',
    'meaning': 'is not always a good omen as it can represent defeat, change surrender and walking away. It is a Minor Arcana card of self-sabotaging or underhanded behaviour and deception and lack of communication. It can also represent serious conflict, stress and lack of communication.',
  },

  'six of swords': {
    'name': 'six of swords',
    'meaning': 'represents progress, moving into calmer waters, moving on or moving forward. It is a Minor Arcana card of overcoming hardship, healing, relief and stability so you can expect problems in your life to settle down and things to be much easier to deal with. ',
  },

  'seven of swords': {
    'name': 'seven of swords',
    'meaning': 'represents deception, lies, trickery, cheating and lack of conscience. signifies mental manipulation, tactics, scheming, cunning, enemies who masquerade as friends and spies in your camp. It is a Minor Arcana card of dangerous or risky behaviour, daring, courage and staying ahead of the game.',
  },

  'eight of swords': {
    'name': 'eight of swords',
    'meaning': 'represent feeling trapped, confined, restricted or backed into a corner or having your hands tied. It signifies fear, terror, anxiety and psychological issues.',
  },

  'nine of swords': {
    'name': 'nine of swords',
    'meaning': 'fear and anxiety, your fear and anxiety levels are so high they are making you feel that things are worse than they are. In short, you may be making mountains out of molehills. It represents stress, burdens, negative thinking and deep unhappiness. You will be feeling overwhelmed and unable to cope with or face situations, problems or just life in general and may have reached your breaking point.',
  },

  'ten of swords': {
    'name': 'ten of swords',
    'meaning': 'not a good omen as it can represent backstabbing betrayal, badmouthing, bitching behind your back, bitterness and enemies',
  },

  'unknown': {
    'unknown': 'unknown',
    'unknown': 'unknown',
  },
 }


app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})


app.get('/api', (request,response) =>{
  response.json(tarot)
})

app.get('/api/random', (request, response) => {
  const randomTarot = Object.values(tarot)[Math.floor(Math.random() * Object.values(tarot).length)]
  return response.json(randomTarot)
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