/*=============== SHOW MODAL ===============*/
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton);
  const modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", () => {
      modalContainer.classList.add("show-modal");
    });
  }
};
showModal("open-modal", "modal-container");

/*=============== CLOSE MODAL ===============*/
const closeBtn = document.querySelectorAll(".close-modal");

function closeModal() {
  const modalContainer = document.getElementById("modal-container");
  modalContainer.classList.remove("show-modal");
}
closeBtn.forEach((s) => s.addEventListener("click", closeModal));

/*=========SHOW MODAL 2=========*/
// const openBtn = document.getElementById("open-modal");
// const modalContainer = document.getElementById("modal-container");
// if (openBtn && modalContainer) {
//   openBtn.addEventListener("click", () => {
//     modalContainer.classList.add("show-modal");
//   });
// }
