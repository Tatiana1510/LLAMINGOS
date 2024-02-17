let mapa = L.map('mapa').setView([-0.162,-78.3],12);
L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 20,
	attribution: '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	ext: 'png'
}).addTo(mapa);

$.getJSON("https://tatiana1510.github.io/LLAMINGOS/GEOJSON.geojson",function(data){
  var clusteredPoints = L.markerClusterGroup();
var marker = L.geoJson(data,{
  onEachFeature: function (feature, layer){
    layer.bindPopup(feature.properties.TITULO_TESIS_O_INVESTIGACION+'<br>\<b>Autor(es): </b>' + feature.properties.AUTOR_O_AUTORES);
  }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
  });
