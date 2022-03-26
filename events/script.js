//nasa api key
/*
9jBnAysOQFWacuExLUatq5NmxXIgdJqdleT3ibXP
*/
const $nasaButton = $("#nasa-button")
$nasaButton.on("click", () => {
    $.ajax(`https://api.nasa.gov/planetary/apod?count=3&api_key=9jBnAysOQFWacuExLUatq5NmxXIgdJqdleT3ibXP`).then((data) => {
        // console.log(data)
        $("#nasa-photos").html("")
        data.forEach((item) => {
            //this "<div>" is a jquery thing, it will understand that it needs both opening and closing
            const $div = $("<div>")
            //create p
            const $p = $(`<p>${item.title}</p>`)
            const $a = $(`<a target="_blank" href="${item.hdurl}">`)
            // const $img = $(`<img src=${item.url} alt=${item.title}/>`)
            const $img = $("<img/>")
            $img.attr("src", item.url)
            $img.attr("alt", item.title)
            $a.append($img)
            $div.append($p, $a)
            //appends it to the aside
            $("#nasa-photos").append($div)
        })
    }).catch((error) => {
        console.log("b0rk:", error)
    })
})


//https://rapidapi.com/AndrianaCodes/api/eventbrite-com/


let lat
let long

//function for geolocation parse
function success(pos) {
    // console.log('Your current position is:');
    // console.log(`Latitude : ${pos.coords.latitude}`);
    // console.log(`Longitude: ${pos.coords.longitude}`);
    // console.log(`More or less ${pos.coords.accuracy} meters.`);
    lat = pos.coords.latitude
    long = pos.coords.longitude
}
//function for geolocation error
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
//geo options
var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};
// end geo stuff

//fires currentposition on page load, sets lat long vars
navigator.geolocation.getCurrentPosition(success, error, options);

//this is a response example i formatted to test with
const testObject = {
    "aggs": {},
    "pagination": {
        "continuation": "eyJwYWdlIjoyfQ",
        "object_count": 83800,
        "page_count": 49,
        "page_number": 1,
        "page_size": 20
    },
    "results": [
        {
            "_type": "destination_event",
            "checkout_flow": "widget",
            "debug_info": {
            },
            "dedup": {
            },
            "eid": "83728326679",
            "end_date": "2021-01-03",
            "end_time": "20:30",
            "event_sales_status": {
                "default_message": null,
                "message": null,
                "message_code": null,
                "message_type": null,
                "sales_status": "on_sale"
            },
            "eventbrite_event_id": "83728326679",
            "facebook_attending": null,
            "full_description": null,
            "hide_end_date": false,
            "hide_start_date": false,
            "id": "83728326679",
            "is_cancelled": null,
            "is_online_event": false,
            "is_protected_event": false,
            "language": "en-us",
            "music_properties": {
                "age_restriction": null,
                "door_time": null,
                "presented_by": null
            },
            "name": "Key West Florida Reset & Restore Retreat",
            "num_children": 48,
            "parent_url": "https://www.eventbrite.com/e/key-west-florida-reset-restore-retreat-tickets-83728220361",
            "primary_organizer": {
                "_type": "destination_profile",
                "facebook": null,
                "followed_by_you": false,
                "id": "19930523860",
                "image_id": null,
                "name": "Full Circle Yoga School",
                "num_collections": null,
                "num_followers": 42,
                "num_following": null,
                "num_saves": null,
                "num_upcoming_events": null,
                "profile_type": "organizer",
                "summary": null,
                "twitter": null,
                "url": "https://www.eventbrite.com/o/full-circle-yoga-school-19930523860",
                "website_url": null
            },
            "primary_organizer_id": "19930523860",
            "primary_venue": {
                "_type": "destination_venue",
                "address": {
                    "address_1": "Key West",
                    "city": "Florida",
                    "country": "US",
                    "latitude": "24.5561772",
                    "localized_address_display": "Key West, Florida, Florida 33041",
                    "localized_area_display": "Florida, Florida",
                    "localized_multi_line_address_display": [
                        "Key West",
                        "Florida, Florida 33041"
                    ],
                    "longitude": "-81.80480369999998",
                    "postal_code": "33041",
                    "region": "Florida",
                },
                "id": "43458893",
                "name": "Full Circle Yoga School",
                "venue_profile_id": null,
                "venue_profile_url": ""
            },
            "primary_venue_id": "43458893",
            "published": "2019-11-25T22:54:39Z",
            "series": {
                "counts": {
                    "current_future": 57
                },
                "id": "83728220361",
                "next_dates": [
                    {
                        "end": "2020-11-02T01:30:00Z",
                        "end_date": "2020-11-02",
                        "id": "83728308625",
                        "start": "2020-10-26T10:00:00Z",
                        "start_date": "2020-10-26",
                        "timezone": "America/New_York"
                    },
                    {
                        "end": "2020-11-09T01:30:00Z",
                        "end_date": "2020-11-09",
                        "id": "83728310631",
                        "start": "2020-11-02T11:00:00Z",
                        "start_date": "2020-11-02",
                        "timezone": "America/New_York"
                    }
                    , {
                        "end": "2020-11-16T01:30:00Z",
                        "end_date": "2020-11-16",
                        "id": "83728312637",
                        "start": "2020-11-09T11:00:00Z",
                        "start_date": "2020-11-09",
                        "timezone": "America/New_York"
                    },
                ],
                "url": "https://www.eventbrite.com/e/key-west-florida-reset-restore-retreat-tickets-83728220361",
            },
            "series_id": "83728220361",
            "start_date": "2020-12-28",
            "start_time": "06:00",
            "summary": "Key West Retreat Program Most of our students experience a transformation of body mind and spirit as our Key West Retreat offers much more than simply what is certified to teach. This is an opportunity for you to learn to teach yoga while also shifting your life through ritual, ceremony, crystals, essential oils, meditation journies, ayurvedic herbs and more. Go beyond the unconscious limitations that are set upon us throughout our lives and free yourself to walk a path of truly elevated conscio",
            "tags": [
                {
                    "display_name": "Yoga",
                    "prefix": "EventbriteSubCategory",
                    "tag": "EventbriteSubCategory/7005"
                },
                {
                    "display_name": "Health & Wellness",
                    "localized": {
                        "display_name": "Health & Wellness"
                    },
                    "prefix": "EventbriteCategory",
                    "tag": "EventbriteCategory/107",
                },
                {
                    "display_name": "Camp, Trip, or Retreat",
                    "prefix": "EventbriteFormat",
                    "tag": "EventbriteFormat/18"
                },
            ],
            "ticket_availability": {
                "has_available_tickets": true,
                "is_free": false,
                "is_sold_out": false,
                "maximum_ticket_price": {
                    "currency": "USD",
                    "display": "2999.00 USD",
                    "major_value": "2999.00",
                    "value": 299900
                },
                "minimum_ticket_price": {
                    "currency": "USD",
                    "display": "2999.00 USD",
                    "major_value": "2999.00",
                    "value": 299900
                },
            },
            "tickets_by": "Eventbrite",
            "tickets_url": "https://www.eventbrite.com/checkout-external?eid=83728326679",
            "timezone": "America/New_York",
            "url": "https://www.eventbrite.com/e/key-west-florida-reset-restore-retreat-tickets-83728326679"
        },
    ]
}

