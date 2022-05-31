const feedDisplay = document.querySelector('#feed')




fetch('http://localhost:3000/subscribers')
.then(response => response.json())
.then(data => {
    data.forEach(article => {
    const articleItem = `<div>
    <h3>` + article.title + `</h3>
    <p>` + article.message + `</p></div>`
    feedDisplay.insertAdjacentHTML('beforeend', articleItem)
})
})
.catch(err => console.log(err))

