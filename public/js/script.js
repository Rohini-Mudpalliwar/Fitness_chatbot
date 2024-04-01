document.addEventListener('DOMContentLoaded', function () {
    const socket = io();
    // DOM elements
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatOutput = document.getElementById('chat-output');

    // ...........how to reset the input message written by the user
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', resetMessage);
     function resetMessage(){
    messageInput.value = '';
     }
   
     
    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    // Listen for messages from the server
    socket.on('chat-message', function (data) {
    displayMessage(data);
    });
    // Function to send a message
    function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
    // Emit the message to the server
    socket.emit('chat-message', {
    user: 'You',
    message: message,
    server1: 'Guru',
    messageAI: serverFunction(message),
    });
    // Clear the input field
    messageInput.value = '';
    }
    }
    //Function to serach keyword of question and create answer
    function serverFunction(message){
    const keywords = ['healthy', 'lifestyle', 'water', 'consume', 'drink', 'snack', 'stress','exercise', 'sleep', 'dehydration', 'smoke', 'smoking', 'diet', 'balance', 'immune', 'system', 'headaches', 'protein', 'mental','posture', 'fatigue', 'back', 'flexibility'];
    const messageWords = message.split(' ');
    let ans = '';
    let keywordFound = false;
    for (let i = 0; i < messageWords.length; i++) {
    const keywordIndex =
    keywords.indexOf(messageWords[i].toLowerCase());
    if (keywordIndex !== -1 && !keywordFound) {
    // Keyword found
    ans = generateAnswer(keywords[keywordIndex]) + ' ';
    keywordFound = true;//Set to true to stop searching for other keywords
    
    } else if (!keywordFound){
    ans = 'Apologies :( unable to provide; consider exploring other options &#128064;';
    }
    }
    return ans.trim(); // Trim to remove leading/trailing spaces
    }
    // Function to generate an answer based on the keyword
    function generateAnswer(keyword) {
    switch (keyword) {
    case 'healthy':
    return 'A healthy lifestyle involves regular exercise, a balanced diet, sufficient sleep, and stress management.';
    break;
    case 'lifestyle':
    return 'A healthy lifestyle involves regular exercise, a balanced diet, sufficient sleep, and stress management.';
    case 'water':
    return 'The general recommendation is to drink at least eight 8-ounce glasses of water per day, but individual needs may vary.';
    case 'consume':
    return 'The general recommendation is to drink at least eight 8-ounce glasses of water per day, but individual needs may vary.';
    case 'drink':
      return 'The general recommendation is to drink at least eight 8-ounce glasses of water per day, but individual needs may vary.';
    case 'snack':
      return 'Nuts, fruits, yogurt, and vegetables with hummus are excellent choices for quick and healthy snacks.';
    case 'stress':
      return 'Practice mindfulness, deep breathing, and regular physical activity to help manage stress. Seeking support from friends, family, or a professional can also be beneficial.';
    case 'exercise':
      return 'Regular exercise improves cardiovascular health, boosts mood, helps maintain a healthy weight, and enhances overall well-being.';
    case 'sleep':
      return 'Establish a consistent sleep schedule, create a relaxing bedtime routine, and ensure your sleep environment is comfortable and conducive to rest.';
    case 'dehydration':
       return 'Thirst, dark yellow urine, dizziness, and dry mouth are common signs of dehydration.';
    case 'smoke':
      return 'Seek support from friends, family, or a smoking cessation program. Consider nicotine replacement therapy and adopt healthy coping strategies to manage cravings.';
    case 'smoking':
      return 'Seek support from friends, family, or a smoking cessation program. Consider nicotine replacement therapy and adopt healthy coping strategies to manage cravings.';
    case 'diet':
      return 'A balanced diet provides essential nutrients for overall health, supports energy levels, and helps maintain a healthy weight.';
    case 'balance':
        return 'A balanced diet provides essential nutrients for overall health, supports energy levels, and helps maintain a healthy weight.';
    case 'immune':
      return 'Eating a nutritious diet, getting regular exercise, staying hydrated, and getting enough sleep can help support a strong immune system.';
    case 'system':
        return 'Eating a nutritious diet, getting regular exercise, staying hydrated, and getting enough sleep can help support a strong immune system.';
    case 'headaches':
          return 'Stay hydrated, manage stress, maintain regular sleep patterns, and consult a healthcare professional if headaches persist.';
    case 'protein':
            return 'Legumes, tofu, tempeh, quinoa, and dairy products are excellent options.';
    case 'mental':
              return 'Practice self-care, engage in enjoyable activities, and seek support when needed.';
    case 'posture':
                return 'Sit and stand up straight, take breaks to stretch, and strengthen core muscles.';
    case 'fatigue':
      return 'Lack of sleep, poor nutrition, dehydration, or underlying health issues. Consult a healthcare professional for personalized advice.';
    case 'back':
      return 'Practice good posture, engage in regular exercise (especially core strengthening), and consider ergonomic adjustments.';
    case 'flexibility':
      return 'Incorporate regular stretching exercises, such as yoga or Pilates, into your routine.';
      

    default:
    return 'Apologies :( unable to provide; consider exploring other options.';
    }
    }
    // Function to display a message in the chat
    // function displayMessage(data) {
    // const messageElement = document.createElement('div');
    // const timestamp = new Date().toLocaleTimeString();
    // messageElement.classList.add('message');
    // messageElement.innerHTML = `<strong>${data.user}:   </strong>${data.message}<br>
    // <strong>${data.server1}:   </strong>${data.messageAI}<br>
    // <span class="timestamp">${timestamp}</span><br><br>`;
    // chatOutput.appendChild(messageElement);
    // // Scroll to the bottom of the chat
    // chatOutput.scrollTop = chatOutput.scrollHeight;
    // }
    // });


      // Function to display a message in the chat
      function displayMessage(data) {
        const messageElement = document.createElement('div');
        const timestamp = new Date().toLocaleTimeString();
        messageElement.classList.add('message');
        messageElement.innerHTML = `<div style="color: darkseagreen;"><strong>${data.user}: </strong>${data.message}</div>
        <strong>${data.server1}: </strong>${data.messageAI}<br>
        <span class="timestamp">${timestamp}</span><hr>`;
        chatOutput.appendChild(messageElement);

        // Scroll to the bottom of the chat
        chatOutput.scrollTop = chatOutput.scrollHeight;
        }
        });