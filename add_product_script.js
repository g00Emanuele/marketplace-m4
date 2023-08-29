//Questa funzione salva il prodotto una volta compilato tutti i campi
//Il form per essere valido ha bisogno che tutti i campi siano riempiti con una stringa a parte il prezzo che richiede un numero

async function saveProduct(e) {
    e.preventDefault()
    try{
        const Pname = document.getElementById('name').value
        const PimageUrl = document.getElementById('imageUrl').value
        const Pbrand = document.getElementById('brand').value
        const Pprice = parseInt(document.getElementById('price').value) 
        const Pdescription = document.getElementById('description').value
    
        const raw = await fetch('https://striveschool-api.herokuapp.com/api/product/',{
            method:'POST',
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



