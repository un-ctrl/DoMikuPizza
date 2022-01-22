const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'user name', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const CurrencyShop = require('./models/CurrencyShop.js')(sequelize, Sequelize.DataTypes);
require('./models/Users.js')(sequelize, Sequelize.DataTypes);
require('./models/UserItems.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');
const prefix = '-';

sequelize.sync({ force }).then(async () => {
	const shop = [
		CurrencyShop.upsert({ name: 'Pizza1', cost: 1 }),
		CurrencyShop.upsert({ name: 'Pizza2', cost: 2 }),
		CurrencyShop.upsert({ name: 'Pizza3', cost: 5 }),
	];
	await Promise.all(shop);
	console.log('Database synced');
	sequelize.close();
}).catch(console.error);
