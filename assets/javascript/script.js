$(".tomar").click(function(){
  $(".location-heading").html("<h1>Tomar</h1>");
  $(".carousel").addClass("slideshow");
  $(".tomar-slideshow").removeClass("slideshow");
  $(".location-information").html("<p>Architectural hotspot with strong religious history. Visit the Convent of Christ, 12th century monastary castle, named World Heritage Site by UNESCO. The Church of Saint Paul the Baptist is also a popular attraction, this 15th century church was built by King Manuel I.</p>")
  $(".culture-locations").css("background-color","white");
  $(".tomar").css("background-color", "#d6f5f5");
});

$(".porto").click(function(){
  $(".location-heading").html("<h1>Porto</h1>");
  $(".carousel").addClass("slideshow");
  $(".porto-slideshow").removeClass("slideshow");
  $(".location-information").html("<p>It was in the Porto and in the North regions that Portugal was founded in the 12th century and the Portuguese became a people and a nation. Porto, a World Heritage city, is the gateway and departure point for a journey across the natural and cultural diversity of the region. It is known for the Port wine which is shipped from here all over the world, but also for a heritage which combines ancient churches and monuments, such as the Cathedral and the Church of São Francisco, and modern buildings, such as Casa da Música and the Serralves Museum. </p>")
  $(".culture-locations").css("background-color","white");
  $(".porto").css("background-color", "#d6f5f5");
});

$(".lisbon").click(function(){
  $(".location-heading").html("<h1>Lisbon</h1>");
  $(".carousel").addClass("slideshow");
  $(".lisbon-slideshow").removeClass("slideshow");
  $(".location-information").html("<p>The wide variety of landscapes and heritage is always close by, whether to the north or south of the capital. With beaches, natural parks, cultural routes and accommodation for all tastes. Follow the river to discover some of the city’s most beautiful parts: the monumental area of Belém with its World Heritage monuments, the mediaeval quarters and the latest contemporary leisure spaces.</p>");
  $(".culture-locations").css("background-color","white");
  $(".lisbon").css("background-color", "#d6f5f5");
});

$(".braga").click(function(){
  $(".location-heading").html("<h1>Braga</h1>");
  $(".carousel").addClass("slideshow");
  $(".braga-slideshow").removeClass("slideshow");
  $(".location-information").html("<p>Braga is a lively city, one of the oldest in the country, and is teeming with young people who study at its universities.Every visitor to Braga must see the Bom Jesus Sanctuary, a city icon, with its monumental staircase. Amid an expanse of greenery, it offers an excellent panoramic view of the city, as do two other churches nearby: Nossa Senhora do Sameiro Sanctuary, an important place of Marian worship.</p>")
  $(".culture-locations").css("background-color","white");
  $(".braga").css("background-color", "#d6f5f5");
});

$(".madeira-gallery").click(function(){
    $(".madeira-gallery").addClass('hide');
    $('.madeira-images').removeClass('hide');
    $('.exit-madeira-gallery').removeClass('hide');
})

$(".exit-madeira-gallery").click(function(){
    $(".exit-madeira-gallery").addClass('hide');
    $(".madeira-images").addClass('hide');
    $(".madeira-gallery").removeClass('hide');

})

const lightbox = document.createElement('div')
lightbox.id='lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click', e =>{
       lightbox.classList.add('active') 
       const img = document.createElement('img')
       img.src = image.src
       while (lightbox.firstChild){
           lightbox.removeChild(lightbox.firstChild)
       }
       lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e =>{
lightbox.classList.remove('active')
})