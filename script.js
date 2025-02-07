const form = document.getElementById("form")
const inputText = document.getElementById("inputText")
const submitButton = document.getElementById("submit-btn")
const itemList = document.getElementById("item-list")
const totalItems = document.getElementById("total-items")

let items = []
    submitButton.addEventListener("click", function(e){
        e.preventDefault()
        const inputItem = inputText.value.trim()
        if(inputItem === "") return
        
        const newItems = {
            name: inputItem,
            id: Math.floor(Math.random() * 100)
        };
     items.push(newItems)
     inputText.value = ""
     //  console.log(items);
     renderItem()
     
    })
    
    function renderItem(){
        itemList.innerHTML = ``
        items.forEach((item)=>{
            console.log(item);
            
            const li = document.createElement("li")
            li.innerHTML = `<span>${item.name}</span><button todoId="${item.id}">Clear</button>`
            itemList.appendChild(li)
          })
           totalItems.textContent = `${items.length}`
        }

        itemList.addEventListener("click",(e)=>{
            console.log(e);
            console.log(e.target);
            if (e.target.tagName === "BUTTON"){
                const btnId =  Number(e.target.getAttribute("todoId"))
                items = items.filter((item)=> item.id !== btnId)
                renderItem()
            }
        })
