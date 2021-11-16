

function calculate() {

// links

month = document.form.month.selectedIndex;
month = document.form.month.options[month].value;
day = document.form.day.selectedIndex;
day = document.form.day.options[day].value;
year = document.form.year.value;
gender = document.form.gender.selectedIndex;
gender = document.form.gender.options[gender].value;


// date containers

var dob = month + " " + day + ", " + year;
var whenBorn = new Date(dob);
var thatDay = whenBorn.getDay();
var date =whenBorn.getDate();
var year =whenBorn.getYear();



// invalid date alert

if ( date <=0 || date >31){
    alert('Please enter correct date')
 }

// invalid month alert

if ( month <=0 || month >12){
   alert('Please enter correct month')
 }




if (year<100) year="19" + whenBorn.getYear();
else year=whenBorn.getYear();

// days of the week with indexes

var weekday = new Array(6);

weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";


// akan names arrays

// female

var femaleNames = new Array(6);

femaleNames[0]="Akosua";
femaleNames[1]="Adwoa";
femaleNames[2]="Abenaa";
femaleNames[3]="Akua";
femaleNames[4]="Yaa";
femaleNames[5]="Afua";
femaleNames[6]="Ama";

// male

var maleNames = new Array(6);

maleNames[0]="Kwasi";
maleNames[1]="Kwadwo";
maleNames[2]="Kwabena";
maleNames[3]="Kwaku";
maleNames[4]="Yaw";
maleNames[5]="Kofi";
maleNames[6]="Kwame";

if (gender == "male"){
    generateName = maleNames[thatDay]
}
else { generateName = femaleNames[thatDay]
}

// generateName = femaleNames[thatDay];


if (day != date) alert("Sorry!  That appears to be an invalid date!");
else {
dayborn = generateName;
dayWeek = weekday[thatDay];
dob = dayborn + ", " + "born on a" + " " + dayWeek ;
alert("So Awesome, Your Akan name is " + dob);

   }
}
