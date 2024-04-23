let boxes = document.querySelectorAll(".boxes");
let rightdiv = document.getElementById("rightdiv");
let leftdiv = document.getElementById("leftdiv");
let selected;
for(let box of boxes)
{
    box.addEventListener("dragstart",function(e)
    {
        var selected = e.target;
        rightdiv.addEventListener("dragover",function(e)
        {
            e.preventDefault();
        })
        rightdiv.addEventListener("drop",function()
        {
            rightdiv.appendChild(selected);
            selected=null;
        })
        leftdiv.addEventListener("dragover",function(e)
        {
            e.preventDefault();
        })
        leftdiv.addEventListener("drop",function()
        {
            leftdiv.appendChild(selected);
            selected=null;
        })
    });  
}