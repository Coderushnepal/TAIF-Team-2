
// question nb :1
var team = {
    one : {
        name : "anu",
        role : "data analyst"

    },
    two : {
        name : "simron",
        role : "Developer"

    },
    three : {
        name : "srijana",
        role : "Developer"

    },
    four : {
        name : "khusbu",
        role : "Developer"

    },
}
// question nb :2
console.log(team.one);
console.log(team.two);
console.log(team.three);
console.log(team.four);

// question nb:3

if(team.one.role == "data analyst"){
    console.log(team.one.name);
}
else if(team.two.role == "data analyst"){
    console.log(team.two.name);
}
else if(team.three.role == "data analyst"){
    console.log(team.three.name);
}

else console.log(team.four.name);


// question nb :4
team.four.role = "CTO";
var newTeam = {
    five : {
        name : "Binita",
        role : "Designer"
    }
}

Object.assign(team, newTeam);
console.log(team);