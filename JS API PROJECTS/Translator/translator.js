let inputFrom = document.querySelector('#input1');
let inputTo = document.querySelector('#input2');
const exchange = document.querySelector('#exchange');
const speaker = document.querySelectorAll('.speaker');
let clipboardCopy = document.querySelectorAll(".clipboard");
let select = document.querySelectorAll('.select');
let button = document.querySelector('#btn');

const countries = {
    "am-ET": "Amharic",
    "ar-SA": "Arabic",
    "be-BY": "Bielarus",
    "bem-ZM": "Bemba",
    "bi-VU": "Bislama",
    "bjs-BB": "Bajan",
    "bn-IN": "Bengali",
    "bo-CN": "Tibetan",
    "br-FR": "Breton",
    "bs-BA": "Bosnian",
    "ca-ES": "Catalan",
    "cop-EG": "Coptic",
    "cs-CZ": "Czech",
    "cy-GB": "Welsh",
    "da-DK": "Danish",
    "dz-BT": "Dzongkha",
    "de-DE": "German",
    "dv-MV": "Maldivian",
    "el-GR": "Greek",
    "en-GB": "English",
    "es-ES": "Spanish",
    "et-EE": "Estonian",
    "eu-ES": "Basque",
    "fa-IR": "Persian",
    "fi-FI": "Finnish",
    "fn-FNG": "Fanagalo",
    "fo-FO": "Faroese",
    "fr-FR": "French",
    "gl-ES": "Galician",
    "gu-IN": "Gujarati",
    "ha-NE": "Hausa",
    "he-IL": "Hebrew",
    "hi-IN": "Hindi",
    "hr-HR": "Croatian",
    "hu-HU": "Hungarian",
    "id-ID": "Indonesian",
    "is-IS": "Icelandic",
    "it-IT": "Italian",
    "ja-JP": "Japanese",
    "kk-KZ": "Kazakh",
    "km-KM": "Khmer",
    "kn-IN": "Kannada",
    "ko-KR": "Korean",
    "ku-TR": "Kurdish",
    "ky-KG": "Kyrgyz",
    "la-VA": "Latin",
    "lo-LA": "Lao",
    "lv-LV": "Latvian",
    "men-SL": "Mende",
    "mg-MG": "Malagasy",
    "mi-NZ": "Maori",
    "ms-MY": "Malay",
    "mt-MT": "Maltese",
    "my-MM": "Burmese",
    "ne-NP": "Nepali",
    "niu-NU": "Niuean",
    "nl-NL": "Dutch",
    "no-NO": "Norwegian",
    "ny-MW": "Nyanja",
    "ur-PK": "Pakistani",
    "pau-PW": "Palauan",
    "pa-IN": "Panjabi",
    "ps-PK": "Pashto",
    "pis-SB": "Pijin",
    "pl-PL": "Polish",
    "pt-PT": "Portuguese",
    "rn-BI": "Kirundi",
    "ro-RO": "Romanian",
    "ru-RU": "Russian",
    "sg-CF": "Sango",
    "si-LK": "Sinhala",
    "sk-SK": "Slovak",
    "sm-WS": "Samoan",
    "sn-ZW": "Shona",
    "so-SO": "Somali",
    "sq-AL": "Albanian",
    "sr-RS": "Serbian",
    "sv-SE": "Swedish",
    "sw-SZ": "Swahili",
    "ta-LK": "Tamil",
    "te-IN": "Telugu",
    "tet-TL": "Tetum",
    "tg-TJ": "Tajik",
    "th-TH": "Thai",
    "ti-TI": "Tigrinya",
    "tk-TM": "Turkmen",
    "tl-PH": "Tagalog",
    "tn-BW": "Tswana",
    "to-TO": "Tongan",
    "tr-TR": "Turkish",
    "uk-UA": "Ukrainian",
    "uz-UZ": "Uzbek",
    "vi-VN": "Vietnamese",
    "wo-SN": "Wolof",
    "xh-ZA": "Xhosa",
    "yi-YD": "Yiddish",
    "zu-ZA": "Zulu"
}

select.forEach((tag,id) => {
    for(const key in countries){
        let selected;
        if(id == 0 && key == 'en-GB'){
            selected  = 'selected';
        }else if (id == 1 && key == 'hi-IN'){
            selected  = 'selected';
        }
        let option= `<option value="${key}" ${selected}>${countries[key]}</option>`; 
        tag.insertAdjacentHTML("beforeend", option);
    }
});

button.addEventListener('click', ()=>{  
    const input = inputFrom.value;
    const From_language = select[0].value;
    const To_language = select[1].value;
    
    if(input.length > 0){
        inputTo.innerHTML = 'Translating...';
    }else if(!input){
        inputTo.innerHTML = 'Try Again!';
    }

    const url = `https://api.mymemory.translated.net/get?q=${input}&langpair=${From_language}|${To_language}`;
    let data1 = fetch(url)
    .then(res => res.json())  
    .then(data => {inputTo.value = data.responseData.translatedText});

})


exchange.addEventListener('click', ()=>{
    let tempSelect = select[0].value;
    let tempInput = inputFrom.value;
    select[0].value = select[1].value;
    inputFrom.value = inputTo.value;
    select[1].value= tempSelect ;
    inputTo.value = tempInput;
})

clipboardCopy.forEach(clipboard => {
    clipboard.addEventListener('click', ({target})=>{
        if(target.id == "fromCopy"){
            navigator.clipboard.writeText(inputFrom.value)  //NEW Learning...! ( Copy Text Property )
        }
        else if(target.id == "toCopy"){
            navigator.clipboard.writeText(inputTo.value)    //NEW Learning...! ( Copy Text Property )
        }
    })
});

speaker.forEach(voice => {
    voice.addEventListener('click', ({target})=>{
        let speak;
        if(target.id == "FS"){
            speak = new SpeechSynthesisUtterance(inputFrom.value);
            speak.lang = select[0].value;
            speechSynthesis.speak(speak);
        }
        else if(target.id == "TS"){
            speak = new SpeechSynthesisUtterance(inputTo.value);
            speak.lang = select[1].value;
            speechSynthesis.speak(speak);
        }
    })
})