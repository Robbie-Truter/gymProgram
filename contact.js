
let paragraph2 = document.createElement("form");
paragraph2.setAttribute('method',"post");


let i = document.createElement("input"); //input element, text
i.setAttribute('type',"text");
i.setAttribute('name',"username");


let s = document.createElement("input"); //input element, Submit button
s.setAttribute('type',"submit");
s.setAttribute('value',"Submit");
paragraph2.appendChild(i);


document.getElementsByTagName('p')[3].appendChild(paragraph2);


let paragraph3 = document.createElement("form");
paragraph3.setAttribute('method',"post");


let i2 = document.createElement("input"); //input element, text
i2.setAttribute('type',"text");
i2.setAttribute('name',"username");


let s2 = document.createElement("input"); //input element, Submit button
s2.setAttribute('type',"submit");
s2.setAttribute('value',"Submit");
paragraph3.appendChild(i2);
document.getElementsByTagName('p')[4].appendChild(paragraph3); 


let paragraph4 = document.createElement("form");
paragraph4.setAttribute('method',"post");


let i3 = document.createElement("input"); //input element, text
i3.setAttribute('type',"text");
i3.setAttribute('name',"username");


let s3 = document.createElement("input"); //input element, Submit button
s3.setAttribute('type',"submit");
s3.setAttribute('value',"Submit");
paragraph4.appendChild(i3);


document.getElementsByTagName('p')[5].appendChild(paragraph4);
