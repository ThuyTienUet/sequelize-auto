/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('custom_fill', {
		idCustomFill: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'custom_fill'
	});
};
