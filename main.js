// Recupero i dati e faccio vedere tutti i prodotti presenti sul sito

window.onload = async () => {
    try {
        const raw = await fetch('https://striveschool-api.herokuapp.com/api/product/',{
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzYmM0YTFmMTc1YzAwMTRjNTU5MTQiLCJpYXQiOjE2OTI2NDY0NzQsImV4cCI6MTY5Mzg1NjA3NH0.tXUUQc49mVzUSRyElDi2fOW8pjKdcBLuzc718RC2xx4'
            }
        })
        const data = await raw.json()
        const cardContainer = document.getElementById('card-container')
        cardContainer.innerHTML = await data.map((product) => {
            return `<div class="col-3"><div class="card">
                    <div class="card-body">
                    <img src="${product.imageUrl}" class="card-img-top" alt="...">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.brand}</p>
                        <p class="card-text">${product.price}</p>
                        <p class="card-text">${product.description}</p>
                        <a href="./details.html?q=${product._id}" class="btn btn-primary">Product details</a>
                        <a href="./modify.html?q=${product._id}" class="btn btn-success">Modify</a>
                        <button id='${product._id}' onclick="deleteProduct(event)" type="button" class="btn btn-danger">Delete</button>
                    </div>
                    </div> 
                    </div>` 
        }).join('')
    } catch (err) {
        console.log(err)
    }
}

//Questa funzione elimina il prodotto selezionato e aggiorna la pagina

async function deleteProduct(e){
    console.log(e.target.id)
    const id = e.target.id
    try {
        const raw = await fetch('https://striveschool-api.herokuapp.com/api/product/' + id, {
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzYmM0YTFmMTc1YzAwMTRjNTU5MTQiLCJpYXQiOjE2OTI2NDY0NzQsImV4cCI6MTY5Mzg1NjA3NH0.tXUUQc49mVzUSRyElDi2fOW8pjKdcBLuzc718RC2xx4'
            }
        })
        location.reload()
    } catch (error) {
        console.log(error)
    }
}





