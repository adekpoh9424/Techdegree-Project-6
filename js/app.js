const keyboard = document.querySelector('#qwert');
const phrase = document.querySelector('#phrase');
const letters = document.querySelectorAll('.letter');
const misses = document.querySelector('.misses');
const revised = document.querySelector('.btn__reset');
const showLi = document.querySelector('.show');
const start = document.querySelector('overlay');

let hearts = document.querySelectorAll('img');
let missed = 0;

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

const phrases = [
    'Family Guy',
    'American Dad',
    'Rick and Morty',
    'Roger Smith',
    'Peter Griffin'
];

function getRandomPhraseAsArray(arr) {
    const random = arr[Math.floor(Math.random() * arr.lenght)];
    return random.split('');
}

// call RandomPhrase function

//const phraseArray = getRandomPhraseAsArray(phrases);


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

//addPhraseToDisplay(phraseArray);

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

keyboard.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        event.target.className = 'chosen';
        event.target.disabled = true;

        const letterFound = checkLetter(event.target.textContent.toLowerCase());
        if(!letterFound){
            missed++;
            const img = document.querySelectorAll('img');
            img[mised -1].src="images/lostHeart.png";
        }
    }
    checkWin('');
});