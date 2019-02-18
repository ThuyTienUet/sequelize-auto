/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('image_track', {
		idImageTrack: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		showTitle: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		title: {
			type: DataTypes.STRING(100),
			allowNull: false,
			defaultValue: 'Image Track 1'
		},
		topJustification: {
			type: DataTypes.ENUM('Left','Center','Right'),
			allowNull: false,
			defaultValue: 'Center'
		},
		orderNum: {
			type: DataTypes.STRING(200),
			allowNull: false,
			defaultValue: 'zz'
		},
		background: {
			type: DataTypes.STRING(50),
			allowNull: false,
			defaultValue: 'white'
		},
		width: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '1'
		},
		widthUnit: {
			type: DataTypes.STRING(20),
			allowNull: true,
			defaultValue: 'inch'
		},
		zoomFactor: {
			type: "DOUBLE",
			allowNull: false,
			defaultValue: '1'
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
		}
	}, {
		tableName: 'image_track'
	});
};
