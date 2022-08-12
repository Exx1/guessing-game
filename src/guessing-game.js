let option;
    let arr;
    let guessResult;

class GuessingGame {
    constructor() {}

    
    
        setRange(min, max) {
            arr = Array.from(Array(max).keys());
            option = (arr.length);
        }
        
        guess() {
            guessResult = arr[Math.ceil(arr.length / 2)];
            option = Math.ceil(option / 2);
            console.log('guessResult: ' + guessResult);
            return guessResult;
        }
    
        lower() {
            console.log('lower');
            console.log(option);
            arr = arr.slice(0, option);
            console.log(arr);
        }
    
        greater() {
            console.log('greater');
            console.log(option);
            arr = arr.slice(option);
            console.log(arr);
        }
    
    }


    module.exports = GuessingGame;