console.log("here is today", Date())
// click to run this
$("#event-button").on("click", () => {
    //set radius
    let rad = parseInt($("#radius").val())

// this is the url example from the settings object
//"url": "https://eventbrite-com.p.rapidapi.com/events/nearby/37.788719679657554/-122.40057774847898?radius=30&date_start=2021-01-01&date_end=2021-12-31&page=1",
    
    //set date today
    const today = new Date()
    const todayString = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    // console.log("todayString", todayString)

    //set end date
    const daysAway = new Date()
    daysAway.setDate(new Date().getDate() + parseInt($("#days-away").val()))
    const daysAwayString = `${daysAway.getFullYear()}-${daysAway.getMonth() + 1}-${daysAway.getDate()}`
    // console.log("daysAwayString",daysAwayString)

    //this is for the api
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://eventbrite-com.p.rapidapi.com/events/nearby/${lat}/${long}?radius=${rad}&date_start=${todayString}&date_end=${daysAwayString}&page=1`,
        "method": "GET",
        "headers": {
            "X-RapidAPI-Host": "eventbrite-com.p.rapidapi.com",
            "X-RapidAPI-Key": "SIGN-UP-FOR-KEY"
        }
    }

    // $.ajax(settings).done(eventResultsPagerator(data)
    // });

    

})

function eventResultsPagerator(response) {
    console.log("here ya object sir", response)
    // response.results is an array
    // each one has these parts
    /* 
    end_date
    start_date
    name
    primary_venue
    primary_venue.name
    summary
    ticket_availability.has_available_tickets //is a bool
    tickets_url
    url
    */
    let $masterDiv = $("<div>")
    $masterDiv.attr("class", "eventStyling")
    let $eventName = $("<h3>")
    $eventName.attr("class","event-name")
    // steps
    // iterate over the array
    // if (ticketavailability = false) return
    // else
    // create a div with class whatever
    // create component parts and append

    

}

eventResultsPagerator(testObject)