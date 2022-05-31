const feedDisplay = document.querySelector('#feed')




fetch('http://localhost:3000/subscribers')
.then(response => response.json())
.then(data => console.log(data))


