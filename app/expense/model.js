const { getDb } = require('../database');
class Expense {
	constructor(date, amount) {
		this.date = date;
		this.amount = amount;
	}
	// save method
	async save() {
		const db = getDb();
		try {
			const res = await db.collection('expense').insertOne(this);
			return res;
		} catch (err) {
			throw err;
		}
	}
	// fetch all data method
	static async fetchAll() {
		const db = getDb();
		try {
			const res = await db
				.collection('expense')
				.find()
				.toArray(); // toArray() converts ref to array
			return res;
		} catch (err) {
			throw err;
		}
	}
}

module.exports = Expense;
