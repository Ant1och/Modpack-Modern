const registerTFCSluicingLootTables = (event) => {
  const rock_types = [
    'claystone',
    'chalk',
    'diorite',
    'quartzite',
    'marble',
    'basalt',
    'phyllite',
    'andesite',
    'dacite',
    'gabbro',
    'dolomite',
    'shale',
    'chert',
    'rhyolite',
    'limestone',
    'slate',
    'gneiss',
    'conglomerate',
    'schist',
    'granite'     
  ]

  rock_types.forEach(rock_type => {
    let type = 'tfc:rock/gravel/' + rock_type
    let sluice = 'tfc:sluicing/gravel/' + rock_type
    let pan = 'tfc:panning/gravel/' + rock_type
    let anim_full = 'tfc:item/pan/native_gold/' + rock_type + '_full'
    let anim_half = 'tfc:item/pan/native_gold/' + rock_type + '_half'
    // Fuck javascript strings
    event.sluicing(type.toString(), sluice.toString())
    event.panning(type.toString(), pan.toString(), [anim_full.toString(), anim_half.toString()])
  })

  // const dfc_rock_types = [
  //   "tuff",
  //   "blueschist",
  //   "serpentine",
  //   "travertine",
  //   "arkose"
  // ]
  
  // dfc_rock_types.forEach(rock_type => {
  //   let type = 'dfc:rock/gravel/' + rock_type
  //   let sluice = 'dfc:sluicing/gravel/' + rock_type
  //   let pan = 'dfc:panning/gravel/' + rock_type
  //   let anim_full = 'dfc:item/pan/native_gold/' + rock_type + '_full'
  //   let anim_half = 'dfc:item/pan/native_gold/' + rock_type + '_half'
  //   // Fuck javascript strings
  //   event.sluicing(type.toString(), sluice.toString())
  //   event.panning(type.toString(), pan.toString(), [anim_full.toString(), anim_half.toString()])
  // })

}
