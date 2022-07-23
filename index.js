const d = new Date();
let day = d.getUTCDate();
let year = d.getFullYear();
let month = d.getMonth();
let date = String(day)+'/'+String(month+1)+'/'+String(year);

function getdate(){
    document.getElementById("date").innerHTML = date;
}

c=0;
function increment(){
    c+=1;
    document.getElementById('count').innerHTML=c;
}

function reset(){
    document.getElementById('count').innerHTML=0;
    c=0;
}

