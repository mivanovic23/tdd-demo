let pricelist = [
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
]

function logPricelist(pricelist) {
    let rezultat = ""
    let zadnjiunos = {}
    pricelist.sort((x, y) => x.price - y.price)
    
    pricelist.forEach(function (x) {
        if (x.price == zadnjiunos.price) 
            rezultat =rezultat + `${x.from} do ${x.to}`
        else 
            rezultat =rezultat + `${x.price} : ${x.from} do ${x.to}`
            zadnjiunos = x
    })

    console.log(rezultat)
}

logPricelist(pricelist)