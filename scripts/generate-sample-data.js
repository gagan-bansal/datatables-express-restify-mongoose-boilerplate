var f = require('faker')
for (var i=0; i< 50; i++)
  console.log(
      ['not editable','also not editable'][f.random.number({min:0,max:1})]
      + '\t' + f.name.firstName() + ' ' + f.name.lastName()
      + '\t' + f.random.number({min: 18, max: 60}))
