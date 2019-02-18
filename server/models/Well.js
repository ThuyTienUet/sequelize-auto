/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('well', {
		idWell: {
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
			type: DataTypes.STRING(30),
			allowNull: false,
			defaultValue: 'm'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		color: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: '#f3b86d'
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
		idGroup: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'groups',
				key: 'idGroup'
			}
		}
	}, {
		tableName: 'well'
	});
};
