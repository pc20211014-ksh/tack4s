let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    x = 0
    for (let index = 0; index < 5; index++) {
        led.plot(x, 0)
        basic.pause(200)
        basic.clearScreen()
        x += 1
    }
})
input.onButtonPressed(Button.B, function () {
    y = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, y)
        basic.pause(200)
        basic.clearScreen()
        y += 1
    }
})
basic.forever(function () {
	
})
