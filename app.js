let button=document.getElementById("button");
var numberInShape=1;
var old_value=0;

button.onclick =() => 
{
    let n=document.getElementById("number").value;
    const circle=document.getElementById("circle");
    const square=document.getElementById("square");
    const rectangle=document.getElementById("rectangle");
    const box=document.getElementById("box");
    const color=document.getElementById("color");
    n = Number(n) + Number(old_value);
    for(let j=numberInShape;j<=n;j++)
    {
        let shape=document.createElement("div");
        shape.innerHTML +=numberInShape;
        if(circle.checked)
        {
            shape.classList.add("circle");
        }
        else if(square.checked)
        {
            shape.classList.add("square");
        }
        else if(rectangle.checked)
        {
            shape.classList.add("rectangle");
        }
        else
        {
            document.write("Invalid");
        }
        if(color.value)
        {
            shape.style.backgroundColor = color.value;
        }
        numberInShape++;
        box.appendChild(shape);
        old_value=document.getElementById("box").lastElementChild.innerHTML;
    }
};