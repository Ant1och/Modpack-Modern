const registerMapAtlasesRecipes = (event) => {
  
  event.remove({ id: 'map_atlases:atlas' })  
  
  event.shapeless('map_atlases:atlas',[
    'minecraft:book', 
    'minecraft:map',
    'tfc:glue',
  ]).id('map_atlases:atlas')
  
  event.shapeless('map_atlases:atlas',[
    'minecraft:book', 
    'minecraft:compass', 
    'minecraft:map',
  ]).id('map_atlases:atlas2')
}


