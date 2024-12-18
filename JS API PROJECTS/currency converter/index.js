const button = document.querySelector('#button');
const exchange_icon = document.querySelector('#Exchange');
const select = document.querySelectorAll('.select');
const fromSelect = document.querySelector(".from select");
const toSelect = document.querySelector(".to select");

let country_list = {
    "AED" : "AE",
    "AFN" : "AF",
    "XCD" : "AG",
    "ALL" : "AL",
    "AMD" : "AM",
    "ANG" : "AN",
    "AOA" : "AO",
    "AQD" : "AQ",
    "ARS" : "AR",
    "AUD" : "AU",
    "AZN" : "AZ",
    "BAM" : "BA",
    "BBD" : "BB",
    "BDT" : "BD",
    "XOF" : "BE",
    "BGN" : "BG",
    "BHD" : "BH",
    "BIF" : "BI",
    "BMD" : "BM",
    "BND" : "BN",
    "BOB" : "BO",
    "BRL" : "BR",
    "BSD" : "BS",
    "NOK" : "BV",
    "BWP" : "BW",
    "BYR" : "BY",
    "BZD" : "BZ",
    "CAD" : "CA",
    "CDF" : "CD",
    "XAF" : "CF",
    "CHF" : "CH",
    "CLP" : "CL",
    "CNY" : "CN",
    "COP" : "CO",
    "CRC" : "CR",
    "CUP" : "CU",
    "CVE" : "CV",
    "CYP" : "CY",
    "CZK" : "CZ",
    "DJF" : "DJ",
    "DKK" : "DK",
    "DOP" : "DO",
    "DZD" : "DZ",
    "ECS" : "EC",
    "EEK" : "EE",
    "EGP" : "EG",
    "ETB" : "ET",
    "EUR" : "FR",
    "FJD" : "FJ",
    "FKP" : "FK",
    "GBP" : "GB",
    "GEL" : "GE",
    "GGP" : "GG",
    "GHS" : "GH",
    "GIP" : "GI",
    "GMD" : "GM",
    "GNF" : "GN",
    "GTQ" : "GT",
    "GYD" : "GY",
    "HKD" : "HK",
    "HNL" : "HN",
    "HRK" : "HR",
    "HTG" : "HT",
    "HUF" : "HU",
    "IDR" : "ID",
    "ILS" : "IL",
    "INR" : "IN",
    "IQD" : "IQ",
    "IRR" : "IR",
    "ISK" : "IS",
    "JMD" : "JM",
    "JOD" : "JO",
    "JPY" : "JP",
    "KES" : "KE",
    "KGS" : "KG",
    "KHR" : "KH",
    "KMF" : "KM",
    "KPW" : "KP",
    "KRW" : "KR",
    "KWD" : "KW",
    "KYD" : "KY",
    "KZT" : "KZ",
    "LAK" : "LA",
    "LBP" : "LB",
    "LKR" : "LK",
    "LRD" : "LR",
    "LSL" : "LS",
    "LTL" : "LT",
    "LVL" : "LV",
    "LYD" : "LY",
    "MAD" : "MA",
    "MDL" : "MD",
    "MGA" : "MG",
    "MKD" : "MK",
    "MMK" : "MM",
    "MNT" : "MN",
    "MOP" : "MO",
    "MRO" : "MR",
    "MTL" : "MT",
    "MUR" : "MU",
    "MVR" : "MV",
    "MWK" : "MW",
    "MXN" : "MX",
    "MYR" : "MY",
    "MZN" : "MZ",
    "NAD" : "NA",
    "XPF" : "NC",
    "NGN" : "NG",
    "NIO" : "NI",
    "NPR" : "NP",
    "NZD" : "NZ",
    "OMR" : "OM",
    "PAB" : "PA",
    "PEN" : "PE",
    "PGK" : "PG",
    "PHP" : "PH",
    "PKR" : "PK",
    "PLN" : "PL",
    "PYG" : "PY",
    "QAR" : "QA",
    "RON" : "RO",
    "RSD" : "RS",
    "RUB" : "RU",
    "RWF" : "RW",
    "SAR" : "SA",
    "SBD" : "SB",
    "SCR" : "SC",
    "SDG" : "SD",
    "SEK" : "SE",
    "SGD" : "SG",
    "SKK" : "SK",
    "SLL" : "SL",
    "SOS" : "SO",
    "SRD" : "SR",
    "STD" : "ST",
    "SVC" : "SV",
    "SYP" : "SY",
    "SZL" : "SZ",
    "THB" : "TH",
    "TJS" : "TJ",
    "TMT" : "TM",
    "TND" : "TN",
    "TOP" : "TO",
    "TRY" : "TR",
    "TTD" : "TT",
    "TWD" : "TW",
    "TZS" : "TZ",
    "UAH" : "UA",
    "UGX" : "UG",
    "USD" : "US",
    "UYU" : "UY",
    "UZS" : "UZ",
    "VEF" : "VE",
    "VND" : "VN",
    "VUV" : "VU",
    "YER" : "YE",
    "ZAR" : "ZA",
    "ZMK" : "ZM",
    "ZWD" : "ZW"
}


