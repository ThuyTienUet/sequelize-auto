/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('flow', {
		idFlow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		isTemplate: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: true
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
			allowNull: true,
			references: {
				model: 'project',
				key: 'idProject'
			},
			unique: true
		}
	}, {
		tableName: 'flow'
	});
};
