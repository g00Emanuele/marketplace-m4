//Recupero i valori del prodotto selezionato e precompilo il form, pronto per essere modificato

const params = new URLSearchParams(window.location.search)
const query = params.get('q')
console.log(query)

window.onload = async () => {
        
        try {
            const raw = await fetch(`https://striveschool-api.herokuapp.com/api/product/${query}`,{
            headers:{
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzYmM0YTFmMTc1YzAwMTRjNTU5MTQiLCJpYXQiOjE2OTI2NDY0NzQsImV4cCI6MTY5Mzg1NjA3NH0.tXUUQc49mVzUSRyElDi2fOW8pjKdcBLuzc718RC2xx4'
            }
        })

        const data = await raw.json()
        console.log(data)

        const Container = document.getElementById('container')
        Container.innerHTML = 
            ` <form>
            <div class="mb-3">
                <label for="name" class="form-label">Product name </label>
                <input type="text" class="form-control" id="name" value='${data.name}' required>
            </div>
            <div class="mb-3">
                <label for="imageUrl" class="form-label">Product image (url)</label>
                <input type="text" class="form-control" id="imageUrl" value='${data.imageUrl}' required>
            </div>
            <div class="mb-3">
                <label for="brand" class="form-label">Product brand</label>
                <input type="text" class="form-control" id="brand" value='${data.brand}' required>
            </div>
            <div class="mb-3">
                <label for="price" class="form-label">Product price</label>
                <input type="text" class="form-control" id="price" value='${data.price}' required>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Product description</label>
                <input type="text" class="form-control" id="description" value='${data.description}' required>
            </div>
            
            <button onclick="saveProduct(event)" type="submit" class="btn btn-primary">Submit</button>
        </form>` 
        
        } catch (error) {
            console.log(error)
        }
}

//Salviamo le modifiche con questa funzione

async function saveProduct(e){
    e.preventDefault()

    try{
        const Pname = document.getElementById('name').value
        const PimageUrl = document.getElementById('imageUrl').value
        const Pbrand = document.getElementById('brand').value
        const Pprice = parseInt(document.getElementById('price').value) 
        const Pdescription = document.getElementById('description').value
    
        const raw = await fetch('https://striveschool-api.herokuapp.com/api/product/' + query ,{
            method:'PUT',
            body: JSON.stringify({
                name:Pname,
                imageUrl:PimageUrl,
                brand:Pbrand,
                price:Pprice,
                description:Pdescription,
            }),
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzYmM0YTFmMTc1YzAwMTRjNTU5MTQiLCJpYXQiOjE2OTI2NDY0NzQsImV4cCI6MTY5Mzg1NjA3NH0.tXUUQc49mVzUSRyElDi2fOW8pjKdcBLuzc718RC2xx4'
            }
        })
        const data = await raw.json()
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}