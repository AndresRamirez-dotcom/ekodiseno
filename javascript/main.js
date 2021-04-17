window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll:1,
        dots: '.dots',
        draggable: true,
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    })


    new Glider(document.querySelector('.glider'), {
      slidesToShow: 1,
      slidesToScroll:1,
      dots: '.dots',
      draggable: true,
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 1,
              slidesToScroll: 1,
              itemWidth: 150,
              duration: 0.25
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              itemWidth: 150,
              duration: 0.25
            }
          }
        ]
  })

  })

const mainmenu = document.querySelector('.mainmenu')
const closemenu = document.querySelector('.closemenu')
const clickmenu = document.querySelector('.clickmenu')

clickmenu.addEventListener('click', show)
closemenu.addEventListener('click', hide)

function show(){
    mainmenu.style.display= 'flex'
    mainmenu.style.top= '0'
}

function hide(){
    mainmenu.style.top = '-100%'
}


var myCarousel = document.querySelector('.siguiente')

myCarousel.addEventListener('slide.bs.carousel', function () {
  next
})
