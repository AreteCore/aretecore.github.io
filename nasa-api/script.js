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

//let height
// let width
// const $bigimg = $("<img/>").attr("src", item.hdurl).on('load', function() {
//     width = this.width
//     height = this.height
// });
// const $dims = $(`<p>${width} x ${height}`)