module.exports = function(salesData){
    //console.log(salesData.length);
    const salesdataMap = {};
      
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      salesdataMap[salesdata.department] = 0;
    }
    for (var i = 0; i < salesData.length; i++){
      const salesdata = salesData[i];
      var currentDepartmentTotal = salesdataMap[salesdata.department];
      currentDepartmentTotal += salesdata.sales;
      salesdataMap[salesdata.department] = currentDepartmentTotal;
    }
    
    var maxSales = 0;
    var currentDepartment = '';
      
    for(const salesdepartment in salesdataMap){
    //console.log(salesdepartment);
       //console.log(salesdataMap[salesdepartment]);
    const currentSalesDepartmentsales = salesdataMap[salesdepartment];
    
    if(currentSalesDepartmentsales > maxSales){
         maxSales = currentSalesDepartmentsales;
         currentDepartment = salesdepartment;
         }
    
    }
      //console.log(currentDepartment)
      return currentDepartment;
    }    
