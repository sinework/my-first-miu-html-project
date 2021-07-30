String.prototype.filter = function(arr){
    let words = this.split(" ");
    let res = words.filter((word) => {
        return !(arr.includes(word));
    });

    return res.join(" ");
}


Array.prototype.bubbleSort = function(){
    
for(var i = 0; i < this.length; i++){
    
    
    for(var j = 0; j < ( this.length - i -1 ); j++){
        
       
        if(this[j] > this[j+1]){
           
            var temp = this[j]
            this[j] = this[j + 1]
            this[j+1] = temp
        }
    }
    }
   
    return this;
}


