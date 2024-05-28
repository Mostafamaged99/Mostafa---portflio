

// ! ===== HTML ELEMENTS =====!\\
const home = document.querySelector('.home');
const projectsBtn = document.querySelector(".btn-projects")
const slider = document.querySelector(".slider")
const back = document.querySelector("#back")
// ! ===== VARIABLES =====!\\



// ! ===== FUNCTIONS =====!\\
const swiperEl = document.querySelector('swiper-container')

    const params = {
      injectStyles: [`
      .swiper-pagination-bullet {
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 15px;
        color: #fff;
        opacity: 1;
        background: rgba(0, 0, 0, 0.2);
        transition: all 1s;
      }

      .swiper-pagination-bullet-active {
        color: #fff;
        background: var(--btn-bg);
        transform: scale(1.2)
      }

      .swiper-pagination-bullet:hover {
        color: #fff;
        background: var(--btn-bg);
        transform: scale(1.2)
      }
      `],
      pagination: {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    }

    Object.assign(swiperEl, params)

    swiperEl.initialize();


// ! ===== EVENTS =====!\\
projectsBtn.addEventListener('click', ()=>{
    home.classList.replace('d-flex', 'd-none')
    slider.classList.replace('d-none', 'd-block')
})
back.addEventListener('click',()=>{
    home.classList.replace('d-none', 'd-flex')
    slider.classList.replace('d-block', 'd-none')
})