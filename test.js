var enterButton="";
var input="";
var ul="";
var item="";
var dbtn="";

enterButton=document.getElementById("enter");



function createListElements(){
    input=document.getElementById("userInput");
    ul=document.querySelector("ul");
    item=document.getElementsByTagName("li");
    var li = "";
   li=document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    dbtn=document.createElement("button");
    dbtn.appendChild(document.createTextNode("X"));
    li.appendChild(dbtn);
    console.log(item.length);
    input.value="";
    li.addEventListener("click",
    function crossOut() {
        li.classList.toggle("done");
    });
    dbtn.addEventListener("keypress",function deleteListItem(){
		li.classList.add("delete");
	});
}

enterButton.addEventListener('click',addListAfterClick);

//li.addEventListener("click",crossOut);

function addListAfterClick(event){
  
    createListElements();
    
  
}
