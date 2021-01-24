// NAVBAR
let lastScrollTop = 0
navbar = document.getElementById('navbar')

window.addEventListener('scroll', function () {
  const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px"
  } else {
    navbar.style.top = "0"
  }
  lastScrollTop = scrollTop
})

// TYPED
var typed = new Typed('.typed', {
  strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Yiyin.",
    "Après avoir obtenu mon diplôme de Bac+4, j'ai découvert un grand intérêt pour le monde informatique et son évolution croissante. J'ai décidé de me lancer à fond dans l'apprentissage du code, depuis près de 6 mois je me forme à temps plein en autodidacte aux langages Front tels que CSS, JavaScript et son Framework Vue.js afin devenir le plus rapidement possible développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder."],
  typeSpeed: 20
})

// COMPTEUR LIVE
let compteur = 0

$(window).scroll(function () {
  const top = $('.counter').offset().top - window.innerHeight

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function () {
      let $this = $(this), countTo = $this.attr('data-count')
      $({ countNum: $this.text() })
        .animate({
          countNum: countTo
        },
          {
            duration: 10000,
            easing: 'swing',
            step: function () {
              $this.text(Math.floor(this.countNum))
            },
            complete: function () {
              $this.text(this.countNum)
            }
          })
    })
    compteur = 1
  }
})

// AOS
AOS.init()