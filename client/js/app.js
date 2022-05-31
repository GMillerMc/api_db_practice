const suscribersList = document.querySelector('#subscribersList');


getAllSubscribers();

// ********************************************

// DOGS FLOW
// index
function getAllSubscribers(){
    fetch('http://localhost:3000/subscribers')
        .then(r => r.json())
        .then(appendSubscribers)
        .catch(console.warn)
};
