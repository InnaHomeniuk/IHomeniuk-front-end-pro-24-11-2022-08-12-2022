const greeting = function (user) {
    user.name = user.name.toUpperCase();
    console.log(user.name);
    user.cities = user.cities.split(',');
    console.log(user.cities);
    if (typeof user.money === 'string') {
        console.log(typeof user.money);
        user.money = Number(user.money)
    };
    if (isNaN(user.money)) {
        console.log(`Money is NaN ${isNaN(user.money)}`)
    }
    user.money = Math.round(user.money);
    console.log(user.money);
    user.children.push = ({ name: 'Stepan', age: Math.floor(Math.random(user.children.age) * 18) });
    console.log(user.children);
};
const users = [
    {
        name: 'Alina',
        money: 2700.32,
        cities: 'Lviv, Kyiv, Ternopil',
        children: [
            {
                name: 'Oliver',
                age: 6,
            }
        ]
    },
    {
        name: 'Andrii',
        money: 9301.32,
        cities: 'Paris, Madrid, Rivne',
        children: []
    },
    {
        name: 'George',
        money: '35000',
        cities: 'Stambul',
        children: [
            {
                name: 'Olha',
                age: 8,
            },
            {
                name: 'Olena',
                age: 2,
            }
        ]
    }
];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    greeting(user);
}


