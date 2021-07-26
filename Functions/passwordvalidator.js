/*
The goal is to write isValidPassword function
It accepts two arguments: password and username


Password must: 
- Be atleast 8 characters
- Cannot contain spaces
- Cannot contain the username
- If all requirements are met, return tru.
- Otherwise: false

isValidPassword('89Fjj1nms', 'dogLuvr');       //true
isValidPassword('dogLuvr123!, 'dogLuvr');        //false


*/




function isValidPassword(password, username) {
  if(password.length < 8 ) {
    return false;
  }
}            //false




function isValidPassword(password, username) {
  if(password.length < 8 ) {
    return false;
  }
  if(password.indexOf(' ') !== -1) {
    return false;
  }
  if(password.indexOf(username) !== -1) {
    return false;
  }
  return true;
} 


"asds".indexOf(' ');            //-1
"asds".indexOf('asd');             //0
"asds".indexOf('sds');                //1

isValidPassword('asfg2', 'asd');          //false
isValidPassword('aasjasd askjd', 'asdasdasd');        //false    password has a space
isValidPassword('chicken1234', 'chicken');        //false
isValidPassword('chicken1234', 'chicken');      //true



//REWRITING PREVIOUS
function isValidPassword(password, username) {
  if (
    password.length < 8 ||  
    password.indexOf(' ') !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
}


isValidPassword('chicken1234', 'chicken');     //true
isValidPassword('chicken1234', 'chicken');    //false
isValidPassword('aasjasd askjd', 'asdasdasd');     //false
isValidPassword('asfg2', 'asd');       //false




//
function isValidPassword(password, username) {
  const tooShort = password.length < 8; 
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (tooShort || hasSpace || tooSimilar) 
  return false;
  return true;
}


isValidPassword('asfg2', 'asd');     //false
isValidPassword('asfgasdasda', 'asd');    //false
isValidPassword('ilovedog123', 'dog');     //false
isValidPassword('ilovedog123', 'cat');       //true


//REWRITE ABOVE
function isValidPassword(password, username) {
  const tooShort = password.length < 8; 
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  if (!tooShort && !hasSpace && !tooSimilar) 
  return false;
  return true;
}



isValidPassword('ilovedog123', 'cat');     //true
isValidPassword('ilovedog123', 'love');     //false
isValidPassword('ilovedog12 3', 'asdasd');     //false
isValidPassword('ilo', 'asdasd');     //false




//SIMILAR
function isValidPassword(password, username) {
  const tooShort = password.length < 8; 
  const hasSpace = password.indexOf(' ') !== -1;
  const tooSimilar = password.indexOf(username) !== -1;
  return !tooShort && !hasSpace && !tooSimilar;
}


isValidPassword('ilo', 'asdasd');     //false
isValidPassword('iloasdasd', 'asdasd');     //true
isValidPassword('iloasdsdasd', 'asdasd');     //false





