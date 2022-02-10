document.getElementById('second-heading').innerHTML = 'Hey Class...'

const getDataButton = document.getElementById('get-data')

getDataButton.addEventListener('click', () => {
    console.log('get data')

    function displayData(allBeers) {
        document.querySelector('pre').innerHTML = JSON.stringify(allBeers, null, 2)
    }

    fetch('https://api.sampleapis.com/beers/ale')
        .then(data => data.json())
        .then(beers => displayData(beers))
        .catch(console.error)
    })
    
    function showAlert() {
        alert('hi')
    }
const alertBtn = document.getElementById('show-alert-btn')
alertBtn.addEventListener('click', () => showAlert())