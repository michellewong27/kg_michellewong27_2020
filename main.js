function charMapping(s1, s2){
    //optimize by setting variable names to both strings length
    let s1Length = s1.length;
    let s2Length = s2.length;
     //set chars variable object to store chars from s1 as key & values from s2
    let setChars = {};

    //if the length of string 1 doesnt equal length of string 2, return false 
    if(s1Length !== s2Length){
        return false;
    }    
    //loop through each char in s1 
    for (let i=0 ; i < s1Length ; i++){
        //if the char doesnt exist as a key in setChars then add it & set s1 char to equal s2 char 
        if(!setChars[s1[i]]) {
            setChars[s1[i]] = s2[i];
        }
        //if the char exists as a key in setChars already & does not equal s2 char then return false
        else if (setChars[s1[i]] !== s2[i]){
            return false;
        }
    }
    return true;
}
