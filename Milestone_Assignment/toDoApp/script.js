const item = document.querySelector("#items");
const toDoBox = document.querySelector("#to-do-box");
const addButton = document.getElementById("addBtn")

    addButton.addEventListener ("click", function() {
        const input = item.value
        if (input != ""){
            addToDo(input);
            item.value ="";
        }
    }) 


        const addToDo = (items) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `${items} 
            <i class="fa-solid fa-circle-xmark"></i> `;

            listItem.addEventListener("click", function() {
                this.classList.toggle("done");
            });

            listItem.querySelector("i").addEventListener("click", function() {
                listItem.remove()

            })

            toDoBox.appendChild(listItem)

        } 