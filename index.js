function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
 console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}
var string = "hello"

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!"
  } if (string === string.toUpperCase()) {
    return "YES INDEED!"
  } if (string === "I love you, Grandma.") {
    return "I love you, too."
  }
}