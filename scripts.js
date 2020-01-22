var ul = document.getElementById("ul")
var item = document.getElementsByTagName("li")
var input = document.getElementById("task")
var button = document.getElementById("enter")

button.onclick = function(){

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
        
        dbtn.onclick = function(){
            li.style.display = "none";
            li.classList.add("delete")
        }
    }
    
    input.value = ""
    
}

