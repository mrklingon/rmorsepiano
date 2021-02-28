function encrypt (text: string) {
    cmsg = ""
    for (let index = 0; index <= text.length - 1; index++) {
        chr = text.charAt(index)
        cmsg = "" + cmsg + (" " + morse[alphabet.indexOf(chr)])
    }
    return cmsg
}
function playCode (text: string) {
    for (let index2 = 0; index2 <= text.length; index2++) {
        chr = text.charAt(index2)
        if (chr == ".") {
            DOT.showImage(0)
            music.playTone(523, music.beat(BeatFraction.Eighth))
        }
        if (chr == "-") {
            DASH.showImage(0)
            music.playTone(131, music.beat(BeatFraction.Half))
        }
        basic.pause(100)
        BLANK.showImage(0)
    }
}
input.onButtonPressed(Button.A, function () {
    msg = Verses.shift()
    Minit = VInit.shift()
    Verses.push(msg)
    VInit.push(Minit)
    basic.showString("" + (Minit))
})
input.onButtonPressed(Button.AB, function () {
    encrypt(msg)
    for (let index = 0; index <= msg.length - 1; index++) {
        radio.sendString(cmsg.charAt(index))
    }
    playCode(cmsg)
})
radio.onReceivedString(function (receivedString) {
    playCode(receivedString)
})
input.onButtonPressed(Button.B, function () {
    encrypt(msg)
    basic.showString("" + (cmsg))
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (msg))
})
let Minit = ""
let chr = ""
let cmsg = ""
let alphabet: string[] = []
let morse: string[] = []
let msg = ""
let VInit: string[] = []
let Verses: string[] = []
let DASH: Image = null
let DOT: Image = null
let BLANK: Image = null
let code = ""
let Cword = ""
let Word = ""
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
radio.setGroup(1)
BLANK = images.createImage(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
DOT = images.createImage(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
DASH = images.createImage(`
    . . . . .
    . . . . .
    # # # # #
    . . . . .
    . . . . .
    `)
let j316 = "for god so loved the world"
let P23 = "the lord is my shepherd"
let Phl4 = "i can do all things"
let Isaiah263 = "thou wilt keep him in perfect peace"
let _2Tim316 = "all scripture is given by inspiration of god"
Verses = [Phl4, P23, j316, Isaiah263, _2Tim316]
VInit = ["P", "S", "J", "I", "T"]
msg = j316
morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----", "/"]
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", " "]
playCode(encrypt("morse"))
