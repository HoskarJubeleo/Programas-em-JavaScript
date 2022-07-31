function insert(num){
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function clean(){
    document.getElementById('result').innerHTML = "";
}

function back(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}

function calcular(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }
}

function tabClose() {
    var tab = window.open("","_self");
    tab.close();
}

function inert(){
    for (var i = 2; i > 0; i++) {
        console.log(i);
    }
}