/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dataset', {
		idDataset: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		datasetKey: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		datasetLabel: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		step: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0'
		},
		top: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0'
		},
		bottom: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: '0'
		},
		unit: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'M'
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
		tableName: 'dataset'
	});
};
