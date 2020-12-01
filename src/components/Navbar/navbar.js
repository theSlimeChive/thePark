window.onscroll = function(){
    let top = window.pageYOffset || document.documentElement.scrollTop;
    console.log(top);

    // if at the top of page, be transparent ... if top > 100 turn the background white
    if (top > 100) {
        document.getElementById('scrollable').style.backgroundColor = "white";
    }

    if (top < 99) {
        this.document.getElementById('scrollable').style.backgroundColor = "blanchedalmond"
    }

    /*if (top == 0) {
        document.getElementById('scrollable').classList.add('bg-transparent');
    } else {
        document.getElementById('scrollable').classList.add('bg-white')
    }*/
} 