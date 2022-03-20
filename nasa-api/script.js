//nasa api key
/*
9jBnAysOQFWacuExLUatq5NmxXIgdJqdleT3ibXP
*/
const $nasaButton = $("#nasa-button")
$nasaButton.on("click", () => {
$.ajax(`https://api.nasa.gov/planetary/apod?count=3&api_key=9jBnAysOQFWacuExLUatq5NmxXIgdJqdleT3ibXP`).then((data) => {
    console.log(data)
    $("#nasa-photos").html("")
        data.forEach((item) => {
            //this "<div>" is a jquery thing, it will understand that it needs both opening and closing
            const $div = $("<div>")
            //set the html in the div
            const $h1 = $(`<p>${item.title}</p>`)
            const $a = $(`<a href="${item.hdurl}">`)
            const $img = $(`<img src=${item.url} alt=${item.title}/>`)
            $a.append($img)
            $div.append($h1, $a)
            //appends it to the aside
            $("#nasa-photos").append($div)
        })
})
})