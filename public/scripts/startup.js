// Initialize firestore and querySelector variables

const firestore = firebase.firestore();
const startButton = document.querySelector('.startButton');
const promptDiv = document.querySelector('.prompt');
const sChoiceButton = document.querySelector('.sbutton');
const sChoiceDivs = document.querySelectorAll('.sbutton-text');
const rChoiceButton = document.querySelector('.rbutton');
const rChoiceDivs = document.querySelectorAll('.rbutton-text');
let currentPromptId;
let currentRChoiceId;
let currentSChoiceId;

startButton.addEventListener('click', async () => {
  try {
    // Retrieve Prompt from FireStore
    const promptDoc = await firestore.collection('prompts').doc('prompt_1').get();

    // Store current Prompt and Choice IDs
    currentPromptId = promptDoc.data().id;
    currentRChoiceId = promptDoc.data().r_choice_id;
    currentSChoiceId = promptDoc.data().s_choice_id;

    // Retrieve Choices based on Current Prompt
    const rChoiceDoc = await firestore.collection('r_choices').doc(currentRChoiceId).get();
    const sChoiceDoc = await firestore.collection('s_choices').doc(currentSChoiceId).get();

    // Access the text fields from the documents' data
    const promptText = promptDoc.data().text;
    const rChoiceText = rChoiceDoc.data().text;
    const sChoiceText = sChoiceDoc.data().text;

    // Update the text in the prompt
    promptDiv.textContent = promptText;

    // Update the text in the buttons
    rChoiceDivs.forEach(div => div.textContent = rChoiceText);
    sChoiceDivs.forEach(div => div.textContent = sChoiceText);

    // Remove start button
    startButton.style.display = 'none';

  } catch (error) {
    console.error('Error retrieving data from Firestore:', error);
  }
});

sChoiceButton.addEventListener('click', async () => {
  try {
    // Retrieve next Prompt based on s_choice
    const selectedSChoice = await firestore.collection('s_choices').doc(currentSChoiceId).get();
    const promptDoc = await firestore.collection('prompts').doc(selectedSChoice.data().prompt_id).get();

    // Update Prompt and Choice IDs
    currentPromptId = promptDoc.data().id;
    currentRChoiceId = promptDoc.data().r_choice_id;
    currentSChoiceId = promptDoc.data().s_choice_id;

    // Retrieve Choices based on Current Prompt
    const rChoiceDoc = await firestore.collection('r_choices').doc(currentRChoiceId).get();
    const sChoiceDoc = await firestore.collection('s_choices').doc(currentSChoiceId).get();

    // Access the text fields from the documents' data
    const promptText = promptDoc.data().text;
    const rChoiceText = rChoiceDoc.data().text;
    const sChoiceText = sChoiceDoc.data().text;

    // Update the text in the prompt
    promptDiv.textContent = promptText;

    // Update the text in the buttons
    rChoiceDivs.forEach(div => div.textContent = rChoiceText);
    sChoiceDivs.forEach(div => div.textContent = sChoiceText);

    if (sChoiceText === "THE") {
      startButton.style.display = 'block';
      startButton.textContent = "Restart";
    }

  } catch (error) {
    console.error('Error retrieving data from Firestore:', error);
  }
});

rChoiceButton.addEventListener('click', async () => {
  try {
    // Retrieve next Prompt based on r_choice
    const selectedRChoice = await firestore.collection('r_choices').doc(currentRChoiceId).get();
    const promptDoc = await firestore.collection('prompts').doc(selectedRChoice.data().prompt_id).get();

    // Update Prompt and Choice IDs
    currentPromptId = promptDoc.data().id;
    currentRChoiceId = promptDoc.data().r_choice_id;
    currentSChoiceId = promptDoc.data().s_choice_id;

    // Retrieve Choices based on Current Prompt
    const rChoiceDoc = await firestore.collection('r_choices').doc(currentRChoiceId).get();
    const sChoiceDoc = await firestore.collection('s_choices').doc(currentSChoiceId).get();

    // Access the text fields from the documents' data
    const promptText = promptDoc.data().text;
    const rChoiceText = rChoiceDoc.data().text;
    const sChoiceText = sChoiceDoc.data().text;

    // Update the text in the prompt
    promptDiv.textContent = promptText;

    // Update the text in the buttons
    rChoiceDivs.forEach(div => div.textContent = rChoiceText);
    sChoiceDivs.forEach(div => div.textContent = sChoiceText);

    if (sChoiceText === "THE") {
      startButton.style.display = 'block';
      startButton.textContent = "Restart";
    }

  } catch (error) {
    console.error('Error retrieving data from Firestore:', error);
  }
});
