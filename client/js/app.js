const suscribersList = document.querySelector('#subscribersList');


getAllSubscribers();

function getAllSubscribers(){
    fetch('http://localhost:3000/subscribers')
        .then(r => r.json())
        .then(appendSubscribers)
        .catch(console.warn)
};
