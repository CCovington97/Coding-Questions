// nothing
// pair AA
// two pair AAKK
// three of a kind 444
// straight 23456
// flush HHHHH
// four of a kind 8888
// straight flush 56789
let container = document.getElementById('container')

class FiveCardPoker {
    constructor() {
        this.btn = document.createElement('button');
        container.prependChild(this.btn)
        this.btn.addEventListener('click', (
            console.log('hello?')
        ))
    }

    deal() {
        // start a game and deal 5 random cards
        // easiest way is to set it in an array
        const DECK = [
            '2c', '3c', '4c', '5c', '6c', '7c', '8c', '9c', '10c', 'jc', 'qc', 'kc', 'ac', // clubs
            '2d', '3d', '4d', '5d', '6d', '7d', '8d', '9d', '10d', 'jd', 'qd', 'kd', 'ad', // diamonds
            '2h', '3h', '4h', '5h', '6h', '7h', '8h', '9h', '10h', 'jh', 'qh', 'kh', 'ah', // hearts
            '2s', '3s', '4s', '5s', '6s', '7s', '8s', '9s', '10s', 'js', 'qs', 'ks', 'as', // spades
        ]
        let random = Math.floor(Math.random() * DECK.length)
        console.log(random)
    }

    draw(cards) {
        // takes in an array as an argument (which is the card you want to discard)
        // and you will get back the same number of cards
        // i.e., if you discard two cards, you get two new cards back
    }

    show() {
        // log whatever your current hand is
        // i.e., 2h 3s 5d 6h 7d
    }

    result() {
        // prints out what hand you have
        // ex) straight
    }
}