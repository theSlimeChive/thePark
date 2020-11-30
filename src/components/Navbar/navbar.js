window.onscroll = function(){
    let top = window.pageYOffset || document.documentElement.scrollTop;
    console.log(top);

    document.getElementById('scrollable').classList.toggle(() => {
        if (top == 0) {
            document.getElementById('scrollable').classList.add('bg-transparent');
        } else if (top > 0) {
            document.getElementById('scrollable').classList.add('bg-white')
        }
    })
    

    /*if (top == 0) {
        document.getElementById('scrollable').classList.add('bg-transparent');
    } else {
        document.getElementById('scrollable').classList.add('bg-white')
    }*/
} 