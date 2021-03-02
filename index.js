
//Element selector
let paragraph1 = document.getElementById("myForm1"); 
function feedback() { 
    

    // Create a form synamically 
    let form = document.createElement("form"); 
    form.setAttribute("method", "post"); 
  

    // Create an input element for comment id 
    let id = document.createElement("input"); 
    id.setAttribute("type", "text"); 
    id.setAttribute("name", "commentID"); 
    id.setAttribute("placeholder", "Comment"); 
 

    // Create a submit button 
    let sub = document.createElement("input"); 
    sub.setAttribute("type", "submit"); 
    sub.setAttribute("value", "Submit"); 


    // Append the comment id input to the form 
   form.append(id);  
    
    
    // Append the button to the form 
    form.append(sub);  
    document.getElementsByTagName("body")[0] 
   .appendChild(form); 

} 


function myFunc() {
//Create a like button
let button = document.createElement("button");
button.innerHTML = "Like";

// 2. Append somewhere
let body = document.getElementsByTagName("p")[6];
body.appendChild(button);


// 3. Add event handler
button.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button2 = document.createElement("button");
button2.innerHTML = "Like";

//Append somewhere
let body2 = document.getElementsByTagName("p")[8];
body2.appendChild(button2);

// 3. Add event handler
button2.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button3 = document.createElement("button");
button3.innerHTML = "Like";

//Append somewhere
let body3 = document.getElementsByTagName("p")[10];
body3.appendChild(button3);

// 3. Add event handler
button3.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});


//Create a like button
let buttonz = document.createElement("button");
buttonz.innerHTML = "Like";

//Append somewhere
let bodyz = document.getElementsByTagName("p")[12];
bodyz.appendChild(buttonz);

// 3. Add event handler
buttonz.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button4 = document.createElement("button");
button4.innerHTML = "Like";

//Append somewhere
let body4 = document.getElementsByTagName("p")[14];
body4.appendChild(button4);

// 3. Add event handler
button4.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button5 = document.createElement("button");
button5.innerHTML = "Like";

//Append somewhere
let body5 = document.getElementsByTagName("p")[16];
body5.appendChild(button5);

// 3. Add event handler
button5.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button6 = document.createElement("button");
button6.innerHTML = "Like";

//Append somewhere
let body6 = document.getElementsByTagName("p")[18];
body6.appendChild(button6);

// 3. Add event handler
button6.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button7 = document.createElement("button");
button7.innerHTML = "Like";

//Append somewhere
let body7 = document.getElementsByTagName("p")[20];
body7.appendChild(button7);

// 3. Add event handler
button7.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button8 = document.createElement("button");
button8.innerHTML = "Like";

//Append somewhere
let body8 = document.getElementsByTagName("p")[22];
body8.appendChild(button8);

// 3. Add event handler
button8.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button9 = document.createElement("button");
button9.innerHTML = "Like";

//Append somewhere
let body9 = document.getElementsByTagName("p")[24];
body9.appendChild(button9);

// 3. Add event handler
button9.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button10 = document.createElement("button");
button10.innerHTML = "Like";

//Append somewhere
let body10 = document.getElementsByTagName("p")[26];
body10.appendChild(button10);

// 3. Add event handler
button10.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button11 = document.createElement("button");
button11.innerHTML = "Like";

//Append somewhere
let body11 = document.getElementsByTagName("p")[28];
body11.appendChild(button11);

// 3. Add event handler
button11.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});



//Create a like button
let button12 = document.createElement("button");
button12.innerHTML = "Like";

//Append somewhere
let body12 = document.getElementsByTagName("p")[29];
body12.appendChild(button12);

// 3. Add event handler
button12.addEventListener ("click", function() 
{
  alert("Liked this exercise");
});


}


//Adding hiding/showing function to images
$(document).ready(function() {
  $("#b1").click(function() {
    $("#img1").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b2").click(function() {
    $("#img2").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b3").click(function() {
    $("#img3").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b4").click(function() {
    $("#img4").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b5").click(function() {
    $("#img5").toggle(1000);
  });
}); 


$(document).ready(function() {
  $("#b6").click(function() {
    $("#img6").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b7").click(function() {
    $("#img7").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b8").click(function() {
    $("#img8").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b9").click(function() {
    $("#img9").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b10").click(function() {
    $("#img10").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b11").click(function() {
    $("#img11").toggle(1000);
  });
});


$(document).ready(function() {
  $("#b12").click(function() {
    $("#img12").toggle(1000);
  });
});


$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(1000);
  });
  });


  //Hover drop down menu
$(document).ready(function () {
  $(".hoverli").hover(
function () {
   $('ul.file_menu').slideDown('medium');
}, 
function () {
   $('ul.file_menu').slideUp('medium');
}
);

});



//Chained animation effect
$(document).ready(function() {
  $("#chain").slideUp(500).slideDown(500);
});




















