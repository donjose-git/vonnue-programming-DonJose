function Word(mynoun, myadjective, verb, adverb)
{
    var result = "";
    result += "hi " + mynoun + " " + myadjective + " " + verb + " " + adverb;
    return result;
}
console.log(Word("don", "is", "playing", "cricket"));