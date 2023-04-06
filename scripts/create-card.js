console.log("Fetch Data");
const subjectBox = document.querySelector("#subject-input");
const teacherBox = document.querySelector("#teacher-input");
const addBtn = document.querySelector("#add-btn-id");
const cards = document.querySelector("#cards");

addBtn.addEventListener("click", () => {
  var subjecttxt = subjectBox.value;
  var teachertxt = teacherBox.value;

  if (subjecttxt === "" && subjecttxt === null) {
    alert("Please fill your subject atleast");
  }
  if (subjecttxt.length >= 20 && teachertxt.length >= 20) {
    alert("Details must be shorter than 20 characters");
  } else if (subjecttxt.length <= 3 && teachertxt.length <= 3) {
    alert("Details must be longer than 3 characters");
  } else {
    console.log(subjecttxt);
    const card = document.createElement("div");
    const subjectcard = document.createElement("span");
    const teachercard = document.createElement("span");
    subjectcard.innerText = subjecttxt;
    teachercard.innerText = teachertxt;

    card.classList.add("card");
    subjectcard.setAttribute("id", "subjects");
    teachercard.setAttribute("id", "subject-teachers");
    card.appendChild(subjectcard);
    card.appendChild(teachercard);
    cards.append(card);
  }
});

$(window).scroll(function() {
  console.log("l")
});

