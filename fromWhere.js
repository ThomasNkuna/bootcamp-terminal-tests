module.exports = function(RegNumber){
  
    if (RegNumber.startsWith('CY')){
        return 'Bellville';
        }
      else if (RegNumber.startsWith('CJ')){
               return 'Paarl';
               }
      else if (RegNumber.startsWith('CA')){
               return 'Cape Town';
               }
      else{
      return 'Some other place!'
      }

}