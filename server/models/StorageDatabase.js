/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('storage_database', {
		idStorageDatabase: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		input_directory: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		company: {
			type: DataTypes.STRING(250),
			allowNull: true,
			defaultValue: 'I2G'
		},
		type: {
			type: DataTypes.STRING(250),
			allowNull: true,
			defaultValue: 'INPUT'
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
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'project',
				key: 'idProject'
			}
		}
	}, {
		tableName: 'storage_database'
	});
};
