var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
                    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                    "w", "x", "y", "z"];

function f(targetString){
    var resultString = "";
    targetString = targetString.toLowerCase();

    for(let i = 0; i < targetString.length; i++){
        if(alphabet.indexOf(targetString[i]) != -1){
            resultString += alphabet[alphabet.length - alphabet.indexOf(targetString[i]) - 1];
        }
        else{
            resultString += targetString[i];
        }
    }

    return resultString;
}

f("Errors in strategy cannot be correct through tactical maneuversb");

function g(targetString){
    targetString = targetString.toLowerCase();
    
    var resultObject = {a:0, b:0, c:0, d:0, e:0, f:0, g:0, h:0, i:0, j:0,
                    k:0, l:0, m:0, n:0, o:0, p:0, q:0, r:0, s:0, t:0, u:0, v:0,
                    w:0, x:0, y:0, z:0};
    
    for(let i = 0; i < targetString.length; i++){
        if(alphabet.indexOf(targetString[i]) != -1){
            resultObject[targetString[i]]++;
        }
    }
    
    return resultObject;
}

g("Hello there! Apple!");