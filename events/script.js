//stupid rapidapi link
//https://rapidapi.com/AndrianaCodes/api/eventbrite-com/
// deprecated
// https://www.eventbrite.com/platform/docs/by-location

// keys
// const eventBriteKey = config.EVENTBRITE_KEY
//global vars (needed because of getCurrentPosition not being cool at all)
let lat
let long

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
// $(".testbutton").on("click", () => {
//     console.log("test button fire")
//     // console.log("geo")
//     // navigator.geolocation.getCurrentPosition(geo.parseLatLong, geo.error, geo.options);
//     // eventResultsPagerator(testObject)
//     // console.log(today(), daysAway())
    
//     navigator.geolocation.getCurrentPosition(
//         geo.success,
//         geo.error,
//         geo.options
//     )
//     console.log("coords",lat,long)
// })

// this is the event button to use if the api actually works
// which it does not, because its deprecated, because eventbrite sucks
// $("#deprecated-event-button").on("click", () => {
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

// const testObject = {
//     "aggs": {},
//     "pagination": {
//         "continuation": "eyJwYWdlIjoyfQ",
//         "object_count": 83800,
//         "page_count": 49,
//         "page_number": 1,
//         "page_size": 20
//     },
//     "results": [
//         //obj1
//         {
//             "_type": "destination_event",
//             "checkout_flow": "widget",
//             "debug_info": {
//             },
//             "dedup": {
//             },
//             "eid": "83728326679",
//             "end_date": "2021-01-03",
//             "end_time": "20:30",
//             "event_sales_status": {
//                 "default_message": null,
//                 "message": null,
//                 "message_code": null,
//                 "message_type": null,
//                 "sales_status": "on_sale"
//             },
//             "eventbrite_event_id": "83728326679",
//             "facebook_attending": null,
//             "full_description": null,
//             "hide_end_date": false,
//             "hide_start_date": false,
//             "id": "83728326679",
//             "is_cancelled": null,
//             "is_online_event": false,
//             "is_protected_event": false,
//             "language": "en-us",
//             "music_properties": {
//                 "age_restriction": null,
//                 "door_time": null,
//                 "presented_by": null
//             },
//             "name": "Key West Florida Reset & Restore Retreat",
//             "num_children": 48,
//             "parent_url": "https://www.eventbrite.com/e/key-west-florida-reset-restore-retreat-tickets-83728220361",
//             "primary_organizer": {
//                 "_type": "destination_profile",
//                 "facebook": null,
//                 "followed_by_you": false,
//                 "id": "19930523860",
//                 "image_id": null,
//                 "name": "Full Circle Yoga School",
//                 "num_collections": null,
//                 "num_followers": 42,
//                 "num_following": null,
//                 "num_saves": null,
//                 "num_upcoming_events": null,
//                 "profile_type": "organizer",
//                 "summary": null,
//                 "twitter": null,
//                 "url": "https://www.eventbrite.com/o/full-circle-yoga-school-19930523860",
//                 "website_url": null
//             },
//             "primary_organizer_id": "19930523860",
//             "primary_venue": {
//                 "_type": "destination_venue",
//                 "address": {
//                     "address_1": "Key West",
//                     "city": "Florida",
//                     "country": "US",
//                     "latitude": "24.5561772",
//                     "localized_address_display": "Key West, Florida, Florida 33041",
//                     "localized_area_display": "Florida, Florida",
//                     "localized_multi_line_address_display": [
//                         "Key West",
//                         "Florida, Florida 33041"
//                     ],
//                     "longitude": "-81.80480369999998",
//                     "postal_code": "33041",
//                     "region": "Florida",
//                 },
//                 "id": "43458893",
//                 "name": "Full Circle Yoga School",
//                 "venue_profile_id": null,
//                 "venue_profile_url": ""
//             },
//             "primary_venue_id": "43458893",
//             "published": "2019-11-25T22:54:39Z",
//             "series": {
//                 "counts": {
//                     "current_future": 57
//                 },
//                 "id": "83728220361",
//                 "next_dates": [
//                     {
//                         "end": "2020-11-02T01:30:00Z",
//                         "end_date": "2020-11-02",
//                         "id": "83728308625",
//                         "start": "2020-10-26T10:00:00Z",
//                         "start_date": "2020-10-26",
//                         "timezone": "America/New_York"
//                     },
//                     {
//                         "end": "2020-11-09T01:30:00Z",
//                         "end_date": "2020-11-09",
//                         "id": "83728310631",
//                         "start": "2020-11-02T11:00:00Z",
//                         "start_date": "2020-11-02",
//                         "timezone": "America/New_York"
//                     }
//                     , {
//                         "end": "2020-11-16T01:30:00Z",
//                         "end_date": "2020-11-16",
//                         "id": "83728312637",
//                         "start": "2020-11-09T11:00:00Z",
//                         "start_date": "2020-11-09",
//                         "timezone": "America/New_York"
//                     },
//                 ],
//                 "url": "https://www.eventbrite.com/e/key-west-florida-reset-restore-retreat-tickets-83728220361",
//             },
//             "series_id": "83728220361",
//             "start_date": "2020-12-28",
//             "start_time": "06:00",
//             "summary": "Key West Retreat Program Most of our students experience a transformation of body mind and spirit as our Key West Retreat offers much more than simply what is certified to teach. This is an opportunity for you to learn to teach yoga while also shifting your life through ritual, ceremony, crystals, essential oils, meditation journies, ayurvedic herbs and more. Go beyond the unconscious limitations that are set upon us throughout our lives and free yourself to walk a path of truly elevated conscio",
//             "tags": [
//                 {
//                     "display_name": "Yoga",
//                     "prefix": "EventbriteSubCategory",
//                     "tag": "EventbriteSubCategory/7005"
//                 },
//                 {
//                     "display_name": "Health & Wellness",
//                     "localized": {
//                         "display_name": "Health & Wellness"
//                     },
//                     "prefix": "EventbriteCategory",
//                     "tag": "EventbriteCategory/107",
//                 },
//                 {
//                     "display_name": "Camp, Trip, or Retreat",
//                     "prefix": "EventbriteFormat",
//                     "tag": "EventbriteFormat/18"
//                 },
//             ],
//             "ticket_availability": {
//                 "has_available_tickets": true,
//                 "is_free": false,
//                 "is_sold_out": false,
//                 "maximum_ticket_price": {
//                     "currency": "USD",
//                     "display": "2999.00 USD",
//                     "major_value": "2999.00",
//                     "value": 299900
//                 },
//                 "minimum_ticket_price": {
//                     "currency": "USD",
//                     "display": "2999.00 USD",
//                     "major_value": "2999.00",
//                     "value": 299900
//                 },
//             },
//             "tickets_by": "Eventbrite",
//             "tickets_url": "https://www.eventbrite.com/checkout-external?eid=83728326679",
//             "timezone": "America/New_York",
//             "url": "https://www.eventbrite.com/e/key-west-florida-reset-restore-retreat-tickets-83728326679"
//         },
//         {
//             "name": "Ocala Florida Ocean Adventure & Spa Retreat ​",
//             "parent_url": "https://www.eventbrite.com/e/key-west-florida-ocean-adventure-spa-retreat-tickets-84623628551",
//             "primary_venue": {
//                 "name": "Ocala FL",
//             },
//             "start_date": "2020-12-28",
//             "end_date": "2020-12-30",
//             "summary": "Most of our students experience a transformation of body mind and spirit as our Key West Retreat offers much more than simply what is certified to teach. This is an opportunity for you to learn to teach yoga while also shifting your life through ritual, ceremony, crystals, essential oils, meditation journies, ayurvedic herbs and more. Go beyond the unconscious limitations that are set upon us throughout our lives and free yourself to walk a path of truly elevated consciousness. Throughout our tr",
//             "ticket_availability": {
//                 "has_available_tickets": true,
//                 "is_free": false,
//                 "is_sold_out": false,

