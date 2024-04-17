$(document).ready(function(){
    $("#btn").click(function(){   
        let loc = $('#location').val();
        const apikey = "fada576004bed628deb49faf8b8055a9";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
                
        axios.get(url)
        .then(response => {
            $('#error').text("");
            console.log(response.data); //  response data
            let temp = Math.round(response.data.main.temp - 273);
            let cityName = response.data.name;
            let weather = response.data.weather[0].main;
            console.log(temp);
            console.log(cityName);
            console.log(weather);
            $('#temprature').html(Math.round(response.data.main.feels_like - 273) + "<span>&deg;C</span>");
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
        })
        .catch(error => {
            $('#temprature').html("");
            $('#description').text("");
            $("#city").text("");
            $('#error').text("Enter Valid City");
            $("#WeatherImage").attr('src'," ");
            $('#location').val('');
        });
    });
});
