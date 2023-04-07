
const cardsdrag = document.querySelectorAll(".card");
      const zone = document.querySelector(".zone");

      // Add event listeners to cards
      cardsdrag.forEach((card) => {
        card.addEventListener("dragstart", dragStart);
        card.addEventListener("dragend", dragEnd);
      });

      // Add event listeners to drop zone
      zone.addEventListener("dragover", dragOver);
      zone.addEventListener("dragenter", dragEnter);
      zone.addEventListener("dragleave", dragLeave);
      zone.addEventListener("drop", drop);

      // Drag functions
      function dragStart() {
        this.classList.add("dragging");
      }

      function dragEnd() {
        this.classList.remove("dragging");
      }

      // Drop zone functions
      function dragOver(e) {
        e.preventDefault();
      }

      function dragEnter(e) {
        e.preventDefault();
        this.classList.add("hovered");
      }

      function dragLeave() {
        this.classList.remove("hovered");
      }

      function drop() {
        this.classList.remove("hovered");
        const card = document.querySelector(".dragging");
        this.appendChild(card);
      }