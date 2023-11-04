const celsiusEl = document.getElementById("celsius");
const farhenheitEl = document.getElementById("farhenheit");
const kelvinEl = document.getElementById("kelvin")

const inputEl = document.querySelectorAll(".input");

inputEl.forEach(element => {
    element.addEventListener("keyup", (event)=>{
        const currentValue = +event.target.value;

    switch(event.target.name)
    {
        case "celsius":
            kelvinEl.value = (currentValue + 273.32).toFixed(2);
            farhenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        
        case "fahrenheit":
            celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;

        case "kelvin":
            celsiusEl.value = (currentValue - 273.32).toFixed(2);
            farhenheitEl.value = ((currentValue - 273.32) * 1.8  + 32).toFixed(2);
            break;

        default:
            break;
    }
    })
});


function computeTemp(event){
    const currentValue = +event.target.value;

    switch(event.target.name)
    {
        case "celsius":
            kelvinEl.value = (currentValue + 273.32).toFixed(2);
            farhenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        
        case "fahrenheit":
            celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;

        case "kelvin":
            celsiusEl.value = (currentValue - 273.32).toFixed(2);
            farhenheitEl.value = ((currentValue - 273.32) * 1.8  + 32).toFixed(2);
            break;

        default:
            break;
    }
}