/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('track', {
		idTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		orderNum: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: 'zz'
		},
		showTitle: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'Track 1'
		},
		topJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center'
		},
		bottomJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center'
		},
		showLabels: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		showValueGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		majorTicks: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		minorTicks: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '5'
		},
		showDepthGrid: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '2'
		},
		widthUnit: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: 'inch'
		},
		color: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'white'
		},
		showEndLabels: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		labelFormat: {
			type: DataTypes.STRING(150),
			allowNull: true
		},
		zoomFactor: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '1'
		},
		zoneAboveCurve: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		zoneOpacity: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '0.6'
		},
		trackOffset: {
			type: DataTypes.FLOAT,
			allowNull: false,
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
		idPlot: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'plot',
				key: 'idPlot'
			}
		},
		idZoneSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'zone_set',
				key: 'idZoneSet'
			}
		},
		idMarkerSet: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'marker_set',
				key: 'idMarkerSet'
			}
		}
	}, {
		tableName: 'track'
	});
};
