const modal = document.getElementById("project-modal");
const modalContent = document.querySelector(".modal-content");
const closeModal = document.querySelector(".close");

function openModal(imageSrc, title, projectLink) {
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalViewProject = document.getElementById("modal-view-project");

  modalImage.src = imageSrc;
  modalTitle.textContent = title;
  modalViewProject.href = projectLink;

  modal.style.display = "block";
}

function closeModalWindow() {
  modal.style.display = "none";
}

closeModal.addEventListener("click", closeModalWindow);
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModalWindow();
  }
});

const viewProjectLinks = document.querySelectorAll(".project a");

viewProjectLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const projectImage = this.closest(".project").querySelector("img");
    const imageSrc = projectImage.src;
    const projectTitle =
      this.closest(".project").querySelector("h3").textContent;
    const projectLink = this.href;

    openModal(imageSrc, projectTitle, projectLink);
  });
});
