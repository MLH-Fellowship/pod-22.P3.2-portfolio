var platform = new H.service.Platform({
  apikey: "Ie58QDbD3CjcQT8Xnwlgap30qMYPWqhbMs99Dbi7nz8",
});
var maptypes = platform.createDefaultLayers();
var map = new H.Map(
  document.getElementById("mapContainer"),
  maptypes.vector.normal.map,
  {
    zoom: 0,
    center: { lat: 12.8628, lng: 30.2176 },
  }
);
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var ui = H.ui.UI.createDefault(map, {});
ui.removeControl("mapsettings");
ui.removeControl("zoom");

function addMarkerToGroup(group, coords, html) {
  var domElement = document.createElement("div");
  domElement.setAttribute("id", "el");
  var icon = new H.map.DomIcon(domElement);
  var marker = new H.map.DomMarker(coords, { icon: icon });
  // var marker = new H.map.Marker({ ...coords });

  marker.setData(html);
  group.addObject(marker);
}

function addInfoBubble(map) {
  var group = new H.map.Group();
  map.addObject(group);
  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener(
    "tap",
    function (evt) {
      // event target is the marker itself, group is a parent event target
      // for all objects that it contains
      var bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
        // read custom data
        content: evt.target.getData(),
      });
      // show info bubble
      ui.addBubble(bubble);
    },
    false
  );

  addMarkerToGroup(
    group,
    { lat: 26.8467, lng: 80.9462 },
    '<div><a href="https://www.mcfc.co.uk">Manchester City</a></div>' +
      "<div>City of Manchester Stadium<br />Capacity: 55,097</div>"
  );
}

addInfoBubble(map);
window.addEventListener("resize", () => map.getViewPort().resize());
