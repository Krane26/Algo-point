function analyzeSentence(sentence) {
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    if (sentence[sentence.length - 1] !== '.') {
        console.log("The sentence must end with a period.");
        return;
    }

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        lengthCounter++;

        if (vowels.has(char)) {
            vowelCounter++;
        }
        if (char === ' ') {
            wordCounter++;
        }
    }

    if (lengthCounter > 1) {
        wordCounter++;
    }

    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

let sentence = "This is an example sentence."; 
analyzeSentence(sentence);
