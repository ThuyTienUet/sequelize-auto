var SequelizeAuto = require('sequelize-auto')

var appMain = require("./app-entry.js");
var auto = new SequelizeAuto('wi_0000tien', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
	directory: './server/models', // prevents the program from writing to disk
	port: '3306',
	camel: true
	// additional: {
	//     timestamps: false
	//     //...
	// },
	// tables: ['pets']
	//...
})
auto.run(function (err) {
	if (err) throw err;
    /**
 * Created by minhtan on 20/06/2017.
 */

	appMain();
});
