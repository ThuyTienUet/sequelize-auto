/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('project', {
		idProject: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			unique: true
		},
		alias: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		location: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		company: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		department: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		description: {
			type: DataTypes.STRING(250),
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
		}
	}, {
		tableName: 'project'
	});
};
