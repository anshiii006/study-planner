$(document).ready(function(){
    $(".owl-carousel-month").owlCarousel({
        items : 5,
        margin:20
    })
})
$(document).ready(function(){
    $(".owl-carousel-days").owlCarousel({
        items : 6,
        margin:12
    })
})

const contents = document.querySelectorAll('.content')

contents.forEach(content => {
    let startX = 0
    let currentX = 0
    let dragging = false

    content.addEventListener('mousedown' , (e) => {
        dragging = true
        startX = e.pageX
    })

    document.addEventListener('mousemove' , (e) => {
        if(!dragging) return
        currentX = e.pageX - startX
        if(currentX < 0){
            content.style.transform = `translateX(${currentX}px)`
        }
    })

    document.addEventListener('mouseup' , () => {
        if(!dragging) return;
        dragging = false

        if(currentX < -60){
            content.style.transform = `translateX(-55px)`
        }else{
            content.style.transform = `translateX(0)`
        }
    })
    
})