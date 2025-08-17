function tution(startDay,month,date){
let weaks = [
    [], // Saturday
    [], // Sunday
    [], // Monday
    [], // Tuesday
    [], // Wednesday
    [], // Thursday
    []  // Friday
];

const days = ['saturday', 'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

let startIndex = days.indexOf(startDay.toLowerCase());

if (startIndex === -1) {
    console.log("Invalid day input");
} else {
    for (let i = 1; i <= month; i++) {
        let dayIndex = (i - 1 + startIndex) % 7;
        weaks[dayIndex].push(i);
    }
} 
if(weaks[0].includes(date) || weaks[2].includes(date)||weaks[4].includes(date)){
    return "Azmain + Choity";
}else{
    if(weaks[5].includes(date)){
        return "aArham + sumaya + choity"
    }
    return "Arham + sumaya + Lamya + choity"
}
}


console.log(tution("friday", 31, 31))