//             },
//             "tickets_by": "Eventbrite",
//             "tickets_url": "https://www.eventbrite.com/checkout-external?eid=84623730857",
//             "url": "https://www.eventbrite.com/e/key-west-florida-ocean-adventure-spa-retreat-tickets-84623730857",
//         },
//         {
//             "name": "Salesforce ADM 201 Certification Training in Tulsa, OK",
//             "start_date": "2020-12-28",
//             "end_date": "2022-12-30",
//             "tickets_url": "https://www.eventbrite.com/checkout-external?eid=66406831621",
//             "url": "https://www.eventbrite.com/e/salesforce-adm-201-certification-training-in-tulsa-ok-tickets-66406831621",
//             "primary_venue": {
//                 "name": "Business Centre /Meeting Room",
//             },
//             "ticket_availability": {
//                 "has_available_tickets": true,
//                 "is_free": false,
//                 "is_sold_out": false,

//             },
//             "summary": `Key Features:
//             40 hours of Interactive Classroom training
//             100% Money Back Guarantee
//             Real life Projects
//             Group Activities for better reinforcement
//             Real world examples from various industries
//             Industry based case studies
//             Trainers’ Notes, Sample Question Paper & Case Studies
//             24/7 customer support`
//         },
//         {
//             "name": "Player Haters Ball",
//             "start_date": "2022-3-31",
//             "end_date": "2022-04-05",
//             "tickets_url": "https://www.eventbrite.com/checkout-external?eid=6640683162111",
//             "url": "https://www.eventbrite.com/e/player-haters-ball-2022",
//             "primary_venue": {
//                 "name": "Enmity Ballroom, Atlanta, GA",
//             },
//             "summary": `Hosted by Ice-T the Original Player Hater, our contestants feature a diverse array of haters from the world over.
//             This year's favorite is Silky Johnson, who once called in a bomb threat to the special olympics, but also in the running are 
//             Buc Nasty and Pit Bull. Beautiful is, unfortunately, also in attendance. The hate flows free and they all throw totally 
//             quote-worthy verbal takedowns at each other, such as “Real player hatin, that's like an art form man."`,
//             "ticket_availability": {
//                 "has_available_tickets": true,
//                 "is_free": false,
//                 "is_sold_out": false,

//             },


//         }
//     ]
// }