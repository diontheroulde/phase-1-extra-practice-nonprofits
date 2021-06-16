
const nonProfitImage = document.querySelector("img#image")
const nonProfitDescription = document.querySelector("p#description")

const nonProfitDetailDiv = document.querySelector("div#detailed-info")

document.addEventListener("DOMContentLoaded", () => {

fetch("http://localhost:3000/nonprofits")
.then(res => res.json())
.then(data => {
        const nonProfitDiv = document.querySelector("#browse-nonprofits")
        const nonProfitList = document.createElement('ul')
        nonProfitDiv.append(nonProfitList)
        const nonProfitListItems = document.createElement("li")
        const nonProfitListName = document.createElement("p")
        nonProfitListItems.append(nonProfitListName)
        nonProfitListName.innerHTML = data.name
        nonProfitList.append(nonProfitListItems)
      




    })
        
        
    })
 

  













// data.nonprofits.forEach(nonprofit => {
//     const nonProfitDiv = document.querySelector("div#browse-nonprofits")
//     const nonProfitList = document.createElement('ul')
//     const nonProfitListItems = document.createElement("li")
//     const nonProfitListName = document.createElement("p")
//     nonProfitListName.innerHTML = nonprofit.name
//     nonProfitListItems.append(nonProfitListName)
//     nonProfitList.append(nonProfitListItems)
//     nonProfitDiv.append(nonProfitList)