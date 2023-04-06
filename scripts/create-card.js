console.log("Fetch Data")
const subjectBox = document.querySelector("#subject-input")
const addBtn = document.querySelector("#add-btn-id")
const cards = document.querySelector("#cards")

addBtn.addEventListener("click",()=>{
    var subjecttxt = subjectBox.value
    console.log(subjecttxt)

    const card = document.createElement("div")
    const text = document.createTextNode(subjecttxt)

    card.classList.add("class")

    card.appendChild(text)
    cards.append(card)
})