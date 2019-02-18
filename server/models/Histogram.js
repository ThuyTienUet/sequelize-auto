/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('histogram', {
		idHistogram: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'BlankHistogram'
		},
		histogramTitle: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		hardCopyWidth: {
			type: "DOUBLE",
			allowNull: true
		},
		hardCopyHeight: {
			type: "DOUBLE",
			allowNull: true
		},
		activeZone: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: 'All'
		},
		divisions: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '50'
		},
		loga: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		showGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		flipHorizontal: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		plotType: {
			type: DataTypes.ENUM('Frequency','Percent'),
			allowNull: false,
			defaultValue: 'Frequency'
		},
		leftScale: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		rightScale: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0'
		},
		duplicated: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		colorBy: {
			type: DataTypes.STRING(15),
			allowNull: false,
			defaultValue: 'zone'
		},
		showZones: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		},
		configs: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		discriminator: {
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
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			}
		}
	}, {
		tableName: 'histogram'
	});
};
