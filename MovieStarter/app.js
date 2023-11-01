// Add DOM selectors to target input and UL movie list
var inp = document.querySelector("input");
var myMovieList = document.querySelector("ul");
var tableMaker = document.querySelector("#movieHistoryCard");
var movieHistory = {};
// var table =document.querySelectorAll(".card-title")


// Example of a simple function that clears the input after a user types something in
function clearInput() {
    inp.value = "";
}

function clearMovies() {
    // To delete all children of the <ul></ul> (meaning all <li>'s)..we can wipe out the <ul>'s innerHTML
    myMovieList.innerHTML = '';
}

// This function is executed when the user clicks [ADD MOVIE] button.
function addMovie() {
    // Step 1: Get value of input
    var userTypedText = inp.value;
    // Step 2: Create an empty <li></li>
    var li = document.createElement("li"); // <li></li>

    // Step 3: Prepare the text we will insert INTO that li ^...example: Harry Potter
    var textToInsert = document.createTextNode(userTypedText);

    // Step 4: Insert text into li
    // <li>Harry Potter </li>
    li.appendChild(textToInsert);

    // Step 5: Insert the <li>Harry Potter</li> INTO the <ul>
    myMovieList.appendChild(li);

    // Step 6: Call the clearInput function to clear the input field
    clearInput();
    
    
    if(movieHistory[userTypedText])
    {
        movieHistory[userTypedText] += 1;
    }else
    {
        movieHistory[userTypedText] = 1;
    }


    tableMaker.innerHTML = addtable()
    
}

function addtable() {

    return `
    <table><tr><b>Title</b></tr><td>
    ${
        Object.keys(movieHistory)
        .map(key => `<tr><td>${key}</td><td>${movieHistory[key]}</td></tr>`)
        .join("")

    }
    </td></table>
    `
}




// function addTable() 
// {
//     tableMaker.innerHTML= "";
//     // Step 1: getting input value (this is not needed in this function)
//     // var userTypedText = inp.value;

//     // Step 2: creating a table 
//     for (const movieName in movieHistory) {
//         const table = document.createElement("table")
//         const watchCount = movieHistory[movieName];
//         // const row = document.createElement("tr");
//         var row = table.insertRow("tr");
//         const nameCell = document.createElement("td");
//         nameCell.textContent = movieName;
//         const countCell = document.createElement("td");
//         countCell.textContent = watchCount;
//         row.appendChild(nameCell);
//         row.appendChild(countCell);
//         tableMaker.appendChild(row);
//     }
// }


// function addtable(){
//     //step 1 :getting input value
//     var userTypedText = inp.value;
//     //step 2 : creating a table 
//     var table = document.createElement("table");  //table addition <table></table>
    

//     var headerRow= table.insertRow(table.rows.length);

//     var headerCell1 = headerRow.insertCell(0)
//     var headerCell2 = headerRow.insertCell(1)

//     var textToInsert = document.createTextNode(userTypedText);

//     headerCell1.appendChild(textToInsert)
//     headerCell2.appendChild(textToInsert)

//     tableMaker.appendChild(table);


//     // step 3: adding the value 
//     // //adding value to table
//     // table.appendChild(textToInsert)


// }

// function addtable() {
//     // Step 1: getting input value (this is not needed in this function)
//     var userTypedText = inp.value;

//     // Step 2: creating a table 
//     var table = document.createElement("table");  //table addition <table></table>
    
//     var headerRow = table.insertRow();

//     var headerCell1 = headerRow.insertCell(0);
//     var headerCell2 = headerRow.insertCell(1);

//     var textToInsert1 = document.createTextNode(userTypedText);
//     var textToInsert2 = document.createTextNode("1"); // Initialize the watch count to 1

//     headerCell1.appendChild(textToInsert1);
//     headerCell2.appendChild(textToInsert2);

//     tableMaker.appendChild(table);
// }



// myMovieList.innerHTML = ""
// tableMaker.innerHTML

