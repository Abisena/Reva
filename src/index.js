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
