/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dataset_params', {
		idDatasetParam: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		mnem: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		value: {
			type: DataTypes.STRING(255),
			allowNull: false,
			defaultValue: ''
		},
		unit: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		description: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: ''
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idDataset: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'dataset',
				key: 'idDataset'
			}
		}
	}, {
		tableName: 'dataset_params'
	});
};
