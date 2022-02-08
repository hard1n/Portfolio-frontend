const shareButton = document.querySelector('#share');

shareButton.addEventListener('click', function() {
        const modal = document.getElementById('modal-share');
        if (modal.classList == "modal-share") {
            openModal(modal);
            shareButton.style.backgroundColor = "hsl(217, 19%, 35%)";
        }
        else {
            closeModal(modal);
            shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
        }
});

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}