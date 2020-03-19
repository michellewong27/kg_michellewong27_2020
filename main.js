// Determine whether a one-to-one character mapping exists from one string, s1, to another string, s2.
// For example, given ​s1 = abc​ and ​s2 = bcd,​ print "​true" into stdout​ since we can map each character in "abc" to a character in "bcd".
// Given ​s1 = foo​ and ​s2 = bar,​ print "f​alse"​ since the character ‘o’ cannot map to two characters. 
    //But given ​s1 = bar a​ nd ​s2 = foo​, print "true​"​ since each character in "bar" can be mapped to a character in "foo"

//What is actually happening in one-to-one character mapping -> the letters from one string can be remapped to get the second string.
//Remapping a letter means replacing all occurrences of it with another letter while the ordering of the letters remains unchanged.

function charMapping(s1, s2){
    //if the length of string 1 doesnt equal length of string 2, return false 
    //optimize by setting variable names to both strings length
    let s1Length = s1.length
    let s2Length = s2.length
        
    if(s1Length !== s2Length){
        return false;
    }    
     //set chars variable object to store chars from s1 as key & values from s2
    let setChars = {};

    //for loop that'll loop through each char in s1 
        //see if the char exists in setChars
        //if the char doesnt exist as a key in setChars
            //then add it where s2 char equals the string
        //if the char exists as a key in setChars already then compare it with s2 char

}
