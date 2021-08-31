input.onButtonPressed(Button.A, function () {
    basic.showNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(5)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Asleep)
})
basic.showString("Melanie")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
})
