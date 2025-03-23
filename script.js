let days_for_revolution = [88,225,365,687,4331,10759,30687,60190]

let included_planets = []

let form = document.getElementById("form");


let mText = document.getElementById("mtext")
let dText = document.getElementById("dtext")

let formDiv = document.getElementById("formDiv");
let resultDiv = document.getElementById("resultDiv");


resultDiv.style.display = 'none';

function submitForm(e) {
    e.preventDefault();


    let date = document.getElementById("date").value
    dateObj = new Date(date);



    let checkBox_mercury = document.getElementById("mercury")
    let checkBox_venus = document.getElementById("venus")
    let checkBox_earth = document.getElementById("earth")
    let checkBox_mars = document.getElementById("mars")
    let checkBox_jupiter = document.getElementById("jupiter")
    let checkBox_saturn = document.getElementById("saturn")
    let checkBox_uranus = document.getElementById("uranus")
    let checkBox_neptune = document.getElementById("neptune")


    if (checkBox_mercury.checked){
        included_planets.push(1)
    } else{
        included_planets = included_planets.filter(item => item !== 1);
    }
    if (checkBox_venus.checked){
        included_planets.push(2)
    }else{
        included_planets = included_planets.filter(item => item !== 2);
    }
    if (checkBox_earth.checked){
        included_planets.push(3)
    }else{
        included_planets = included_planets.filter(item => item !== 3);
    }
    if (checkBox_mars.checked){
        included_planets.push(4)
    }else{
        included_planets = included_planets.filter(item => item !== 4);
    }
    if (checkBox_jupiter.checked){
        included_planets.push(5)
    }else{
        included_planets = included_planets.filter(item => item !== 5);
    }
    if (checkBox_saturn.checked){
        included_planets.push(6)
    }else{
        included_planets = included_planets.filter(item => item !== 6);
    }
    if (checkBox_uranus.checked){
        included_planets.push(7)
    }else{
        included_planets = included_planets.filter(item => item !== 7);
    }
    if (checkBox_neptune.checked){
        included_planets.push(8)
    }else{
        included_planets = included_planets.filter(item => item !== 8);
    }

    let newSet = new Set(included_planets);

    let unique_included_planets = [...newSet]


    resultDiv.style.display = "block" 
    formDiv.style.display = "none"



console.log("HUHUHUHU")

    // Logic Starts from here
    final_list = [];
    
    unique_included_planets.forEach(e => {
        final_list.push(days_for_revolution[e-1])
    });

    let lcm_days  = math.lcm(...final_list);

    let date_in_ms = dateObj.getTime();

    let lcm_days_in_ms = lcm_days*24*60*60*1000;

    let total_ms = date_in_ms+lcm_days_in_ms

    let newDate = new Date(total_ms);

    
    mText.innerHTML = `The relative alignment of the planets on the date you selected will occur ${lcm_days} days after that date.`

    dText.innerHTML = "That date -----> "+newDate
    



} 

form.addEventListener('submit', submitForm);




function refreshPage() {
    location.reload()
}