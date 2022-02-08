const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const userName = document.querySelector('.user-name');
const userProfession = document.querySelector('.user-profession');
const userComment = document.querySelector('.user-comment');
const userPicture = document.querySelectorAll('.user__picture');
let imgSelected = 0;

nextBtn.addEventListener('click', function() {
    if (userName.textContent == "Tanya Sinclair"){
        userName.textContent = john.userName;
        userProfession.textContent = john.userProfession;
        userComment.textContent = john.userComment;
        userPicture[imgSelected].classList.remove('active');
        imgSelected++;
        userPicture[imgSelected].classList.add('active');
    }
    else{
        userName.textContent = tanya.userName;
        userProfession.textContent = tanya.userProfession;
        userComment.textContent = tanya.userComment;
        userPicture[imgSelected].classList.remove('active');
        imgSelected--;
        userPicture[imgSelected].classList.add('active');
    }
});

prevBtn.addEventListener('click', function() {
    if (userName.textContent == "Tanya Sinclair"){
        userName.textContent = john.userName;
        userProfession.textContent = john.userProfession;
        userComment.textContent = john.userComment;
        userPicture[imgSelected].classList.remove('active');
        imgSelected++;
        userPicture[imgSelected].classList.add('active');
    }
    else {
        userName.textContent = tanya.userName;
        userProfession.textContent = tanya.userProfession;
        userComment.textContent = tanya.userComment;
        userPicture[imgSelected].classList.remove('active');
        imgSelected--;
        userPicture[imgSelected].classList.add('active');
    }
});

var tanya = {
    id: 1,
    userComment: '" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. "',
    userName: "Tanya Sinclair",
    userProfession: "UX Engineer"
};

var john = {
    id: 2,
    userComment: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    userName: "John Tarkpor",
    userProfession: "Junior Front-end Developer"
};