/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('parameter_set', {
		idParameterSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: 'TASK'
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
			},
			unique: true
		},
		idTaskSpec: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'task_spec',
				key: 'idTaskSpec'
			}
		}
	}, {
		tableName: 'parameter_set'
	});
};
