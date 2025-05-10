const registerFirstAidRecipes = (event) => {

  event.remove({ id: 'firstaid:bandage' })  
  event.remove({ id: 'firstaid:plaster' })  

  event.shaped('2x firstaid:bandage', [
    'AAA',
    'BCB',
    'AAA'
  ], {
      A: '#tfc:high_quality_cloth',
      B: '#tfc:clay_indicators',
      C: 'tfc:glue'
    }).id('firstaid:bandage')
  
  event.shaped('2x firstaid:bandage', [
    'AAA',
    'BCB',
    'AAA'
  ], {
      A: '#tfc:high_quality_cloth',
      B: 'minecraft:paper',
      C: 'tfc:glue'
    }).id('firstaid:bandage2')
  
  event.shaped('3x firstaid:plaster', [
    'A A',
    'BCB',
    'A A'
  ], {
      A: '#forge:string',
      B: 'tfc:groundcover/dead_grass',
      C: '#tfc:clay_indicators',
    }).id('firstaid:plaster1')
  
  event.shaped('3x firstaid:plaster', [
    'A A',
    'BCB',
    'A A'
  ], {
      A: '#forge:string',
      B: 'tfc:burlap_cloth',
      C: '#tfc:clay_indicators',
    }).id('firstaid:plaster2')

  event.shapeless('firstaid:plaster',[
    'tfc:plant/leafy_kelp', 
    'tfc:plant/leafy_kelp',
    '#tfc:clay_indicators',
    '#tfc:clay_indicators',
  ]).id('firstaid:primitive_plaster')

  event.shapeless('2x firstaid:plaster',[
    'firmalife:fruit_leaf', 
    'firmalife:fruit_leaf',
    '#tfc:clay_indicators',
    '#tfc:clay_indicators',
  ]).id('firstaid:primitive_plaster2')
  
}


