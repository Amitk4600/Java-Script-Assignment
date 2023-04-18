const allItemsShows = document.getElementsByClassName("allItemsShows");
const addItemsBtn = document.getElementById("addItems");
const orderList  = document.getElementById("orderList");
// const itemsList  = document.getElementById("lists");

const listItems = [
"HTML and Semantics",
"Starting with CSS",
"Working Template",
"Mobile responsive webpage",
"Grid and Flex-box in CSS",
"Version Control and Git",
"Getting Started with JavaScript",
"Advance JavaScript",
"Working with Dom",
"Making Projects using HTML, CSS and JavaScript",
"Understanding Fundamental of Computer Science",
"Getting Started with Database",
"Starting with NNodeJs and Express",
"Understanding React and its Fundamentals",
"Understanding hooks and Routers",
"Starting and Computing Full Fledge Projects"
];

let nextItemIndex = 0;

addItemsBtn.addEventListener("click", function(){
    if (nextItemIndex >= listItems.length){
        alert("All items have been added.")
        return;
    }

    const newItems = document.createElement("li");
    newItems.textContent = listItems[nextItemIndex];
    orderList.appendChild(newItems);

    nextItemIndex++;
});