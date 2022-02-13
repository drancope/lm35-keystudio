basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    serial.writeValue("Temperatura:", pins.analogReadPin(AnalogPin.P0))
    basic.pause(4000)
})
