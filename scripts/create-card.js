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
    var card = document.createElement("div");
    var subjectcard = document.createElement("span");
    var teachercard = document.createElement("span");
    subjectcard.innerText = subjecttxt;
    teachercard.innerText = teachertxt;
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragend", dragEnd);
    card.classList.add("card");
    card.setAttribute('draggable', 'true');
    subjectcard.setAttribute("id", "subjects");
    teachercard.setAttribute("id", "subject-teachers");
    card.appendChild(subjectcard);
    card.appendChild(teachercard);
    cards.append(card);
  }
});
// window.onscroll = function() {
//   console.log('scrolling');
// };


