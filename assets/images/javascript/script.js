function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 2,
          center: {
            lat: 39.60199,
            lng: -8.40924,
          },
        });


        var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var locations = [
          { lat: 41.55032, lng: -8.42005 },
          { lat: 41.14961, lng: -8.61099 },
          { lat: 39.60199, lng: -8.40924 },
          { lat: 38.71667, lng: -9.13333 },
          { lat: 37.0103, lng: -7.9375 },
          { lat: 32.37166518, lng: -16.2749989 },
          { lat: 38.305542, lng: -30.384108 },
        ];

        var markers = locations.map(function (location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
          });
        });
        var markerCluster = new MarkerClusterer(map, markers, {
          imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
        });
      }

$(".tomar").click(function(){
  $(".location-heading").html("<h1>Tomar</h1>");
  $(".carousel").addClass("slideshow");
  $(".tomar-slideshow").removeClass("slideshow");
  $(".location-information").html("<p>Architectural hotspot with strong religious history. Visit the Convent of Christ, 12th century monastary castle, named World Heritage Site by UNESCO. The Church of Saint Paul the Baptist is also a popular attraction, this 15th century church was built by King Manuel I.</p>");
  $(".activities").addClass("hide");
  $(".activities-tomar").removeClass("hide");
  $(".culture-locations").removeClass("blue-shadow");
  $(".tomar").addClass("blue-shadow");
});

$(".porto").click(function(){
  $(".location-heading").html("<h1>Porto</h1>");
  $(".carousel").addClass("slideshow");
  $(".porto-slideshow").removeClass("slideshow");
  $(".location-information").html("<p>It was in the Porto and in the North regions that Portugal was founded in the 12th century and the Portuguese became a people and a nation. Porto, a World Heritage city, is the gateway and departure point for a journey across the natural and cultural diversity of the region. It is known for the Port wine which is shipped from here all over the world, but also for a heritage which combines ancient churches and monuments, such as the Cathedral and the Church of São Francisco, and modern buildings, such as Casa da Música and the Serralves Museum. </p>")
  $(".activities").addClass("hide");
  $(".activities-porto").removeClass("hide");
  $(".culture-locations").removeClass("blue-shadow");
  $(".porto").addClass("blue-shadow");
});

$(".lisbon").click(function(){
  $(".location-heading").html("<h1>Lisbon</h1>");
  $(".carousel").addClass("slideshow");
  $(".lisbon-slideshow").removeClass("slideshow");
  $(".location-information").html("<p>The wide variety of landscapes and heritage is always close by, whether to the north or south of the capital. With beaches, natural parks, cultural routes and accommodation for all tastes. Follow the river to discover some of the city’s most beautiful parts: the monumental area of Belém with its World Heritage monuments, the mediaeval quarters and the latest contemporary leisure spaces.</p>");
  $(".activities").addClass("hide");
  $(".activities-lisbon").removeClass("hide");
  $(".culture-locations").removeClass("blue-shadow");
  $(".lisbon").addClass("blue-shadow");
});

$(".braga").click(function(){
  $(".location-heading").html("<h1>Braga</h1>");
  $(".carousel").addClass("slideshow");
  $(".braga-slideshow").removeClass("slideshow");
  $(".location-information").html("<p>Braga is a lively city, one of the oldest in the country, and is teeming with young people who study at its universities.Every visitor to Braga must see the Bom Jesus Sanctuary, a city icon, with its monumental staircase. Amid an expanse of greenery, it offers an excellent panoramic view of the city, as do two other churches nearby: Nossa Senhora do Sameiro Sanctuary, an important place of Marian worship.</p>");
  $(".activities").addClass("hide");
  $(".activities-braga").removeClass("hide");
  $(".culture-locations").removeClass("blue-shadow");
  $(".braga").addClass("blue-shadow");
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

$(".azores-gallery").click(function(){
    $(".azores-gallery").addClass('hide');
    $('.azores-images').removeClass('hide');
    $('.exit-azores-gallery').removeClass('hide');
})

$(".exit-azores-gallery").click(function(){
    $(".exit-azores-gallery").addClass('hide');
    $(".azores-images").addClass('hide');
    $(".azores-gallery").removeClass('hide');

})

$(".algarve-gallery").click(function(){
    $(".algarve-gallery").addClass('hide');
    $('.algarve-images').removeClass('hide');
    $('.exit-algarve-gallery').removeClass('hide');
})

$(".exit-algarve-gallery").click(function(){
    $(".exit-algarve-gallery").addClass('hide');
    $(".algarve-images").addClass('hide');
    $(".algarve-gallery").removeClass('hide');

})


$(".madeira-activities").click(function(){
    $(".madeira-activity-list").removeClass("hide");
    $(".madeira-activities").addClass("hide");
    $(".exit-madeira-activities").removeClass("hide");
})

$(".exit-madeira-activities").click(function(){
    $(".madeira-activities").removeClass("hide");
    $(".madeira-activity-list").addClass("hide");
    $(".exit-madeira-activities").addClass("hide");
})

$(".azores-activities").click(function(){
    $(".azores-activity-list").removeClass("hide");
    $(".azores-activities").addClass("hide");
    $(".exit-azores-activities").removeClass("hide");
})

$(".exit-azores-activities").click(function(){
    $(".azores-activities").removeClass("hide");
    $(".azores-activity-list").addClass("hide");
    $(".exit-azores-activities").addClass("hide");
})

$(".algarve-activities").click(function(){
    $(".algarve-activity-list").removeClass("hide");
    $(".algarve-activities").addClass("hide");
    $(".exit-algarve-activities").removeClass("hide");
})

$(".exit-algarve-activities").click(function(){
    $(".algarve-activities").removeClass("hide");
    $(".algarve-activity-list").addClass("hide");
    $(".exit-algarve-activities").addClass("hide");
})

const lightbox = document.createElement('div')
lightbox.id='lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('.nature-location-pic')
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