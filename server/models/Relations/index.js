let relations = [{
    source: 'Project',
    target: 'Well',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        },
        onDelete: 'CASCADE'
    }
}, {
    source: 'Project',
    target: 'Groups',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        },
        onDelete: 'CASCADE'
    }
}, {
    source: 'Project',
    target: 'StorageDatabase',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        },
        onDelete: 'CASCADE'
    }
}, {
    source: 'Groups',
    target: 'Well',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idGroup",
            allowNull: true
        }
    }
}, {
    source: 'Groups',
    target: 'Groups',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idParent",
            allowNull: true
        },
        onDelete: 'CASCADE'
    }
}, {
    source: 'Well',
    target: 'Dataset',
    type: 'hasMany',
    options: {
        fforeignKey: {
            name: "idWell",
            allowNull: false,
            unique: "name-idWell"
        },
        onDelete: 'CASCADE',
        hooks: true
    }
}, {
    source: 'Project',
    target: 'Plot',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        },
        onDelete: 'CASCADE'
    }
},{
    source: 'Well',
    target: 'ZoneSet',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idWell", 
            allowNull: false, 
            unique: "name-idWell"
        },
			onDelete: 'CASCADE'
    }
},{
    source: 'ZoneSet',
    target: 'Well',
    type: 'belongsTo',
    options: {
        foreignKey: {
            name: "idWell", 
            allowNull: false, 
            unique: "name-idWell"
        },
			onDelete: 'CASCADE'
    }
},{
    source: 'Project',
    target: 'CrossPlot',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        },
        onDelete: 'CASCADE'
    }
},{
    source: 'Project',
    target: 'Histogram',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        },
        onDelete: 'CASCADE'
    }
},{
    source: 'Project',
    target: 'CombinedBox',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        },
        onDelete: 'CASCADE'
    }
},{
    source: 'CombinedBox',
    target: 'Project',
    type: 'belongsTo',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: false,
            unique: "name-idProject"
        },
        onDelete: 'CASCADE'
    }
},{
    source: 'Well',
    target: 'WellHeader',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idWell", 
            allowNull: false
        },
        onDelete: 'CASCADE'
    }
},{
    source: 'Dataset',
    target: 'Curve',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idDataset",
            allowNull: false,
            unique: "name-idDataset"
        }, 
        onDelete: 'CASCADE', 
        hooks: true
    }
},{
    source: 'Dataset',
    target: 'DatasetParams',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idDataset",
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'Plot',
    target: 'Track',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idPlot", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'Plot',
    target: 'DepthAxis',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idPlot", 
            allowNull: false
        },
			onDelete: 'CASCADE'
    }
},{
    source: 'Plot',
    target: 'ImageTrack',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idPlot", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'ImageTrack',
    target: 'PloImageOfTrackt',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idImageTrack", 
            allowNull: false
        },
			onDelete: 'CASCADE'
    }
},{
    source: 'Plot',
    target: 'ObjectTrack',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idPlot", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'ObjectTrack',
    target: 'ObjectOfTrack',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idObjectTrack", 
            allowNull: false
        },
			onDelete: 'CASCADE'
    }
},{
    source: 'Plot',
    target: 'ZoneTrack',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idPlot", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'ZoneTrack',
    target: 'ZoneSet',
    type: 'belongsTo',
    options: {
        foreignKey: {
            name: "idZoneSet", 
            allowNull: true
        }
    }
},{
    source: 'Project',
    target: 'ZoneSetTemplate',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idProject",
            allowNull: true,
            unique: "name-idProject"
        },
        onDelete: "CASCADE"
    }
},{
    source: 'ZoneSetTemplate',
    target: 'ZoneTemplate',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idZoneSetTemplate", 
            allowNull: false
        },
			onDelete: 'CASCADE'
    }
},{
    source: 'ZoneSet',
    target: 'ZoneSetTemplate',
    type: 'belongsTo',
    options: {
        foreignKey: {
            name: "idZoneSetTemplate", 
            allowNull: false
        },
			onDelete: 'CASCADE'
    }
},{
    source: 'MarkerSet',
    target: 'MarkerSetTemplate',
    type: 'belongsTo',
    options: {
        foreignKey: {
            name: "idMarkerSetTemplate", 
            allowNull: false
        },
			onDelete: 'CASCADE'
    }
},{
    source: 'Zone',
    target: 'ZoneTemplate',
    type: 'belongsTo',
    options: {
        foreignKey: {
            name: "idZoneTemplate", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'ZoneSet',
    target: 'Zone',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idZoneSet", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'Plot',
    target: 'Curve',
    type: 'belongsTo',
    options: {
        foreignKey: 'referenceCurve'
    }
},{
    source: 'Track',
    target: 'Line',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idTrack", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'Track',
    target: 'Shading',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: "idTrack", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'Track',
    target: 'Annotation',
    type: 'hasMany',
    options: {
        foreignKey: {
            name: 'idTrack', 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'Line',
    target: 'Curve',
    type: 'belongsTo',
    options: {
        foreignKey: {
            name: "idCurve", 
            allowNull: false
        }, 
        onDelete: 'CASCADE'
    }
},{
    source: 'FamilyCondition',
    target: 'Family',
    type: 'belongsTo',
    options: {
        foreignKey: 'idFamily'
    }
},{
    source: 'Family',
    target: 'FamilySpec',
    type: 'hasMany',
    options: {
        as: 'family_spec', 
        foreignKey: 'idFamily'
    }
},{
    source: 'FamilySpec',
    target: 'UnitGroup',
    type: 'belongsTo',
    options: {
        foreignKey: 'idUnitGroup'
    }
},{
    source: 'UnitGroup',
    target: 'FamilyUnit',
    type: 'hasMany',
    options: {
        foreignKey: 'idUnitGroup'
    }
},{
    source: 'Curve',
    target: 'Family',
    type: 'belongsTo',
    options: {
        as: 'LineProperty', 
        foreignKey: 'idFamily'
    }
},{
    source: 'Shading',
    target: 'Line',
    type: 'belongsTo',
    options: {
        foreignKey: 'idLeftLine', 
        as: 'leftLine', 
        onDelete: 'CASCADE'
    }
},{
    source: 'Shading',
    target: 'Line',
    type: 'belongsTo',
    options: {
        foreignKey: 'idRightLine', 
        as: 'rightLine', 
        onDelete: 'CASCADE'
    }
},{
    source: 'Shading',
    target: 'Curve',
    type: 'hasMany',
    options: {
        foreignKey: 'idControlCurve'
    }
}]

function createRelation(db, relation) {
    db[relation.source][relation.type](db[relation.target], relation.options);
}

function associate(db) {
    for (let relation of relations) {
        createRelation(db, relation);
    }
}