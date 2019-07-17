/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const n = parseInt(readline()); // the number of temperatures to analyse
var inputs = readline().split(' ');
var result = parseInt(inputs[0]);
if(n == 0){
    result = 0;
}
for (let i = 0; i < n; i++) {
    const t = parseInt(inputs[i]);// a temperature expressed as an integer ranging from -273 to 5526
    if(Math.abs(t) <= Math.abs(result) && Math.abs(t) != result){
        result = t;
    }

}
// Write an action using console.log()
// To debug: console.error('Debug messages...');
console.log(result);