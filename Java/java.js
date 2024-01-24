// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btnList = document.getElementsByClassName("myBtn");

// Get the <button> element that closes the modal
var closeBtn = document.getElementById("closeBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closeSpan");

// When the user clicks on the button, open the modal
btnList[0].onclick = displayModal;
btnList[1].onclick = displayModal;
btnList[2].onclick = displayModal;
btnList[3].onclick = displayModal;
if (btnList.length > 4) {
  btnList[4].onclick = displayModal;
  btnList[5].onclick = displayModal;
}


// When the user clicks on <button> or span (x), close the modal
closeBtn.onclick = closeModal;
span.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

