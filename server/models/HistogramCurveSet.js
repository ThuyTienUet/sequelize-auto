/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('histogram_curve_set', {
		idHistogramCurveSet: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		intervalDepthTop: {
			type: "DOUBLE",
			allowNull: true
		},
		intervalDepthBottom: {
			type: "DOUBLE",
			allowNull: true
		},
		showGaussian: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
		},
		showCumulative: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		lineStyle: {
			type: DataTypes.STRING(30),
			allowNull: true,
			defaultValue: 'Custom'
		},
		lineColor: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'Blue'
		},
		plot: {
			type: DataTypes.ENUM('Bar','Curve'),
			allowNull: true,
			defaultValue: 'Bar'
		},
		color: {
			type: DataTypes.STRING(20),
			allowNull: false,
			defaultValue: 'Blue'
		},
		createdAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		updatedAt: {
			type: DataTypes.DATE,
			allowNull: false
		},
		idHistogram: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'histogram',
				key: 'idHistogram'
			}
		},
		idCurve: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'curve',
				key: 'idCurve'
			}
		}
	}, {
		tableName: 'histogram_curve_set'
	});
};
