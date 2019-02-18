/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('marker', {
		idMarker: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		depth: {
			type: "DOUBLE",
			allowNull: false
		},
		showOnTrack: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
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
		idMarkerTemplate: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'marker_template',
				key: 'idMarkerTemplate'
			}
		},
		idMarkerSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'marker_set',
				key: 'idMarkerSet'
			}
		}
	}, {
		tableName: 'marker'
	});
};
