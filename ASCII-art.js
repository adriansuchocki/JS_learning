/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const L = parseInt(readline());
const H = parseInt(readline());
const T = readline();
var word = T.toUpperCase();
for (let i = 0; i < H; i++) {
    var result = "";
    const ROW = readline();
    for(var j = 0; j < word.length; j++){
        if(word[j].charCodeAt(0)-65 >=0 && word[j].charCodeAt(0)-65 <= 25){
            var start = (word[j].charCodeAt(0)-65)*L;
            result += ROW.substring(start, start+L);
        } else {
            var start = 26*L;
            result += ROW.substring(start, start+L);
        }
    }
    console.log(result);
}
// Write an action using console.log()
// To debug: console.error('Debug messages...');