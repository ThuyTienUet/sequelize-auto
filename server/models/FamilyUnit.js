/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('family_unit', {
		idUnit: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(15),
			allowNull: false
		},
		rate: {
			type: DataTypes.STRING(100),
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
		idUnitGroup: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'unit_group',
				key: 'idUnitGroup'
			}
		}
	}, {
		tableName: 'family_unit'
	});
};
