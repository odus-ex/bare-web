let TOAST_COUNT = 0;
function createToast() {
  let motherDiv = document.getElementById("motherToast");

  let toast = document.createElement("div");
  toast.setAttribute("class", "toast-wrapper toast-fade-in");
  TOAST_COUNT += 1;
  toast.innerHTML = `This is a toast ${TOAST_COUNT}`;

  toast.addEventListener("click", () => toast.remove());
  console.log(toast);

  setTimeout(() => {
    toast.setAttribute("class", "toast-wrapper toast-fade-out");
    setTimeout(() => {
      toast.remove();
    }, 500); //time is equal to fade out animation time
  }, 3000);

  motherDiv.appendChild(toast);
}

//separate removing logic
// separate auto remove logic
//parameter to give for auto remove delay
