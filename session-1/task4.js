// take an array of string and store 10 names inside it. Use map, filter and forEach to get an array of names whose length is less than 6.

const names = [
    "John",
    "Paul",
    "George",
    "Ringo",
    "Pete",
    "Stuart",
    "Mick",
    "Keith",
    "Ronnie",
    "Charlie",
];

const shortNames = names.filter((name) => name.length < 6);

console.log("Using Filter => ", shortNames);

const shortNamesMap = names.map((name) => {
    if (name.length < 6) {
        return name;
    } else {
        return null;
    }
});

console.log("Using Map => ", shortNamesMap);

names.forEach((name) => {
    if (name.length >= 6) {
        const index = names.indexOf(name);
        names.splice(index, 1);
    }
});

console.log("Using forEach => ", names);
