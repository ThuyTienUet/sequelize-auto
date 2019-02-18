/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image', {
		idImage: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		location: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		top: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		bottom: {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '50'
		},
		left: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '50'
		},
		createdBy: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		updatedBy: {
			type: DataTypes.STRING(50),
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
		tableName: 'image'
	});
};
