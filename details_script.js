//Recupero i dati dai parametri URL e mostro solo il prodotto selezionato in dettaglio

window.onload = async () => {

    try {
        console.log(window.location.search)
        const params = new URLSearchParams(window.location.search)
        const query = params.get('q')
    
        const raw = await fetch(`https://striveschool-api.herokuapp.com/api/product/${query}`,{
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzYmM0YTFmMTc1YzAwMTRjNTU5MTQiLCJpYXQiOjE2OTI2NDY0NzQsImV4cCI6MTY5Mzg1NjA3NH0.tXUUQc49mVzUSRyElDi2fOW8pjKdcBLuzc718RC2xx4'
            }
        })
        const product = await raw.json()
        console.log(product)
    
        const cardContainer = document.getElementById('card-container')
        cardContainer.innerHTML = 
             `<div class="col-3"><div class="card" style="width: 18rem;">
                    <div class="card-body">
                    <img src="https://picsum.photos/2000" class="card-img-top" alt="...">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.brand}</p>
                        <p class="card-text">${product.price}</p>
                        <p class="card-text">${product.description}</p>
                    </div>
                    </div> 
                    </div>`
    } catch (err) {
        console.log(err)
    }
 
}




