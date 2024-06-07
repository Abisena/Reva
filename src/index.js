// Modal functions
export function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  modal.style.display = "block";
  modalImg.src = "./img/" + imageSrc;
  captionText.innerHTML = imageSrc;
}

export function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

const openModalButton = document.getElementById("openModalButton");

openModalButton.addEventListener("click", () => {
  const imageSrc = "path/to/image.jpg";
  openModal(imageSrc);
});

const closeModalButton = document.getElementById("closeModalButton");

closeModalButton.addEventListener("click", () => {
  closeModal();
});
