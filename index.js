function shout (string){
  return string.toUpperCase()
}

function whisper (string){
  return string.toLowerCase()
}

function logShout (string){
  console.log(string.toUpperCase(string))
}

function logwhisper (string){
  console.log(string.toLowerCase(string))
}

function sayHiToGrandma(string){
  if (string.toLowerCase(string) == "i love you, grandma."){
    return "I love you, too.";
  } else if (isUpperCase(string)) {
    return "YES INDEED!";
  }else if (isLowerCase(string)){
    return "I can't hear you!";
  }
}

