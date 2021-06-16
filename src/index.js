const nonProfitContainer = document.querySelector("#browse-nonprofits")

fetch("http://localhost:3000/nonprofits")
  .then(res => res.json())
  .then(nonProfits => {
    nonProfits.forEach(nonProfit => {
      const nonProfitName = nonProfit.name
      const nonProfitId = nonProfit.id
      const newSpanElement = document.createElement("span")
      newSpanElement.innerHTML = nonProfitName
      nonProfitContainer.append(newSpanElement)
      newSpanElement.addEventListener("click", () => {
        fetch(`http://localhost:3000/nonprofits/${nonProfitId}`)
          .then(res => res.json())
          .then(nonProfit => {
            const nonProfitName = nonProfit.name
            const nameElement = document.querySelector("p#name")
            nameElement.innerHTML = nonProfitName

            const nonProfitImage = document.querySelector("#image")
            const imageElement = nonProfit.image
            nonProfitImage.src = imageElement

            const nonProfitDescription = document.querySelector("#description")
            const descriptionElement = nonProfit.description
            nonProfitDescription.innerHTML = descriptionElement

            const donationElement = document.querySelector("#donations")
            const nonProfitDonation = nonProfit.donations
            donationElement.innerHTML = nonProfitDonation

            const formId = document.querySelector("#nonprofitId")
            formId.value = nonProfit.id
          })
      })
    })
  })

const donationForm = document.querySelector("#donation-form")
donationForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const newDonationInput = document.querySelector("input#donations")
  const newDonationAmount = parseInt(newDonationInput.value)
  const nonProfitId = document.querySelector("#nonprofitId").value

  const donationElement = document.querySelector("#donations")
  const currentDonationAmount = parseInt(donationElement.innerHTML)

  const donationTotal = newDonationAmount + currentDonationAmount

  fetch(`http://localhost:3000/nonprofits/${nonProfitId}`, {
    method: "PATCH",
    headers: {
  	"Content-Type": "application/json",
  	Accept: "application/json"
    },
    body: JSON.stringify({
      donations: donationTotal
    })
  })
  .then(res => res.json())
  .then(updatedNonProfit => {
    const updatedDonationAmount = updatedNonProfit.donations
    const donationElement = document.querySelector("#donations")
    donationElement.innerHTML = updatedDonationAmount
  })
})
