const $code = $("#code")
// console.log($code)
var toasty = new Audio('./wav/toasty.wav');
const $forden = $("#forden")
// $forden.hide()
// console.log($forden[0].style)


$code.on("click", (event) => {
    //play sound
    toasty.play()
    //expose element
    // $forden.show()
    $forden[0].style.visibility = "visible"

    //delay, hide element
    setTimeout(function () {
        // $forden.hide()
        $forden[0].style.visibility = "hidden"
    }, 250)
})


$(document).ready(function () {
    console.log("loaded!")
    $.ajax(`https://quotes.rest/qod?language=en`).then((data) => {
        // console.log("quote", data.contents.quotes[0].quote)
        // console.log("author", data.contents.quotes[0].author)
        $("#quote").text(`"${data.contents.quotes[0].quote}" - ${data.contents.quotes[0].author}`)
    })

});



{
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
}