music.setBuiltInSpeakerEnabled(true)
music.setVolume(135)
let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    if (input.isGesture(Gesture.Shake)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        music.play(music.createSoundExpression(
        WaveShape.Sawtooth,
        5000,
        663,
        73,
        255,
        500,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.UntilDone)
        strip.clear()
        strip.show()
        basic.pause(100)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
