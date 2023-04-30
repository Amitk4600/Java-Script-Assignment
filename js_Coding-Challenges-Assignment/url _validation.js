

// const regExp = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const regExp = /^https?:\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;

function isValidUrl (url) {
    if (regExp.test(url)) {
            console.log(`${url} is valid`);
    }
    else{
        console.log(`${url} is not valid`);
    }
}

isValidUrl("https://www.example.com/path/to/page.html")