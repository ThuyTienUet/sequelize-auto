/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zone_template', {
		idZoneTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		background: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		foreground: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: 'white'
		},
		pattern: {
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: 'none'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '0'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idZoneSetTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'zone_set_template',
				key: 'idZoneSetTemplate'
			},
			unique: true
		}
	}, {
		tableName: 'zone_template'
	});
};
