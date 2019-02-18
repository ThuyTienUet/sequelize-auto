/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('zone', {
		idZone: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		startDepth: {
			type: "DOUBLE",
			allowNull: false
		},
		endDepth: {
			type: "DOUBLE",
			allowNull: false
		},
		showName: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		showOnTrack: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		orderNum: {
			type: DataTypes.STRING(255),
			allowNull: true,
			defaultValue: '0'
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
		idZoneTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'zone_template',
				key: 'idZoneTemplate'
			}
		},
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			}
		}
	}, {
		tableName: 'zone'
	});
};
