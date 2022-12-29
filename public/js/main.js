const date = document.getElementsByClassName("date")[0];
const month = document.getElementsByClassName("month")[0];
const year = document.getElementsByClassName("year")[0];
const search = document.getElementById("search");
const Cname = document.getElementsByClassName("Cname")[0];
const country = document.getElementsByClassName("country")[0];
const temp = document.getElementsByClassName("temp")[0];
const weather = document.getElementsByClassName("weather")[0];
const searchInput = document.getElementById("searchInput");
const error = document.getElementsByClassName("error")[0];

const monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getMonth = new Date().getMonth();      

date.innerHTML = "The information will come here once you give proper city name";

const getInfo = async () => { 
    
    if(searchInput.value == ""){
        error.innerHTML = "** Please enter a city name";        
    } else {
        try {    
            month.innerHTML = " " + monthArr[getMonth];
            date.innerHTML = new Date().getDate() + "<sup>th</sup>";
            year.innerHTML = " " + new Date().getFullYear();
            error.innerHTML = "";

            let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric&appid=b965b7bad7c3cbf151d8b842fb87a945`;
            const response = await fetch(api);
            const data = await response.json();
            const arrData = [data];

            temp.innerHTML = arrData[0].main.temp + "<span>&deg;C </span>";
            const des = arrData[0].weather[0].main;
            Cname.innerHTML = arrData[0].name + ", ";
            country.innerHTML = arrData[0].sys.country;

            if(des == "Clear"){
                weather.innerHTML = "<i class=\"bi bi-brightness-low-fill text-yellow-300\"></i>"
            }

            else if(des == "Cloud"){
                weather.innerHTML = "<i class=\"bi bi-clouds-fill\"></i>"
            }

            else if(des == "Rain"){
                weather.innerHTML = "<i class=\"bi bi-cloud-rain-fill text-blue-300\"></i>"
            }

            else if(des == "Snow"){
                weather.innerHTML = "<i class=\"bi bi-snow2\"></i>"
            }                             
        }
        
        catch {
            error.innerHTML = "** Please provide the correct city name";            
        }
    }
}

search.addEventListener("click", getInfo);