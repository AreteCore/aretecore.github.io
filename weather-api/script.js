const $input = $('input')
const $button = $('button')
const $aside = $("aside")


$button.on("click", () => {
    const cityName = $input.val();

$.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c43653364d13af5360425804973e14c4`).then((data) => {
    console.log(data)
    const cityLat = data.coord.lat
    const cityLong = data.coord.lon
    const cityName = data.name
    console.log(cityLat,cityLong)
    $.ajax(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLong}&units=imperial&exclude=hourly,daily&appid=c43653364d13af5360425804973e14c4`).then((data) =>{
        console.log(data)
        $("#city").html(cityName)
        $("#temp").html(`${data.current.temp} F`)
        $("#feels").html(`${data.current.feels_like} F`)
        $("#weather").html(data.current.weather[0].main)
    })
})
})


