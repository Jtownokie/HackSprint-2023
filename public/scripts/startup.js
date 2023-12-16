const firestore = firebase.firestore();
const startButton = document.querySelector('.startButton');
const promptDiv = document.querySelector('.prompt');

startButton.addEventListener('click', async () => {
  try {
    // Retreive document for prompt_1
    const promptDoc = await firestore.collection('prompts').doc('prompt_1').get();
    
    // Access the 'text' field from the document data
    const promptText = promptDoc.data().text;

    // Update the text in the prompt div
    promptDiv.textContent = promptText;
  } catch (error) {
    console.error('Error retrieving data from Firestore:', error);
  }
});
