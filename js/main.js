var x=1;
function addPara() {
    var para = document.createElement("p");
    var text = document.createTextNode("This is click number " + x++ + ".");
    para.appendChild(text);
    document.body.appendChild(para);
}
    
