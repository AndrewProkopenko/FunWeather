let burger = document.getElementById( 'burger'), 
    menu = document.querySelector('.header-menu'); 
burger.addEventListener('click', () => { 
    burger.classList.toggle('burger-open');
    menu.classList.toggle('header-menu-close')
}); 

let flag = 1; 
let widgets = document.querySelectorAll('.widgets-section img');
let btnWidLeft = document.querySelector('.icon-left-open');
let btnWidRight = document.querySelector('.icon-right-open');

widgets.forEach ( ( items, index ) => { 
    items.addEventListener( 'mousemove', () => { 
        items.classList.add('zoom-up');
        removeZoom (widgets, items);
    })
    items.addEventListener( 'mouseleave', () => { 
        items.classList.remove('zoom-up');
        items.classList.add('zoom-select-up');
        flag = index; 
        
    })
})

function removeZoom(wid, items) { 
    wid.forEach( ( items, index ) => { 
        items.classList.remove('zoom-select-up');
    })
}

btnWidLeft.addEventListener('click', () => { 
    switch( flag ) { 
        case 0 : animationBtn (btnWidLeft , 'btn-left-animation') ; break;
        case 1 : functionBtnShift(flag, 0); flag-- ; break;
        case 2 : functionBtnShift(flag, 1); flag-- ; break;
    }
})
btnWidRight.addEventListener('click', () => { 
    switch( flag ) { 
        case 0 : functionBtnShift(flag, 1); flag++ ; break;
        case 1 : functionBtnShift(flag, 2); flag++ ; break;
        case 2 : animationBtn (btnWidRight , 'btn-right-animation') ; break;
    }
})

function functionBtnShift(flag, indexCase) { 
    widgets[indexCase].classList.add('zoom-select-up'); 
    widgets[flag].classList.remove('zoom-select-up');
}

function animationBtn (btn, className) { 
    console.log(flag)
    btn.classList.add(className);
    setTimeout(() => {  btn.classList.remove(className)}, 401)
}

const anchors = document.querySelectorAll('a[href*="#"]'); 

for (let anchor of anchors) { 
    anchor.addEventListener("click", function(event) { 
        event.preventDefault();  
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth", 
            block: "start"
        })
    })
}
