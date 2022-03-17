const c = console.log;

const card = document.querySelector('.card');
const skillsContainer = document.querySelector('.skills-container');
const btnCardDisplay = document.querySelector('.btn-display-skillset');
const btnIcon = document.querySelector('.btn-display__icon');
const btnOpenFilters = document.querySelector('.filter__btn');
const bgModal = document.querySelector('.filters__bg-modal');
const filtersModal = document.querySelector('.filters__modal');
const btnCloseFilters = document.querySelector('.close-modal');
//Filter items
const btnItemCompany = document.getElementById('filter-item__company');
const btnItemPosition = document.getElementById('filter-item__position-title');
const btnItemTech = document.getElementById('filter-item__tech');

function filterDisplay(element) {
    element.parentElement.classList.add('filter-item__active');
}

btnCardDisplay.addEventListener('click', function(){
    if(skillsContainer.classList.length == 1) {
        card.classList.add('display');
        skillsContainer.classList.add('active')
        btnCardDisplay.style.color = 'var(--dark-grey-color)';
        btnIcon.classList.remove('icon-expand_more');
        btnIcon.classList.add('icon-expand_less');
    }
    else {
        card.classList.remove('display');
        skillsContainer.classList.remove('active')
        btnCardDisplay.style.color = 'var(--gray-color)';
        btnIcon.classList.remove('icon-expand_less');
        btnIcon.classList.add('icon-expand_more');
    }
});

btnOpenFilters.addEventListener('click', function(){
    bgModal.classList.add('active');
    filtersModal.classList.add('filters-active');
});

btnCloseFilters.addEventListener('click', function(){
    bgModal.classList.remove('active');
    filtersModal.classList.remove('filters-active');
});

/** Filter Items display **/
btnItemCompany.addEventListener('click', function(){
    // c(btnItemCompany.parentElement.classList);
    filterDisplay(btnItemCompany);
});

btnItemPosition.addEventListener('click', function(){
    filterDisplay(btnItemPosition);
});

btnItemTech.addEventListener('click', function(){
    filterDisplay(btnItemTech);
});

const jobs = [
    {
        id: 1,
        logoImg: "./assets",
        company: "Photosnap",
        jobTile: "Senior Frontend Developer",
        uploadDate: "1d ago",
        workTime: "Full Time",
        WorkLocation: "USA ",
    },
];

const skillSets = [
    {
        sk1: "HTML",
        sk2: "CSS",
        sk3: "JavaScript"
    },
];

c(jobs, skillSets);