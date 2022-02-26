const dmSwitcher = document.querySelector('.dm__switched');

function setColor(cssVar, color){
    document.documentElement.style.setProperty(cssVar, color);
}

dmSwitcher.addEventListener('click', function(){
    //Switch on
    if(dmSwitcher.classList.value == "dm__switched") {
        dmSwitcher.classList.add('on');
        setColor('--bg-color', 'hsl(230, 17%, 14%)');
        setColor('--top-bg-patern', 'hsl(232, 19%, 15%)');
        setColor('--card-bg-color', 'hsl(228, 28%, 20%)');
        setColor('--primary-text-color', '#fff');
        setColor('--secundary-text-color', 'hsl(228, 34%, 66%)');
    }
    //Switch off
    else {
        dmSwitcher.classList.remove('on');
        setColor('--bg-color', '#fff');
        setColor('--top-bg-patern', 'hsl(225, 100%, 98%)');
        setColor('--card-bg-color', 'hsl(227, 47%, 96%)');
        setColor('--primary-text-color', 'hsl(230, 17%, 14%)');
        setColor('--secundary-text-color', 'hsl(228, 12%, 44%)');
    }
});