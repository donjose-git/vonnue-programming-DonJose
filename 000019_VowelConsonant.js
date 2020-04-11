let readline = require('readline-sync');
let VowelsConsonant = (chara)=>{
    if(chara == 'a'||chara == 'A' || chara == 'e' || chara == 'E'|| chara == 'i'|| chara == 'I'
    || chara == 'o' || chara == 'O' || chara =='u'|| chara == 'U') {
        console.log(chara + " " + "is a Vowel");
        }
        else{
            console.log(chara + " " + "is a Consonant");
        }
}
let checkchar = readline.question("Enter a character: ");
VowelsConsonant(checkchar);