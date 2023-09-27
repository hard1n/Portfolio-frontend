const card = document.querySelector(".card");
const skillsContainer = document.querySelector(".skills-container");
const btnCardDisplay = document.querySelector(".btn-display-skillset");
const btnIcon = document.querySelector(".btn-display__icon");
const btnOpenFilters = document.querySelector(".filter__btn");
const bgModal = document.querySelector(".filters__bg-modal");
const filtersModal = document.querySelector(".filters__modal");
const btnCloseFilters = document.querySelector(".close-modal");
//Filter items
const btnItemCompany = document.getElementById("filter-item__company");
const btnItemPosition = document.getElementById("filter-item__position-title");
const btnItemTech = document.getElementById("filter-item__tech");

function filterDisplay(element) {
  if (element.parentElement.classList.value.search("filter-item__active") < 0) {
    element.parentElement.classList.add("filter-item__active");
  } else {
    element.parentElement.classList.remove("filter-item__active");
  }
}

/** Create articles dynamically **/
const $container = document.querySelector(".cards-container");
const $template = document.getElementById("card-template");
const $fragment = document.createDocumentFragment();

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((el) => {
      console.log(el);
      const $clone = $template.content.cloneNode(true);
      const tags = [el.role, el.level, ...el.languages];
      /** Adding tags to the card **/
      if (el.new) {
        const $span = document.createElement("span");
        $span.textContent = "NEW!";
        $span.classList.add("tag", "new-tag");
        $clone
          .querySelector(".card__header")
          .insertAdjacentElement("beforeend", $span);
      }
      if (el.featured) {
        const $span = document.createElement("span");
        $span.textContent = "FEATURED";
        $span.classList.add("tag", "featured-tag");
        $clone.querySelector("article").classList.add("featured");
        $clone
          .querySelector(".card__header")
          .insertAdjacentElement("beforeend", $span);
      }
      /*** Adding info to the card ***/
      $clone.querySelector("img").setAttribute("src", el.logo);
      $clone.querySelector(".company__name").textContent = el.company;
      $clone.querySelector(".card__title").textContent = el.position;
      $clone.querySelector("#posted-at").textContent = el.postedAt;
      $clone.querySelector("#contract").textContent = el.contract;
      $clone.querySelector("#job-location").textContent = el.location;
      //* Data attributes to the btn *//
      //* Creating Tag-btns *//
      tags.forEach((tag) => {
        const $btnTag = document.createElement("button");
        $btnTag.classList.add("btn-skill");
        $btnTag.textContent = tag;
        $btnTag.dataset.tag = tag;
        $clone
          .querySelector(".skills-container")
          .insertAdjacentElement("beforeend", $btnTag);
      });

      $fragment.appendChild($clone);
    });
    $container.appendChild($fragment);
  })
  .catch((error) => console.error("Error:", error));

/*** Global Click Event ***/
document.addEventListener("click", (e) => {
  // console.log(e.target.closest("article").querySelector(".skills-container"));
  /** Open Card **/
  if (e.target.matches(`.btn-display-skillset, .btn-display-skillset *`)) {
    const thisArticle = e.target.closest("article");
    const thisContainer = thisArticle.querySelector(".skills-container");
    const thisOpenBtn = thisArticle.querySelector(".btn-display-skillset");
    if (thisContainer.classList.length == 1) {
      // card.classList.add("display");
      thisContainer.classList.add("active");
      thisOpenBtn.style.color = "var(--dark-grey-color)";
      thisOpenBtn.querySelector("span").classList.remove("icon-expand_more");
      thisOpenBtn.querySelector("span").classList.add("icon-expand_less");
    } else {
      // card.classList.remove("display");
      thisContainer.classList.remove("active");
      thisOpenBtn.style.color = "var(--gray-color)";
      thisOpenBtn.querySelector("span").classList.remove("icon-expand_less");
      thisOpenBtn.querySelector("span").classList.add("icon-expand_more");
    }
  }

  /*** Filtering by Btns-tags ***/
  if (e.target.matches(".btn-skill")) {
    const $selectedContainer = document.querySelector(".selected-container");
    const $tagTemplate = document.getElementById("selct-tag-template");
    const $clone = $tagTemplate.content.cloneNode(true);
    $clone.querySelector("span").textContent = e.target.dataset.tag;
    $clone.querySelector("div").classList.add("btn-skill", "selected-tag");
    $clone.querySelector("button").classList.add("remove-tag");
    $selectedContainer.appendChild($clone);
  }
  /*** Remove Btns-tags ***/
  if (e.target.matches(".remove-tag")) {
    console.log(e.target.closest(".selected-tag"));
    e.target.closest(".selected-tag").remove();
  }
});

// btnCardDisplay.addEventListener("click", function () {});

btnOpenFilters.addEventListener("click", function () {
  // bgModal.classList.add("active");
  bgModal.classList.add("filters-active");
  // filtersModal.classList.add("filters-active");
});

btnCloseFilters.addEventListener("click", function () {
  // bgModal.classList.remove("active");
  bgModal.classList.remove("filters-active");
  // filtersModal.classList.remove("filters-active");
});

/** Filter Items display **/
btnItemCompany.addEventListener("click", function () {
  // c(btnItemCompany.parentElement.classList);
  filterDisplay(btnItemCompany);
});

btnItemPosition.addEventListener("click", function () {
  filterDisplay(btnItemPosition);
});

btnItemTech.addEventListener("click", function () {
  filterDisplay(btnItemTech);
});
