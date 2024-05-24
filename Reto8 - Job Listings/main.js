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
const appliedFilters = [];

/*** Creating articles dynamically ***/
const $cardsContainer = document.querySelector(".cards-container");
const $template = document.getElementById("card-template");
const $fragment = document.createDocumentFragment();

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.forEach((el) => {
      // console.log(el);
      const $clone = $template.content.cloneNode(true);
      const tags = [el.role, el.level, ...el.languages];
      // console.log();
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
      $clone.querySelector(".card").setAttribute("data-tags", tags.join(" "));
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
    $cardsContainer.appendChild($fragment);
  })
  .catch((error) => console.error("Error:", error));

// Filer section animation
function filterDisplay(element) {
  if (element.parentElement.classList.value.search("filter-item__active") < 0) {
    element.parentElement.classList.add("filter-item__active");
  } else {
    element.parentElement.classList.remove("filter-item__active");
  }
}

/*** Filter function ***/
const filterCards = (filters, cards) => {
  const $cards = $cardsContainer.querySelectorAll(".card");
  const $filterscContainer = document
    .querySelector(".selected-container")
    .querySelectorAll(".selected-tag");
  // const appliedFilters =
  const appliedFilters2 = [];
  for (const child of $filterscContainer) {
    appliedFilters2.push(child.dataset.tag);
  }
  console.log("Contenido", appliedFilters2.join(" "));

  for (const card of $cards) {
    // console.log(card);
    const $cardTags = card.getAttribute("data-tags").split(" ");
    // console.log("CardTags", $cardTags);
    appliedFilters2.forEach((filter) => {
      console.log(filter);
      if ($cardTags.includes(filter)) {
        // console.log("Si", card.classList);
        card.classList.remove("hidden");
      } else {
        // console.log("No", card.classList);
        card.classList.add("hidden");
      }
      if (!card.classList.contains("hidden")) {
      }
    });
  }

  /*for (const card of cards) {
    console.log(card);
    const $cardTags = card.getAttribute("data-tags").split(" ");
    console.log($cardTags);
    if (!card.classList.contains("hidden")) {
      if ($cardTags.includes(filters.dataset.tag)) {
        console.log("Si", card.classList);
        card.classList.remove("hidden");
      } else {
        console.log("No", card.classList);
        card.classList.add("hidden");
      }
    }
  }*/
  // const filterList = [];
  // const tagList = [];
  /* for (const filter of filters) {
    if (filter.classList.contains("selected-tag")) {
      // console.log(filter);
      const filterObj = {
        tag: filter.dataset.tag,
        isIncluded: false,
      };
      filterList.push(filterObj);
      // filterList.push(filter.dataset.tag);
    }
  }*/

  /*for (const card of cards) {
    const $cardTags = card.querySelectorAll(".btn-skill");
    // let isIncluded = false;
    // console.log(card);
    // console.log($cardTags.length);
    // console.log(card.querySelector(".skills-container"));
    for (const filter of filterList) {
      filter.isIncluded = false;
      $cardTags.forEach((btnTag) => {
        console.log(card);
        if (btnTag.dataset.tag === filter.tag) {
          console.log(filter.tag);
          filter.isIncluded = true;
          console.log(filter.isIncluded);
          //   card.classList.remove("hidden");
        }
      });

      if (filter.isIncluded) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
      console.log(filterList);
    }
    // $cardTags.forEach((btnTag) => {
    //   console.log(card);
    //   // tagList.push(btnTag.dataset.tag);
    //   filterList.forEach((filter) => {

    //   });
    //   // if (filter === btnTag.dataset.tag) {
    //   //   console.log(filter, "Si");
    //   // } else {
    //   //   console.log(filter, "No");
    //   // }
    // });
    // isIncluded ? card.classList.remove("hidden") : card.classList.add("hidden");
  }*/
  // console.log(tagList);
};

/*** Remove filters ***/
const removeFilter = (filter) => {};

/*** Global Click Event ***/
document.addEventListener("click", (e) => {
  // console.log(e.target.closest("article").querySelector(".skills-container"));
  /*** Open Card ***/
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

  /*** Adding Btns-tags & filtering ***/
  if (e.target.matches(".btn-skill")) {
    const $selectedContainer = document.querySelector(".selected-container");
    const $tagTemplate = document.getElementById("selct-tag-template");
    const $clone = $tagTemplate.content.cloneNode(true);
    /*-- Validading if tag exists --*/
    const $tagsSelected = $selectedContainer.querySelectorAll(".selected-tag");
    let isSelected = false;
    $tagsSelected.forEach((el) => {
      if (el.dataset.tag === e.target.dataset.tag) {
        isSelected = true;
      }
    });
    if (!isSelected) {
      $clone.querySelector("div").classList.add("btn-skill", "selected-tag");
      $clone.querySelector("div").dataset.tag = e.target.dataset.tag;
      $clone.querySelector("span").textContent = e.target.dataset.tag;
      $clone.querySelector("button").classList.add("remove-tag");
      $selectedContainer.appendChild($clone);
      /** Add filter to list **/
      appliedFilters.push(e.target.dataset.tag);
    }
    /*-- Filtering content --*/
    // filterCards($selectedContainer.children, $cardsContainer.children);
    filterCards(e.target, $cardsContainer.querySelectorAll(".card"));
    // filterCards();
    // console.log("Filtros", appliedFilters);
  }
  /*** Removing Btns-tags ***/
  if (e.target.matches(".remove-tag")) {
    e.target.closest(".selected-tag").remove();
    // filterCards();
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