let Currnecy2;

for(let i=0; i<select.length; i++){
    for(let key in country_list){

        let selected;
        if (i == 0){
            if(key == 'USD'){
                selected = 'Selected';
            }
        } else if (i == 1){
            if(key == "INR"){
                selected = 'Selected';
            }
        }

        let option =`<option value='${key}' ${selected}>${key}</option>`;
        select[i].insertAdjacentHTML('beforeend',option);                        //LEARN NEW.....

        Currnecy2 = key;
    }
    select[i].addEventListener('change', (e)=>{
        Imgload(e.target);
    })
}

function Imgload(element){
    for(let country in country_list){
        if(country == element.value){
            let img = element.parentElement.querySelector('img');                   //LEARN NEW.....
            img.src = `https://flagsapi.com/${country_list[country]}/flat/64.png`;
        }
    }
}


let ToValue;

function Exchange_Rate(){
    let res = document.querySelector('#result');
    let input = document.querySelector('#input').value;

    const api_key = '3cf35d67bc5625c0fe9375f4';
    let url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${fromSelect.value}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => { ToValue = data.conversion_rates[toSelect.value];
        ToValue = input * ToValue;
        // Math.round(ToValue);
        const Output = `${input} ${fromSelect.value} = ${ToValue} ${toSelect.value}`;
        res.innerHTML = Output;
    })   
}

function exchange(){
    let FromSelect = document.querySelector('.from-select select');
    let toSelect = document.querySelector('.to-select select');

    let tempSelect;

    tempSelect = FromSelect.value;
    FromSelect.value = toSelect.value;
    toSelect.value = tempSelect;

    Exchange_Rate();
    Imgload(FromSelect);
    Imgload(toSelect);
}


button.addEventListener('click', ()=>{
    Exchange_Rate();
})

exchange_icon.addEventListener('click', ()=>{
    exchange();
})


// let Currnecy2;

// for(let i=0; i<select.length; i++){
//     for(let key in country_list){

//         let selected;
//         if (i == 0){
//             if(key == 'USD'){
//                 selected = 'Selected';
//             }
//         } else if (i == 1){
//             if(key == "INR"){
//                 selected = 'Selected';
//             }
//         }

//         let option =`<option value='${key}' ${selected}>${key}</option>`;
//         select[i].insertAdjacentHTML('beforeend',option);                        //LEARN NEW.....

//         Currnecy2 = key;
//     }
//     select[i].addEventListener('change', (e)=>{
//         Imgload(e.target);
//     })
// }

// function Imgload(element){
//     for(let country in country_list){
//         if(country == element.value){
//             let img = element.parentElement.querySelector('img');                   //LEARN NEW.....
//             img.src = `https://flagsapi.com/${country_list[country]}/flat/64.png`;
//         }
//     }
// }


// let ToValue;

// function Exchange_Rate(){
//     res;
//     input;

//     const api_key = '3cf35d67bc5625c0fe9375f4';
//     let url = `https://v6.exchangerate-api.com/v6/${api_key}/latest/${fromSelect.value}`;
//     fetch(url)
//     .then(resp => resp.json())
//     .then(data => { ToValue = data.conversion_rates[toSelect.value];
//         ToValue = input * ToValue;
//         // Math.round(ToValue);
//         const Output = `${input} ${fromSelect.value} = ${ToValue} ${toSelect.value}`;
//         res.innerHTML = Output;
//     })   
// }

// function exchange(){
//     let FromSelect = document.querySelector('.from-select select');
//     let toSelect = document.querySelector('.to-select select');

//     let tempSelect;

//     tempSelect = FromSelect.value;
//     FromSelect.value = toSelect.value;
//     toSelect.value = tempSelect;

//     Exchange_Rate();
//     Imgload(FromSelect);
//     Imgload(toSelect);
// }


// button.addEventListener('click', ()=>{
//     Exchange_Rate();
// })

// exchange_icon.addEventListener('click', ()=>{
//     exchange();
// })