var isPalindrome = function(s) {
    let p = [];
    let i = 0;
    s = s.toLowerCase()
    for(const v of s) {        
        if (v.match(/^[a-z0-9]+$/g)) {        
            p[i++] = v;
        }  
    }     
    if (p.length === 0)
        return true;

    let r = p.reverse();
    
     for(let i = 0; i < p.length; i++) {
        if (p[i] !== r[i])
          return false;
     }

    return true;
};


let s = "A man, a plan, a canal: Panama";
s = " "
let res = isPalindrome(s);
res