function allFromTown(fromTown, regNum){
    var list = fromTown.split(',');
    var town = [];
    for (var i=0; i<list.length;i++){
      if(list[i].includes(regNum)==true){
        town.push(list[i].trim());
      }
    }
    console.log(town);
    
   return town;
  }