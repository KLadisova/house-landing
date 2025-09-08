// const button = document.getElementById("btn-rectangle");
// button.addEventListener("click", function () {
//   button.style.backgroundColor = "#376B44";
//   button.style.color = "#FFFFFF";
// // });
// const buttons = document.querySelectorAll(".btn-rectangle");

// buttons.forEach(button => {
//     button.addEventListener("click", function () {
//       button.style.backgroundColor = "#376B44";
//       button.style.color = "#FFFFFF";
//     });
//   });

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active")
    });
    target.classList.add("active");
  });
});
