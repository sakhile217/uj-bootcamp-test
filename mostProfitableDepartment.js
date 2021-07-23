function mostProfitableDepartment(salesData1){
  
    const departListing = {};
    for (var i=0 ; i<salesData1.length; i++){
      const prod = salesData1[i];
    departListing[prod.department] = 0;
  }
   
  for (var i=0 ; i<salesData1.length; i++){
      const prod = salesData1[i];
    var depart =departListing[prod.department]; 
    depart += prod.sales;   
    departListing[prod.department] = depart        
    
  } 
   
  var currentSales = 0;
   var currentDepart = '';
  for (const departSales in departListing){
   const currentDepartSales = departListing[departSales];
   if(currentDepartSales > currentSales){
    currentSales = currentDepartSales;
   currentDepart = departSales;
   }
  }
    return currentDepart;
  }