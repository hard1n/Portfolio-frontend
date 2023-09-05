const c = console.log;

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

/** Create articles funciont**/
const $container = document.querySelector(".main-container");
const $template = document.getElementById("card-template");
const $fragment = document.createDocumentFragment();

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((el) => {
      const $clone = $template.content.cloneNode(true);
      const tags = [el.role, ...el.languages];
      // console.log(btnTags);
      $clone.querySelector("img").setAttribute("src", el.logo);
      $clone.querySelector(".company__name").textContent = el.company;
      $clone.querySelector(".card__title").textContent = el.position;
      $clone.querySelector("#posted-at").textContent = el.postedAt;
      $clone.querySelector("#contract").textContent = el.contract;
      $clone.querySelector("#job-location").textContent = el.location;
      // Creating Tag-btns
      tags.forEach((tag) => {
        const $btnTag = document.createElement("button");
        $btnTag.classList.add("btn-skill");
        $btnTag.textContent = tag;
        $clone
          .querySelector(".skills-container")
          .insertAdjacentElement("beforeend", $btnTag);
      });

      $fragment.appendChild($clone);
    });
    $container.appendChild($fragment);
  })
  .catch((error) => console.error("Error:", error));

// document.addEventListener("DOMContentLoaded", getData);
// const newArticle = document.createElement("article");
// const newHeader = document.createElement("header");
// const newImg = document.createElement("img");
// const newTitle = document.createElement("h2");
// const newSection = document.createElement("section");
// const newParagraph = document.createElement("");
// const newFooter = document.createElement("footer");

// newHeader.append(newImg, newTitle);
// newArticle.append(newHeader, newSection, newFooter);

// const articlesContainer = document.querySelector(".main-container");
// articlesContainer.appendChild(newArticle);

// function createArticle {
//     <article class="card tag-new">
//             <header class="company">
//                 <img src="./assets/imgs/photosnap.svg" alt="" class="company__logo">
//                 <h2 class="company__name">Photosnap</h2>
//             </header>
//             <section class="info-section">
//                 <p class="card__title">Senior Frontend Developer</p>
//                 <p class="card__job-details">
//                     <span id="date-uploaded">1d ago</span>
//                     <span id="work-time">Full Time</span>
//                     <span id="work-location">USA only</span>
//                 </p>
//             </section>
//             <footer class="card__skillset">
//                 <button class="btn-display-skillset">
//                     <span class="btn-display__icon icon-expand_more"></span>
//                 </button>
//                 <div class="skills-container">
//                     <button class="btn-skill">Frontend</button>
//                     <button class="btn-skill">Senior</button>
//                     <button class="btn-skill">HTML</button>
//                     <button class="btn-skill">CSS</button>
//                     <button class="btn-skill">JavaScript</button>
//                 </div>
//             </footer>
//         </article>
// }

document.addEventListener("click", (e) => {
  // console.log(e.target.closest("article").querySelector(".skills-container"));
  if (e.target.matches(`.btn-display-skillset, .btn-display-skillset *`)) {
    const thisContainer = e.target
      .closest("article")
      .querySelector(".skills-container");
    const thisArticle = e.target.closest("article");
    if (thisContainer.classList.length == 1) {
      // card.classList.add("display");
      thisContainer.classList.add("active");
      thisArticle.querySelector("button").style.color =
        "var(--dark-grey-color)";
      e.target.querySelector("span").classList.remove("icon-expand_more");
      e.target.querySelector("span").classList.add("icon-expand_less");
    } else {
      // card.classList.remove("display");
      thisContainer.classList.remove("active");
      thisArticle.querySelector("button").style.color = "var(--gray-color)";
      e.target.querySelector("span").classList.remove("icon-expand_less");
      e.target.querySelector("span").classList.add("icon-expand_more");
    }
  }
});

btnCardDisplay.addEventListener("click", function () {});

btnOpenFilters.addEventListener("click", function () {
  // bgModal.classList.add("active");
  bgModal.classList.add("filters-active");
  // filtersModal.classList.add("filters-active");
  console.log("Tu maldita madre");
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
