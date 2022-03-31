//
//https://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html
//farmers market data
//
//https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=90210
//
//global lat long variables because getCurrentPostion is a one-trick pony
let lat
let long

//waits to enable geolocation button, gives getCurrentPosition time to acquire
setTimeout(() => { $('#geo-button').removeAttr('disabled'); }, 8000);
setTimeout(() => { $('#button-tag').hide(); }, 8000);

//zip code button
$("#zip-button").on("click", () => {
    //checks for valid input
    if (!zipInputCheck()) {
        alert("Enter a five-digit zip code!")
        return
    } else {
        //gets zip input
        let zip = $("#zip-input").val()
        //runs call
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            // submit a get request to the restful service zipSearch
            url: `https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=${zip}`,
            dataType: 'jsonp',
            jsonpCallback: 'parseResults'
        });
    }
})

//gps button
$("#geo-button").on("click", () => {
    // navigator.geolocation.getCurrentPosition(geo.success, geo.error, geo.options)
    console.log(lat, long)
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        // submit a get request to the restful service locSearch.
        url: `http://search.ams.usda.gov/farmersmarkets/v1/data.svc/locSearch?lat=${lat}&lng=${long}`,
        dataType: 'jsonp',
        jsonpCallback: 'parseResults'
    });
});

//validates zip code input
function zipInputCheck() {
    if ($("#zip-input").val().length == 5 && parseInt($("#zip-input").val()) != NaN) return true
    else return false
}

//parses
function parseResults(data) {
    //clears events in case this is a second search
    $("#events").empty()
    //iterate array, parses miles and name
    for (let element of data.results) {
        let miles = element.marketname.slice(0, 3)
        let name = element.marketname.slice(4, element.marketname.length)
        //call event builder to make the html
        eventBuilder(miles, name)
    }
}

//this generates the html object that gets appended to "events" div
function eventBuilder(miles, name) {
    // http://www.google.com/search?q=query+goes+here
    let $eventStyling = $("<div>")
    $eventStyling.attr("class", "event-styling")

    // create miles h3
    let $eventMiles = $("<h3>")
    $eventMiles.attr("class", "event-name")
    $eventMiles.text(`${miles} miles away.`)
    //append to container
    $eventStyling.append($eventMiles)

    //create link
    let $link = $("<a>")
    $link.attr("href", `http://www.google.com/search?q=${name.replace(' ', '+')}`)
    $link.attr("target", "_blank")
    $link.text(name)

    //create event h5
    let $eventName = $("<h5>")
    $eventName.attr("class", "event-name")
    $eventName.append($link)
    //append to container
    $eventStyling.append($eventName)

    //append entire thing to main
    $("#events").append($eventStyling)
}

//geo object holds the functions used by getCurrentPosition to set the global lat long vars etc
let geo = {
    success: function (pos) {
        // console.log(pos)
        // console.log('Your current position is:');
        // console.log(`Latitude : ${pos.coords.latitude}`);
        // console.log(`Longitude: ${pos.coords.longitude}`);
        // console.log(`More or less ${pos.coords.accuracy} meters.`);
        // lat = pos.coords.latitude
        // long = pos.coords.longitude
        lat = pos.coords.latitude,
        long = pos.coords.longitude
    },
    error: function (err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
        alert(`ERROR(${err.code}): ${err.message}`);
    },
    options: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    }
}

//gets curret position on page load
navigator.geolocation.getCurrentPosition(geo.success, geo.error, geo.options)