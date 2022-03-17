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
    setTimeout(function() {
        // $forden.hide()
        $forden[0].style.visibility = "hidden"
    }, 250)
    })
