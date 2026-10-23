// ----- data -----



// ----- elements -----
const statusLine = document.getElementById("status");
const statusChange = document.getElementById("status-change");

const nameItem = document.getElementById("name-item");
const descItem = document.getElementById("desc-item");
const menuButton = document.getElementById("menu-button")
const hide2 = document.getElementById("hide2");

const addButton = document.getElementById("add-button");
const newItem = document.getElementById("new-item");
const locList = document.getElementById("locList");
const hide = document.getElementById("hide");

const soldCount = document.getElementById("soldCount");
const saleCheck = document.getElementById("saleCheck");

const table = document.querySelector("table");



// ----- functions -----



// ----- listeners -----
statusChange.addEventListener("click", function() 
{
    if (statusLine.classList.contains("busy"))
    {
        statusLine.classList.remove("busy");
        statusLine.classList.remove("closed");
        statusLine.textContent = "Open!";
        statusLine.classList.add("open");
    }
    else if (statusLine.classList.contains("open"))
    {
        statusLine.classList.remove("open");
        statusLine.textContent = "Closed!"
        statusLine.classList.add("closed");
    } 
    else if (statusLine.classList.contains("closed"))
    {
        statusLine.classList.remove("closed");
        statusLine.textContent = "Busy!";
        statusLine.classList.add("busy");
    }
    
      
});

addButton.addEventListener("click", function()
{
    hide.classList.add("hideH3");
    const location = document.createElement("li");
    location.textContent = newItem.value;

    locList.appendChild(location);
    newItem.value = "";
    addButton.disabled = true;
  
});

newItem.addEventListener("input", function() {
    addButton.disabled = newItem.value === "";
});

menuButton.addEventListener("click", function()
{
    const nameCheck = nameItem.value.trim();
    const descCheck = descItem.value.trim();
    hide2.classList.add("hideH32");

    if (nameCheck !== "" && descCheck !== "")
    {
        const row = document.createElement("tr");

        const nameRow = document.createElement("button");
        nameRow.textContent = nameCheck;
        nameRow.classList.add("name");
        row.appendChild(nameRow);

        nameRow.addEventListener("click", function()
        {
            nameRow.classList.add("done");
            nameRow.classList.remove("name");
            descRow.classList.add("done2");
            descRow.classList.remove("desc");
        });



        const descRow = document.createElement("td");
        descRow.textContent = descCheck;
        descRow.classList.add("desc");
        row.appendChild(descRow);

        const soldButton = document.createElement("button");
        soldButton.textContent = "Sold";
        soldButton.classList.add("sold");
        row.appendChild(soldButton);


        table.appendChild(row);
        nameItem.value = "";
        descItem.value = "";

        soldButton.addEventListener("click", function() 
        {
            let newSoldCount = parseFloat(soldCount.textContent)

            newSoldCount++;

            soldCount.textContent = newSoldCount;
            soldCount.classList.add("newSales");
            saleCheck.textContent = "You Got New Sales!"
        });

        
    }
});

// ----- run at load -----
