const $money = document.querySelector('.money');
const $clicker = document.querySelector('.clicker');
const $cursor = document.querySelector('.cursor');
const $nbCursor = document.querySelector('.nbCursor');

var result = 0;
var nbCursor = 0;

function nbClick(){
    result += 1;
    $money.innerHTML = result;
}

function buy() {
    result -= 10;
    nbCursor += 1;
    
    $money.innerHTML = result;
    $nbCursor.innerHTML = nbCursor;


}


$clicker.addEventListener('click', nbClick);
$cursor.addEventListener('click',buy);