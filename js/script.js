let mainBack = document.querySelector('.main'),
    mainContent = document.querySelector('.main__wrapper'),
    addContent = document.querySelector('.main__moreInfo'),
    mainAdd = document.querySelector('.mainAdd'),
    Add = document.querySelector('.mainAdd__content');

window.addEventListener('load', ()=>{
    anime({
        targets: mainBack,
        rotate: '-5deg',
        
    })
});

window.addEventListener('load', ()=> {
    anime({
        targets: mainContent,
        rotate: '5',
        
    })
});

window.addEventListener('load', ()=>{
    
    anime({
        targets: mainAdd,
        opacity: '0',
        
    })
})

addContent.addEventListener('click', () => {
    anime({
        targets: mainAdd,
        rotate: '-5deg',
    });
    anime({
        targets: Add,
        rotate: '5',
    });
    anime({
        targets: mainAdd,
        opacity: '1',
    });
    
})

