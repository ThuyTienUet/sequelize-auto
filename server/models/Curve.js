/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('curve', {
		idCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		unit: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		description: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
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
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
		},
		idDataset: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'dataset',
				key: 'idDataset'
			},
			unique: true
		},
		idFamily: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'family',
				key: 'idFamily'
			}
		}
	}, {
		tableName: 'curve'
	});
};
