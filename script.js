const $code = $("#code")
// console.log($code)
var toasty = new Audio('./wav/toasty.wav');
const $forden = $("#forden")
$forden.hide()

$code.on("click", (event) => {
    //play sound
    toasty.play()
    //expose element
    $forden.show()
    //delay, hide element
    setTimeout(function() {
        $forden.hide()
    }, 250)
    })
