///// c43653364d13af5360425804973e14c4
const $input = $('input')
const $search = $('#search')
const $aside = $("aside")
// const $days = $('#days')
// const $days = $('#days').find('option:selected').val()
// const $days = $('#days').val()
// const $days = $( "select#days" ).val()
// const $days = $( "select#days option:checked" ).val()
// const $days = $('#days :selected').val()

///testing
const $test1 = $("#test1")
const $test2 = $("#test2")
const $test3 = $("#test3")
const $test4 = $("#test4")
const $test5 = $("#test5")

$test1.on("click", () => {
    event.preventDefault
    const $days = $('#days').val()

    console.log("val():", $days)
    console.log("selected text:", $('#days :selected').text())
})

$test2.on("click", () => {
    console.log("sliced",data.daily.slice(-4))
})

//vars to recreate the data in another multi-day-results div
//left sub // right sub
//use .clone()


$search.on("click", () => {
    const cityName = $input.val(); //keep this
$.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c43653364d13af5360425804973e14c4`).then((data) => {
    // console.log(data)
    const cityLat = data.coord.lat
    const cityLong = data.coord.lon
    const cityName = data.name
    // console.log(cityLat,cityLong)
    $.ajax(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLong}&units=imperial&exclude=current,minute,hourly,alerts&appid=c43653364d13af5360425804973e14c4`).then((data) =>{
        const $days = parseInt($('#days').val()) //gets number of days chosen
        $("aside").children().remove()
        data.daily.slice(0, $days).forEach(element => {
            console.log(element)
            let $tempDay = $(`
            <div class="multi-day-results">
                        <div class="left sub">
                            <div>Weather for:</div>
                            <div>Temperature:</div>
                            <div>Feels like:</div>
                            <div>Weather:</div>
                        </div>
                        <div class="right sub">
                            <div id="city">${cityName}</div>
                            <div id="temp">${element.temp.day} F</div>
                            <div id="feels">${element.feels_like.day} F</div>
                            <div id="weather">${element.weather[0].main}</div>
                        </div>
                    </div>`)
            $("aside").append($tempDay)
        });
        // $("aside").children().first().remove()
    })

    
})
})