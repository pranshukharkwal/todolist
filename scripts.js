var ul = document.getElementById("ul")
var item = document.getElementsByTagName("li")
var input = document.getElementById("task")
var button = document.getElementById("enter")
var count = 0
var rmvbtn = document.getElementById("remove-all")
function abcd(){

    if(input.value.length <= 0)
    {
        alert("Cannot add an empty task")
    }

    else {

        var li = document.createElement("li");
        var abc = document.createTextNode(input.value);
        li.appendChild(abc);
        var dbtn = document.createElement("button")
        dbtn.appendChild(document.createTextNode('X'))
        li.appendChild(dbtn)
        ul.appendChild(li)  
        count++
        
        if(count>=1) { rmvbtn.style.display = "block"}


        dbtn.onclick = function(){
            count--
            li.style.display = "none";
            if(count<1) { rmvbtn.style.display = "none" }
        }
    }

    input.value = ""
}

function checkKeyPress(event){
    if (event.which ===13) {
        if(input.value.length > 0){
            abcd()
        }
        else if(input.value.length <= 0) {
            alert("Cannot add an empty task")
        }
    }
}

function removeall(){
    var allli = document.getElementsByTagName("li")
    for(var i = 0; i< allli.length ; i++)
    {
        if(allli[i].style.display != "none") {

            allli[i].style.display = "none"
            count--
        }
    }
    rmvbtn.style.display = "none"
}

input.addEventListener("keypress", checkKeyPress)
button.addEventListener("click" , abcd)
rmvbtn.addEventListener("click" , removeall)
