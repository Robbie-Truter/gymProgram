//Storing objects in "exercises"
let exercises = [];

//Checks if it is first time loading page or not
function load() 
{
    let htmlSelect = document.getElementById("exerciseList");
   
    if (sessionStorage.getItem("hasCodeRunBefore") == null)
     {
        sessionStorage.setItem("workout", JSON.stringify(exercises));
        sessionStorage.setItem("hasCodeRunBefore", true);
    }

     else 
     {
       //Get the array objects from  and assign it to the array exercise
        exercises= JSON.parse(sessionStorage.getItem("workout"));
        let i = 0;

        //Loop through each exercise  in the exercise array
        exercises.forEach(function(b) {

            //For each exercise in the array create an option element that displays 
             //exercise name and add it to dropdown list on the HTML page 
            let option = document.createElement("option");
            option.innerHTML = b.author;
            option.value = i;
            i = i + 1;
            htmlSelect.appendChild(option);
        });
            htmlSelect.style.visibility = "visible";
    }
}

//creating all exercise objects
function Workout(category, type, descript) {
    this.category = category;
    this.type = type;
    this.descript = descript;
}

//Retrieving data about the HTML form on the HTML page
function addBook()
 {
    exercises = JSON.parse(sessionStorage.getItem("workout"));
    let newWork = new Workout(
        document.getElementById("eType").value,
        document.getElementById("eCat").value,
        document.getElementById("eDescript").value,
    );
    exercises.push(newWork);
    sessionStorage.setItem("workout", JSON.stringify(exercises));
}

//Alert when an saved for later is selected
function ChangeActiveUser(indexOfPersonObj) 
{
    exercises[indexOfPersonObj].bio = function() 
    {
        alert(
            "The exercise category:\n"
            +

            this.category + "\n"

            + 
            "Exerise type is:\n"

            +

            this.type + "\n"

            +

            "Description:\n"

            +
            this.descript
            
            );
    };
    exercises[indexOfPersonObj].bio();
}