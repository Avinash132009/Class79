var data=[];

function submit(){
    var no1=document.getElementById("no_1").value;
    var no2=document.getElementById("no_2").value;
    var no3=document.getElementById("no_3").value;
    var no4=document.getElementById("no_4").value;
    data.push(no1, no2, no3, no4);
    console.log(data);
    document.getElementById("data").innerHTML=data;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline";
}

function sort(){
    data.sort();
    console.log(data);
    document.getElementById("data").innerHTML=data;
}