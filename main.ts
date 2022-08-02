input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        # . # . .
        # . # . .
        . . . . .
        . # # # .
        `)
    control.waitMicros(1000000)
    main_animation = 0
    control.waitMicros(1000000)
    main_animation = 1
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . # . #
        . . . . .
        . # # # .
        `)
    control.waitMicros(1000000)
    main_animation = 0
    control.waitMicros(1000000)
    main_animation = 1
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(eat)
})
input.onButtonPressed(Button.AB, function () {
    eat = 60
})
input.onButtonPressed(Button.B, function () {
    dead_or_no = eat + 1
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . # . # .
        # # . # #
        . . . . .
        . . # . .
        . # # # .
        `)
    control.waitMicros(1000000)
    main_animation = 0
    control.waitMicros(1000000)
    main_animation = 1
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        `)
    control.waitMicros(1000000)
    main_animation = 0
    control.waitMicros(1000000)
    main_animation = 1
})
input.onGesture(Gesture.Shake, function () {
    music.playTone(165, music.beat(BeatFraction.Double))
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        . # . # .
        # . . . #
        . . . . .
        `)
    main_animation = 0
    control.waitMicros(1000000)
    main_animation = 1
})
let main_animation = 0
let eat = 0
let dead_or_no = 0
dead_or_no = 0
eat = 15
loops.everyInterval(1000, function () {
    eat = eat - 1
})
basic.forever(function () {
    if (main_animation == 1) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        control.waitMicros(1000000)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        control.waitMicros(50)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        control.waitMicros(100)
    } else {
        control.waitMicros(99999)
    }
})
basic.forever(function () {
    if (eat == 0) {
        music.playMelody("C5 C5 C5 C5 C5 B B C5 ", 160)
        control.waitMicros(3000000)
        if (input.buttonIsPressed(Button.B)) {
            music.playMelody("G A G A A B C5 - ", 400)
            dead_or_no = 0
            eat += 20
            control.waitMicros(3000000)
        } else {
            dead_or_no = 1
            music.playMelody("F E F G F E D C ", 106)
            basic.showIcon(IconNames.Sad)
            control.waitMicros(1000000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                # . . . #
                `)
            control.waitMicros(100)
            basic.showLeds(`
                . # . # .
                # # # # #
                . # . # .
                # # # # #
                . # . # .
                `)
            control.waitMicros(10000)
            basic.showString("01011001 01101111 01110101 00100000 01110100 01101000 01101111 01110101 01100111 01101000 01110100 00100000 01110100 01101000 01100101 01110010 01100101 00100000 01110111 01101111 01110101 01101100 01100100 00100000 01100010 01100101 00100000 01100001 00100000 01110011 01100101 01100011 01110010 01100101 01110100 00100000 01101101 01100101 01110011 01110011 01100001 01100111 01100101 00100000 01101000 01100101 01110010 01100101 00111111 00100000 01001010 01110101 01110011 01110100 00100000 01100001 00100000 00100010 01101110 01101111 01110100 00100000 01100001 00100000 01110011 01100101 01100011 01110010 01100101 01110100 00100000 01101101 01100101 01110011 01110011 01100001 01100111 01100101 00100010 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 00100000 01100111 01100001 01101101 01100101 00100000 01100100 01100101 01110110 01100101 01101100 01101111 01110000 01100101 01110010 00100000 01010011 01101011 01101001 01101101 01101111 01101110 00110011 00110000 00110000 00111001 00100000 00100000 00100000 00100000 00100000 00100000 00100000 01100100 01100001 01110100 01100101 00100000 00111000 00101110 00110001 00101110 00110010 00110000 00110010 00110010")
            basic.pause(999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)
            control.waitMicros(1e+261)
        }
    }
})
