$(".tomar").click(function(){
  $(".location-result").html("<h1>Tomar</h1>");
  $(".location-information").html("<p>Architectural hotspot with strong religious history. Visit the Convent of Christ, 12th century monastary castle, named World Heritage Site by UNESCO. The Church of Saint Paul the Baptist is also a popular attraction, this 15th century church was built by King Manuel I.</p>")
  $(".culture-locations").css("background-color","white");
  $(".tomar").css("background-color", "blue");
});

$(".porto").click(function(){
  $(".location-result").html("<h1>Porto</h1>");
  $(".location-information").html("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>")
  $(".culture-locations").css("background-color","white");
  $(".porto").css("background-color", "blue");
});

$(".lisbon").click(function(){
  $(".location-result").html("<h1>Lisbon</h1>");
  $(".culture-locations").css("background-color","white");
  $(".lisbon").css("background-color", "blue");
});

$(".braga").click(function(){
  $(".location-result").html("<h1>Braga</h1>");
  $(".culture-locations").css("background-color","white");
  $(".braga").css("background-color", "blue");
});