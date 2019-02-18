/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marker_template', {
		idMarkerTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false,
			unique: true
		},
		color: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		lineStyle: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		lineWidth: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '1'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: '0'
		},
		description: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idMarkerSetTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'marker_set_template',
				key: 'idMarkerSetTemplate'
			},
			unique: true
		}
	}, {
		tableName: 'marker_template'
	});
};
