/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('task', {
		idTask: {
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
		idFlow: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'flow',
				key: 'idFlow'
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
		tableName: 'task'
	});
};
