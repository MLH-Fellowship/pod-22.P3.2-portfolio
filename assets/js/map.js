var platform = new H.service.Platform({
    apikey: "Ie58QDbD3CjcQT8Xnwlgap30qMYPWqhbMs99Dbi7nz8",
  }),
  defaultLayers = platform.createDefaultLayers(),
  maptypes = platform.createDefaultLayers(),
  map = new H.Map(
    document.getElementById("mapContainer"),
    maptypes.vector.normal.map,
    {
      zoom: 1,
      center: { lng: 13.4, lat: 52.51 },
    }
  ),
  behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map)),
  ui = H.ui.UI.createDefault(map, defaultLayers);

function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
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
    { lat: 53.439, lng: -2.221 },
    '<div><a href="https://www.mcfc.co.uk">Manchester City</a></div>' +
      "<div>City of Manchester Stadium<br />Capacity: 55,097</div>"
  );
  addMarkerToGroup(
    group,
    { lat: 53.43, lng: -2.961 },
    '<div><a href="https://www.liverpoolfc.tv">Liverpool</a></div>' +
      "<div>Anfield<br />Capacity: 54,074</div>"
  );
}

addInfoBubble(map);
window.addEventListener("resize", () => map.getViewPort().resize());
