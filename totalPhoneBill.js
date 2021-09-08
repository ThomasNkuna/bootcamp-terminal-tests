module.exports = function(string){

const stringitems = string.split(',');
let totalCost = 0;
  
for (var i = 0; i < stringitems.length; i++){
const items = stringitems[i].trim();

  if(items == 'call'){
     totalCost += 2.75;
     
     }
  else if(items == 'sms'){
   totalCost += 0.65;
  }
}
return 'R' + totalCost.toFixed(2);
}