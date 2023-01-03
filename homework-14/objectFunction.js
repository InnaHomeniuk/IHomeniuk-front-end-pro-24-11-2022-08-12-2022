const greeting = function (user) {
    const userName = user.name.toUpperCase();
    console.log(userName);
    const cityName = user.cities.split(',');
    console.log(cityName);
    moneyName = Math.round(user.money);
    console.log(moneyName);
    if (moneyName === 'string') {
        moneyName = Number(moneyName)
    };
    if (isNaN(moneyName)) {
        console.log(`Money is NaN ${isNaN(moneyName)}`)
    }
    if (user.children.length === 0) {
        user.children.push = ({ name: 'Stepan', age: Math.floor(Math.random(user.children.age) * 18) });
    }
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


