'use script'

//question 1
function addClass() {
    const input = document.getElementById('classInput').value;
    const text = document.getElementById('text');

    text.className = '';

    text.classList.add(input);
}

//question 2
function toggleParagraph(paragraphId) {
    const paragraph = document.getElementById(paragraphId);
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}

function handleClickMe() {
    const button = document.getElementById('clickMeButton');
    button.innerText = 'Clicked';
    button.classList.add('disabled');
}        