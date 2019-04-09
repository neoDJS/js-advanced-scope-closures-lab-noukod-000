function produceDrivingRange(range){
  return function(first, second){
        const distance = parseInt(second) - parseInt(first);
        if(distance > range){
            return `${distance - range} blocks out of range`;
        }else{
            return `within range by ${range - distance}`;
        }
  }
}
