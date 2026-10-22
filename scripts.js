const convertButton = document.querySelector(".convert-button")
const coinSelect = document.querySelector(".originCurrency")
const currencySelect = document.querySelector(".currency-select")

const currencies = {
    real: { rate: 1, locale: "pt-BR", currency: "BRL" },
    dolar: { rate: 5.10, locale: "en-US", currency: "USD" },
    euro: { rate: 5.92, locale: "de-DE", currency: "EUR" },
    libra: { rate: 6.85, locale: "en-GB", currency: "GBP" },
    bitcoin: { rate: 334867.02, locale: "pt-BR", currency: "BTC" }
}





function convertValues() {

    const inputCurrencyValues = Number(document.querySelector(".input-take-of-values").value)

    const currencyValueToConvert = document.querySelector("#currency-value-to-convert")

    const currencyValueConverted = document.querySelector("#currency-converted")




    const from = document.querySelector(".originCurrency").value;
    const to = document.querySelector(".currency-select").value;



    const fromCurrency = currencies[from];
    const toCurrency = currencies[to];

    const result =
        inputCurrencyValues * (fromCurrency.rate / toCurrency.rate);

    currencyValueConverted.innerHTML =
        new Intl.NumberFormat(toCurrency.locale, {
            style: "currency",
            currency: toCurrency.currency
        }).format(result);

    currencyValueToConvert.innerHTML =
        new Intl.NumberFormat(fromCurrency.locale, {
            style: "currency",
            currency: fromCurrency.currency
        }).format(inputCurrencyValues);


    /*  const dolarToday = 5.05
        const euroToday = 5.89
        const libraToday = 6.78
        const bitcoinToday = 360551.42 */

}



/* if (currencySelect.value == "dolar") {
         currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
             style: "currency",
             currency: "USD"
         }).format(inputCurrencyValues / dolarToday)

     }
     if (currencySelect.value == "euro") {
         currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
             style: "currency",
             currency: "EUR"
         }).format(inputCurrencyValues / euroToday)
     }

     if (currencySelect.value == "libra") {
         currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
             style: "currency",
             currency: "GBP"
         }).format(inputCurrencyValues / libraToday)
     }

     if (currencySelect.value == "bitcoin") {
         currencyValueConverted.innerHTML = "₿" + new Intl.NumberFormat("pt-BR", {
             minimumFractionDigits: 8,
             maximumFractionDigits: 8
         }).format(inputCurrencyValues / bitcoinToday)
     }

         currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
             style: "currency",
             currency: "BRL"
         }).format(inputCurrencyValues)

     } */




function originCurrencyName() {
    const coinName = document.querySelector("#currency-name-change")

    const coinImage = document.querySelector(".coin-image")


    if (coinSelect.value == "real") {
        coinName.innerHTML = "Real Brasileiro"

        coinImage.src = "./assets/Real.png"
    }

     if (coinSelect.value == "dolar") {
        coinName.innerHTML = "Dólar Americano"

        coinImage.src = "./assets/Dólar.png"
    }


    if (coinSelect.value == "euro") {
        coinName.innerHTML = "Euro"

        coinImage.src = "./assets/Euro.png"
    }

    if (coinSelect.value == "libra") {
        coinName.innerHTML = "Libra"

        coinImage.src = "./assets/Libra.png"
    }

    if (coinSelect.value == "bitcoin") {
        coinName.innerHTML = "BitCoin"

        coinImage.src = "./assets/Bitcoin.png"
    }


    convertValues()
}




function currencyChange() {
    const currencyName = document.getElementById("currency-name-change-two")

    const currencyImage = document.querySelector(".currrency-img")



    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"

        currencyImage.src = "./assets/Real.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"

        currencyImage.src = "./assets/Dólar.png"
    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"

        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"

        currencyImage.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "BitCoin"

        currencyImage.src = "./assets/Bitcoin.png"
    }

    convertValues()
}


coinSelect.addEventListener("change", originCurrencyName)

currencySelect.addEventListener("change", currencyChange)

convertButton.addEventListener("click", convertValues)


