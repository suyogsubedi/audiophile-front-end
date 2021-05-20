const hamBurger = document.querySelector("#hamBurger");
const navigation = document.querySelector(".navigation");
const close = document.querySelector("#close");

hamBurger.addEventListener("click", () => {
  console.log("Hello");
  navigation.style.display = "block";
});

close.addEventListener("click", () => {
  navigation.style.display = "none";
  console.log("closing");
});
