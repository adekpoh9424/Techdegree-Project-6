const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
const revised = document.querySelector('.btn__reset');
const showLi = document.querySelector('.show');
const startShow = document.querySelector('overlay');

let hearts = document.querySelectorAll('img');
let missed = 0;

const phrases = [
    'Family Guy',
    'American Dad',
    'Rick and Morty',
    'Roger Smith',
    'Peter Griffin'
];


//const checkLetter = button => {
   // let matched = null;

//}

revised.addEventListener('click', () => {
    overlay.style.display = 'none';
});

revised.addEventListener('click', () => {
    revised.style.display = 'none';
    const phraseArray = getRandomPhraseAsArray(phrase);
    addPhraseToDisplay(phraseArray);
});

function getRandomPhraseAsArray(arr) {
    const randomPhrase = arr[Math.floor(Math.random() * arr.lenght)];
    return randomPhrase.split('');
}


function addPhraseToDisplay(arr) {
    for(let i = 0; i < arr.lenght; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = arr [i];
        phraseList.appendChild(listItem);

        if (listItem.textContent !== '') {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
        ul.appendChild(li);
    }
}

// call phrase function
const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);
// checkLetter function

const checkLetter = button => {
    let matched = null;
    const letters = document.querySelectorAll('.letter');

    letters.forEach(letter => {
        if(button === letter.textContent.toLocaleLowerCase()) {
            letter.classList.add('show');
            matched = true;
        }
    });

    return matched;
};

keyboard.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        event.target.className = 'chosen';
        event.target.disabled = true;

        const letterFound = checkLetter(event.target.textContent.toLowerCase());
        if(!letterFound === null){
            missed++;
            const img = document.querySelectorAll('img');
            img[mised -1].src="images/lostHeart.png";
        }
    }
    checkWin();
});

const checkWin = () => {
    let think = document.querySelectorAll('.show');
    const letters = document.querySelectorAll('.letter')
        if (think.length === letters.length) {
            startShow.style.display.class  ('win');
            startShow.textContent = 'My Man!'
            btn__reset.textContent = 'cared for another round?';
            return true;
        }

    if (missed >= 5) {
        startShow.className = 'lose';
        startShow.textContent = 'Bummer, guess you should have choose diffrent letters.';
        return true;
    }
    return false;
}