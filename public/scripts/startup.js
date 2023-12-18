// startup.js

const firestore = firebase.firestore();
const startButton = document.querySelector('.startButton');
const promptDiv = document.querySelector('.prompt');
const rChoiceDivs = document.querySelectorAll('.rbutton-text');
const sChoiceDivs = document.querySelectorAll('.sbutton-text');
const buttonContainer = document.querySelector('.button_container');
const startButtonContainer = document.querySelector('.startButton_container');

// Initially hide the button container
buttonContainer.style.display = 'none';

startButton.addEventListener('click', async () => {
  try {
    // Retrieve documents from FireStore
    const promptDoc = await firestore.collection('prompts').doc('prompt_1').get();
    const rChoiceDoc = await firestore.collection('r_choices').doc('r_choice_1').get();
    const sChoiceDoc = await firestore.collection('s_choices').doc('s_choice_1').get();

    // Access the text fields from the documents' data
    const promptText = promptDoc.data().text;
    const rChoiceText = rChoiceDoc.data().text;
    const sChoiceText = sChoiceDoc.data().text;

    // Update the text in the prompt
    promptDiv.textContent = promptText;

    // Update the text in the buttons
    rChoiceDivs.forEach(div => div.textContent = rChoiceText);
    sChoiceDivs.forEach(div => div.textContent = sChoiceText);

    // Show the button container
    buttonContainer.style.display = 'flex';
    
    // Remove start button
    startButtonContainer.style.display = 'none';

  } catch (error) {
    console.error('Error retrieving data from Firestore:', error);
  }
});

