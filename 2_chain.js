const users = [
    { id: 1, name: 'abul', job: 'doctor' }
];
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'leader', },
        { id: 2, name: 'dabul', job: 'leader' },
    ]
};
const firstJob = data.data[0].job;
// console.log(firstJob);
const user = {
    id: 5001,
    name: 'Thomas Alba Edison',
    Address: {
        street: {
            first: '36/A kochukhet lame',
            second: 'third Floor',
            third: 'right side'
        },
        postOffice: 'cantomment',
        city: 'Dhaka'
    }
};
const userFloor = user.Address?.stret?.second;
console.log(userFloor);