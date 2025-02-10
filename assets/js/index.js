const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://jw3dydwqqchmt4xy34q5bcgb5e0dvyps.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();