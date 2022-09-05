(() => {
  const refs = {
    openModalBtn1: document.querySelector("[data-modal-open]"),
    openModalBtn2: document.querySelector("[hero-modal-open]"),
    openModalBtn3: document.querySelector("[offers-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn1.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.openModalBtn3.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
