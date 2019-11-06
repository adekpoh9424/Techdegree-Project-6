const keyboard = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses'); 
const title = document.querySelector('.title');
const revised = document.querySelector('.btn__reset');
const showLi = document.querySelector('.show');
const startShow = document.querySelector('#overlay');

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
    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);
});

const getRandomPhraseAsArray = arr => {
    const randomPhrase = arr[Math.floor(Math.random() * arr.length)];
    return randomPhrase.split('');
}

function addPhraseToDisplay(arr) {
    const ul = document.querySelector('#phrase ul');
    for(let i = 0; i < arr.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = arr [i];
        phrase.appendChild(listItem);

        if (listItem.textContent !== ' ') {
            listItem.className = 'letter';
        } else {
            listItem.className = 'space';
        }
        
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
        event.target.disabled = true;
        event.target.classList.add('chosen');

        let letterFound = checkLetter(event.target.textContent);
        if (letterFound === null) {
            hearts[missed].src = 'images/lostHeart.png';
            missed += 1;
        }
    }
    checkWin();
});


const checkWin = () => {
    let showLi= document.querySelectorAll('.show');
    const letters = document.querySelectorAll('.letter');
        if (letters.length === showLi.length) {
            startShow.classList.add  ('win');
            title.textContent = 'My Man!';
            revised.textContent = 'cared for another round?';
            return true;
            revised.addEventListener ('click', () => {
                window.location.reload(true);
            });
        }

    if (missed >= 5) {
        startShow.classList.add ('lose');
        startShow.textContent = 'Bummer, guess you should have choose different letters.';
        return true;
    }
    return false;
}