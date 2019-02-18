/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('plot', {
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		option: {
			type: DataTypes.STRING(250),
			allowNull: true
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		currentState: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '{}'
		},
		cropDisplay: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		printSetting: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		unit: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'm'
		},
		depthRefSpec: {
			type: DataTypes.STRING(50),
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
		deletedAt: {
			type: DataTypes.DATE,
			allowNull: true
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
		referenceCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			}
		}
	}, {
		tableName: 'plot'
	});
};
