const sum=(a)=>{
return a.reduce((acc,cur)=>{
    return acc+cur;
},0)
}

const multiply=(a)=>{
    return a.reduce((acc,cur)=>{
      return acc*cur;
    },1)
    }
 const reverse=(a)=>{
        return a.map((key) => {
            return key.split("").reverse().join("");
        })
    }

const longerWords=(a, i)=>{
        return a.filter((st) => {
            return  st.length > i;  
        });
    }