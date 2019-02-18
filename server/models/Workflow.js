/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('workflow', {
		idWorkflow: {
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
			allowNull: false,
			references: {
				model: 'project',
				key: 'idProject'
			},
			unique: true
		},
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'plot',
				key: 'idPlot'
			}
		},
		idWorkflowSpec: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'workflow_spec',
				key: 'idWorkflowSpec'
			}
		}
	}, {
		tableName: 'workflow'
	});
};
