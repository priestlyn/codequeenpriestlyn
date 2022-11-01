const usernameInput = document.getElementById("username")
const activityInput = document.getElementById("activity")
const timeInput = document.getElementById("time")
const button = document.getElementById("save")
const close = document.getElementById("close")

const getElementValue = (element) => {
return element.value
}

button.addEventListener("click", (event) =>
{
    event.preventDefault();

    const usernameValue = getElementValue(usernameInput)
    const activityValue = getElementValue(activityInput)
    const timeValue = getElementValue(timeInput)
    

    const tableRow = document.createElement("tr")

    const usernameId = document.createElement("td")
    usernameId.innerHTML = usernameValue
    tableRow.appendChild(usernameId)

    const activityId = document.createElement("td")
    activityId.innerHTML = activityValue
    tableRow.appendChild(activityId)

    const timeId = document.createElement("td")
    timeId.innerHTML = timeValue
    tableRow.appendChild(timeId)
    
    close.appendChild(tableRow)
 
 
 
}
)