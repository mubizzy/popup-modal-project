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
