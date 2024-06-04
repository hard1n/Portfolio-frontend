const $iFrame = document.querySelector(".web-viewer");
const $modal = document.querySelector(".modal");
const $projectsContainer = document.querySelector(".cards-container");
const $fragment = document.createDocumentFragment();
const $template = document.getElementById("card-template");
const $card = document.querySelector(".card");

/** Creating HTML elemts **/
const $div = document.createElement("div");
const $header = document.createElement("header");
const $btn = document.createElement("button");
console.log($card);

fetch("./data.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.map((item) => {
      console.log(item);
      const $clone = $template.content.cloneNode(true);

      $clone.querySelector(".card").dataset.url = item.url;
      $clone.querySelector(".card__title").textContent = item.title;
      $clone.querySelector(".card__description").textContent = item.description;
      // $clone.querySelector(".card-img").setAttribute("src", item.preview);
      $clone.querySelector(
        ".card"
      ).style.backgroundImage = `url(${item.preview})`;
      $fragment.appendChild($clone);
    });
    $projectsContainer.append($fragment);
  });

document.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  if (e.target.matches(".card, .card *")) {
    let url = e.target.closest("article.card").dataset.url;
    console.log(url);
    $modal.classList.add("show-bg");
    $modal.querySelector(".modal-content").classList.add("show");
    $iFrame.setAttribute("src", url);
  }
  // Mobile layout btn
  if (e.target.matches("#mobile-layout, #mobile-layout *")) {
    $modal.querySelector(".modal-content").classList.add("mobile--layout");
    $modal.querySelector(".layout__header").classList.add("mobile");
  }
  // Desktop layout btn
  if (e.target.matches("#desktop-layout, #desktop-layout *")) {
    $modal.querySelector(".modal-content").classList.remove("mobile--layout");
    $modal.querySelector(".layout__header").classList.remove("mobile");
  }
  // Close layout btn
  if (e.target.matches(".close-btn, .close-btn *")) {
    // e.target.closest("div.layout").remove();
    e.target.closest("div.modal").classList.remove("show-bg");
  }
});
