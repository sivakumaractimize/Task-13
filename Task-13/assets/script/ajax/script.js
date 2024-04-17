$(document).ready(function(){
    $("#btn").click(function(){   
        let loc = $('#location').val();
        const apikey = "fada576004bed628deb49faf8b8055a9";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
                



// using java script

// let xhr = new XMLHttpRequest();

// xhr.open('Get',url,true)
// xhr.send();
// xhr.onload = function() {
//     console.log(JSON.parse(this.responseText));
//     }

//     

 // using j query


 $.ajax({
    url: url,
    type: "GET",
    dataType: "json",
                      //success
                      success: function (data) {
                  
                          $('#error').text("");
                          console.log(data);
                          let temp = Math.round(data.main.feels_like - 273);
                          let cityName = data.name;
                          let weather = data.weather[0].main;
                          let icon=data.weather[0].icon;
                          console.log(icon)
                          console.log(temp);
                          console.log(cityName);
                          console.log(weather);
                          $('#temprature').html(Math.round(data.main.feels_like - 273) + "<span>&deg;C</span>");
                          $('#description').text(weather);
                          $("#city").text(cityName);
                          $('#location').val('');
                  
                  
                          switch (weather) {
                              case "Clear":
                                $("#WeatherImage").attr("src","../assets/images/summer.png");
                                break;
                              case "Clouds":
                                $("#WeatherImage").attr("src", "../assets/images/clouds.png");
                                break;
                             
                          };
                  
                  
                        },
                  // error
                        error: function (error) {
                          $('#temprature').html("");
                          $('#description').text("");
                          $("#city").text("");
                          $('#error').text("Enter Valid City");
                          $("#WeatherImage").attr('src'," ");
                          $('#location').val('');
                      }
   });



      


    });


});