var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Graves_1 = new ol.format.GeoJSON();
var features_Graves_1 = format_Graves_1.readFeatures(json_Graves_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Graves_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Graves_1.addFeatures(features_Graves_1);
var lyr_Graves_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Graves_1, 
                style: style_Graves_1,
                popuplayertitle: "Graves",
                interactive: true,
                title: '<img src="styles/legend/Graves_1.png" /> Graves'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Graves_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Graves_1];
lyr_Graves_1.set('fieldAliases', {'id': 'id', 'id_2': 'id_2', 'Grave': 'Grave', 'Last Name': 'Last Name', 'First Name': 'First Name', 'Rank': 'Rank', 'Date of Bi': 'Date of Birth', 'Date of De': 'Date of Death', });
lyr_Graves_1.set('fieldImages', {'id': 'TextEdit', 'id_2': 'TextEdit', 'Grave': 'TextEdit', 'Last Name': 'TextEdit', 'First Name': 'TextEdit', 'Rank': 'TextEdit', 'Date of Bi': 'TextEdit', 'Date of De': 'TextEdit', });
lyr_Graves_1.set('fieldLabels', {'id': 'inline label - always visible', 'id_2': 'hidden field', 'Grave': 'inline label - always visible', 'Last Name': 'inline label - always visible', 'First Name': 'inline label - always visible', 'Rank': 'inline label - always visible', 'Date of Bi': 'inline label - always visible', 'Date of De': 'inline label - always visible', });
lyr_Graves_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});