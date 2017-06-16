var  REGION_DATA =require('./city') 

const rootCode = '86'

var arr = []

for(let prop in REGION_DATA[rootCode]){
  arr.push({
    value:prop,
    label: REGION_DATA[rootCode][prop]
  })
}

export default arr