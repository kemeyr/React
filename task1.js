let students = ['John', 'Mark', 'Stephanie', 'Martha', 'Vlad'];
let numbers = [2, 5, 8, 10];
let data = [
        {
            teacherName: "Jan Nowak",
            teacherAge: 36,
            active: true,
            students: [
                {
                    name: "Maciej Janosz",
                    age: 12
                },
                {
                    name: "Wojciech Kowalski",
                    age: 15
                },
                {
                    name: "Wioletta PoznaÄšÂska",
                    age: 1000000
                }
            ]
        },
        {
            teacherName: "Mariusz Flasinski",
            teacherAge: 56,
            active: true,
            students: [
                {
                    name: "Jan Kot",
                    age: 12
                },
                {
                    name: "Jan Ziobro",
                    age: 15
                },
                {
                    name: "Adam Malysz",
                    age: 41
                }
            ]
        },
        {
            teacherName: "Wojciech Kuzak",
            teacherAge: 44,
            active: false,
            students: [
                {
                    name: "Janina Wronska",
                    age: 22
                },
                {
                    name: "John Dover",
                    age: 7
                },
                {
                    name: "Emil Petterson",
                    age: 46
                }
            ]
        }
    ];

const studM = students.filter((stud) => stud.startsWith("M"));
console.log(studM)

const mapSqrt = numbers.map((num) => Math.sqrt(num));
console.log(mapSqrt)

const ReduceVal = numbers.reduce((accumulator, elem) => accumulator + elem);
console.log(ReduceVal)