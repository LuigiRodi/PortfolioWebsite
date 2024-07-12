const switchIt = document.getElementById('storyTitle');

const newStoryTitle = switchIt.addEventListener('mouseover', () => {
    switchIt.innerHTML = "Ew, don't touch me!";
});

const resetStoryTitle = switchIt.addEventListener('mouseout', () => {
    switchIt.innerHTML = "My story";
});

const button = document.getElementById('button');


const listOfLanguages = ['English', 'Italian', 'French', 'Greek', 'Portuguese'];

let counter = -1;

button.addEventListener('click', () => {
    counter++
    if (counter < listOfLanguages.length) {
        return document.getElementById('languages').innerHTML = listOfLanguages[counter];
    } else if (counter >= listOfLanguages.length) {
        counter = -1;
    }
    });



