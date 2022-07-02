


const tabLists = document.querySelector('[role="tablist"]');
const tabs = tabLists.querySelector('[role="tab]');

tabLists.addEventListener('keydown', (evnt) => {
    const keydownLeft = 37;
    const keydownRight = 39;

    //change the tabindex of the current tab to -1
    if(evnt.keyCode === keydownLeft || evnt.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
    }

    //if the right key is pushed, move to the next tab on the right
    if (evnt.keyCode === keydownRight) {
        tabFocus++;
        
    }

    //if the left key is pushed, move to the next tab on the left
    if (evnt.keyCode === keydownleft) {
        tabFocus--;
        
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
})