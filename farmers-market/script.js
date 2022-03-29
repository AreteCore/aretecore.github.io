//https://search.ams.usda.gov/farmersmarkets/v1/svcdesc.html
//farmers marrket data





//--------------------------------------------------
// click to run the whole thing
$("#event-button").on("click", () => {
    //sets global location variables on click
    // navigator.geolocation.getCurrentPosition(geo.success, geo.error, geo.options)
    //this is the testObject demo version
    console.log("testObj fires")
    eventResultsPagerator(testObject)
});

//this function actually builds the page sections
function eventResultsPagerator(response) {
    // console.log("obj", response)
    $("#events").text("")
    for (let element of response.results) {
        if (element.ticket_availability.has_available_tickets === false) {
            console.log("nope");
            return
        }
        else {
            //create container div for event
            let $eventStyling = $("<div>")
            $eventStyling.attr("class", "event-styling")

            //create title h3
            let $eventName = $("<h3>")
            $eventName.attr("class", "event-name")
            $eventName.text(element.name)
            //append to container
            $eventStyling.append($eventName)

            //create venue h5
            let $eventVenue = $("<h5>")
            $eventVenue.attr("class", "event-name")
            $eventVenue.text(element.primary_venue.name)
            //append to container
            $eventStyling.append($eventVenue)

            //create dates div
            let $dates = $("<div>")
            $dates.text(`Event dates: ${element.start_date} to ${element.end_date}`)
            $eventStyling.append($dates)

            //create body
            let $eventBody = $("<div>")
            $eventBody.attr("class", "event-body")

            //create url 1
            let $url1 = $("<div>")
            $url1.html(`<a href="${element.tickets_url}">Buy tickets here!</a>`)
            $eventStyling.append($url1)
            //append url1 to body
            $eventBody.append($url1)

            //create url 2
            let $url2 = $("<div>")
            $url2.html(`<a href="${element.url}">Event information</a>`)
            $eventStyling.append($url2)
            //append url2 to body
            $eventBody.append($url2)

            //append links
            $eventStyling.append($eventBody)

            //create summary at the bottom
            let $div = $("<div>")
            $div.text(element.summary)
            $div.attr("class", "summary")

            //append to container
            $eventStyling.append($div)

            //append entire thing to main
            $("#events").append($eventStyling)
        }
    }
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

//returns parsed radius from user form
function radius() {
    return parseInt($("#radius").val())
}

//returns formatted string for api call for today
function today() {
    const today = new Date()
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
}

//returns formatted string for api call for future date
function daysAway() {
    const daysAway = new Date()
    daysAway.setDate(new Date().getDate() + parseInt($("#days-away").val()))
    return `${daysAway.getFullYear()}-${daysAway.getMonth() + 1}-${daysAway.getDate()}`
}

//test button
$(".testbutton").on("click", () => {
    console.log("test button fire")
    // console.log("geo")
    // navigator.geolocation.getCurrentPosition(geo.parseLatLong, geo.error, geo.options);
    // eventResultsPagerator(testObject)
    // console.log(today(), daysAway())
    
    navigator.geolocation.getCurrentPosition(
        geo.success,
        geo.error,
        geo.options
    )
    console.log("coords",lat,long)
})

// this is the event button to use if the api actually works
// which it does not, because its deprecated, because eventbrite sucks
// $("#event-button").on("click", () => {
//     // this is the url example from the settings object
//     //"url": "https://eventbrite-com.p.rapidapi.com/events/nearby/37.788719679657554/-122.40057774847898?radius=30&date_start=2021-01-01&date_end=2021-12-31&page=1",
//     //sets global location variables on click
//     navigator.geolocation.getCurrentPosition(geo.success, geo.error, geo.options)
//     //this is a settings object for the api, **must be declared here in the click to pull current data/dropdowns/location!**
//     const settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": `https://eventbrite-com.p.rapidapi.com/events/nearby/${lat}/${long}?radius=${radius()}&date_start=${today()}&date_end=${daysAwayString}&page=1`,
//         "method": "GET",
//         "headers": {
//             "X-RapidAPI-Host": "eventbrite-com.p.rapidapi.com",
//             "X-RapidAPI-Key": eventBriteKey
//         }
//     }
//     //this is the ajax call to the api, if it worked
//     console.log("ajax fires")
//     $.ajax(settings).done(function (response) {
//         //function creates the page
//         eventResultsPagerator(response);
//     });
// });