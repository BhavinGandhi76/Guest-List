var names= [];
function submit(){
    var guest_name= document.getElementById("nametag").value;
    names.push(guest_name);
    document.getElementById("displayname").innerHTML= names;
    document.getElementById("nametag").value="";
}

function show1(){
    var i= names.join("<br>");
    document.getElementById("showname").innerHTML=i;
    document.getElementById("Sort1").style.display="block";
}

function sort(){
    names.sort();
    document.getElementById("sortname").innerHTML=names;
}