const cards = [
  {cardName: Sylveon,
  cardDescription: By releasing enmity-erasing waves from its ribbonlike feelers,Sylveon stops any conflict. ,
  cardAttr1:50,
  cardAttr2:50,
  cardAttr3:50,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png,
  cardRare:raro,
  cardTrunfo:false},
  {cardName:Eevee,
  cardDescription:Its genetic code is irregular. It may mutate if it is exposed to element stones.,
  cardAttr1:50,
  cardAttr2:50,
  cardAttr3:50,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png,
  cardRare:normal,
  cardTrunfo:false},
  {cardName:Vaporeon,
  cardDescription:When Vaporeon’s fins begin to vibrate,
   it is a sign that rain will come within a few hours. ,
  cardAttr1:50,
  cardAttr2:50,
  cardAttr3:50,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png,
  cardRare:normal,
  cardTrunfo:true},
  {cardName:Espeon,
  cardDescription:By reading air currents,
   it can predict things such as the weather or its foe’s next move.\n,
  cardAttr1:50,
  cardAttr2:50,
  cardAttr3:50,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png,
  cardRare:raro,
  cardTrunfo:false},
  {cardName:Umbreon,
  cardDescription:When this Pokémon becomes angry,
   its pores secrete a poisonous sweat,
   which it sprays at its opponent’s eyes.\n,
  cardAttr1:50,
  cardAttr2:50,
  cardAttr3:50,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png,
  cardRare:raro,
  cardTrunfo:false},
  {cardName:Selebii,
  cardDescription:This Pokémon came from the future by crossing over time. It is thought that so long as Celebi appears,
   a bright and shining future awaits us.\n,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/251.png,
  cardRare:normal,
  cardTrunfo:false},
  {cardName:Gengar,
  cardDescription:On the night of a full moon,
   if shadows move on their own and laugh,
   it must be Gengar’s doing.,
  cardAttr1:50,
  cardAttr2:50,
  cardAttr3:50,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png,
  cardRare:raro,
  cardTrunfo:false},
  {cardName:Arcanine,
  cardDescription:The sight of it running over 6,
  200 miles in a single day and night has captivated many people.,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png,
  cardRare:normal,
  cardTrunfo:false},
  {cardName:Dragonite,
  cardDescription:It’s a kindhearted Pokémon. If it spots a drowning person or Pokémon,
   Dragonite simply must help them. ,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png,
  cardRare:muito raro,
  cardTrunfo:false},
  {cardName:Greninja,
  cardDescription:It creates throwing stars out of compressed water. When it spins them and throws them at high speed,
   these stars can split metal in two.,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png,
  cardRare:raro,
  cardTrunfo:false},
  {cardName:Bulbasaur,
  cardDescription:There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png,
  cardRare:normal,
  cardTrunfo:false},
  {cardName:Charizard,
  cardDescription:It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://archives.bulbagarden.net/media/upload/thumb/1/11/006Charizard_RB.png/600px-006Charizard_RB.png,
  cardRare:muito raro,
  cardTrunfo:false},
  {cardName:Clefairy,
  cardDescription:It is said that happiness will come to those who see a gathering of Clefairy dancing under a full moon.,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://archives.bulbagarden.net/media/upload/b/b0/035Clefairy_RB.png,
  cardRare:normal,
  cardTrunfo:false},
  {cardName:Pidgeotto,
  cardDescription:This Pokémon is full of vitality. It constantly flies around its large territory in search of prey. ,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://archives.bulbagarden.net/media/upload/thumb/7/7a/017Pidgeotto.png/600px-017Pidgeotto.png,
  cardRare:normal,
  cardTrunfo:false},
  {cardName:Pikachu,
  cardDescription:Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy. ,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://archives.bulbagarden.net/media/upload/0/03/025Pikachu_RG.png,
  cardRare:normal,
  cardTrunfo:false},
  {cardName:Ninetales,
  cardDescription:It is said to live 1,
  000 years,
   and each of its tails is loaded with supernatural powers.,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://archives.bulbagarden.net/media/upload/thumb/2/28/038Ninetales_RG.png/631px-038Ninetales_RG.png,
  cardRare:normal,
  cardTrunfo:false},
  {cardName:Psyduck,
  cardDescription:Psyduck is constantly beset by headaches. If the Pokémon lets its strange power erupt,
   apparently the pain subsides for a while.,
  cardAttr1:0,
  cardAttr2:0,
  cardAttr3:0,
  cardImage:https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png,
  cardRare:normal,
  cardTrunfo:false}]