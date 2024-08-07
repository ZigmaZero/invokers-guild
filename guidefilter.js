let isDeckGuide = true;
let isCardGuide = true;

const deckFilterBtn = document.getElementById('deckGuide');
const cardFilterBtn = document.getElementById('cardGuide');

function hideFilteredDivs(query) {
    // Get all elements with the class "filtered"
    const filteredDivs = document.querySelectorAll(query);

    // Iterate over the NodeList and set their display property to 'none'
    filteredDivs.forEach(div => {
        div.style.display = 'none';
    });
}

function showFilteredDivs(query) {
    // Get all elements with the class "filtered"
    const filteredDivs = document.querySelectorAll(query);

    // Iterate over the NodeList and set their display property to 'none'
    filteredDivs.forEach(div => {
        div.style.display = 'flex';
    });
}

function updateStatus() {
    if (isDeckGuide)
    {
        deckFilterBtn.classList.remove('off');
        deckFilterBtn.classList.add('on');
        showFilteredDivs('div.deck');
    }
    else
    {
        deckFilterBtn.classList.remove('on');
        deckFilterBtn.classList.add('off');
        hideFilteredDivs('div.deck');
    }

    if (isCardGuide)
    {
        cardFilterBtn.classList.remove('off');
        cardFilterBtn.classList.add('on');
        showFilteredDivs('div.card');
    }
    else
    {
        cardFilterBtn.classList.remove('on');
        cardFilterBtn.classList.add('off');
        hideFilteredDivs('div.card');
    }
}

deckFilterBtn.addEventListener('click', () => {
    isDeckGuide = !isDeckGuide;
    updateStatus();
})
cardFilterBtn.addEventListener('click',() => {
    isCardGuide = !isCardGuide;
    updateStatus();
})

updateStatus();