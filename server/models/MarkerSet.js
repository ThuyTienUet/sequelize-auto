/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marker_set', {
		idMarkerSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
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
		},
		idMarkerSetTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'marker_set_template',
				key: 'idMarkerSetTemplate'
			}
		},
		idWell: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'well',
				key: 'idWell'
			},
			unique: true
		}
	}, {
		tableName: 'marker_set'
	});
};
