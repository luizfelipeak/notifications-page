const notificationCounter = document.getElementById("notification-count");
const markReadBtn = document.getElementById("mark-read-btn");
const notifContentContainer = document.querySelectorAll(".notification__content__container");

markReadBtn.addEventListener("click", () => {
  notificationCounter.innerHTML = "0";
  notifContentContainer.forEach((item) => {
    if(!item.classList.contains("read")) {
      item.classList.add("read");
    }
  });
});