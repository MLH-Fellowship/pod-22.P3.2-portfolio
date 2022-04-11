let platform = new H.service.Platform({
  apikey: "Ie58QDbD3CjcQT8Xnwlgap30qMYPWqhbMs99Dbi7nz8",
});
let maptypes = platform.createDefaultLayers();
let map = new H.Map(
  document.getElementById("mapContainer"),
  maptypes.vector.normal.map,
  {
    zoom: 2.8,
    center: { lat: 15, lng: 70 },
  }
);
let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
let ui = H.ui.UI.createDefault(map, maptypes);
behavior.disable(H.mapevents.Behavior.WHEELZOOM);

function addMarkerToGroup(group, coords, html, domElement) {
  let icon = new H.map.DomIcon(domElement);
  let marker = new H.map.DomMarker(coords, { icon: icon });

  marker.setData(html);
  group.addObject(marker);
}

function addInfoBubble(map) {
  let group = new H.map.Group();
  map.addObject(group);
  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener(
    "tap",
    function (evt) {
      // event target is the marker itself, group is a parent event target
      // for all objects that it contains
      let bubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
        // read custom data
        content: evt.target.getData(),
      });

      // close opened info bubbles
      ui.getBubbles().forEach((bub) => ui.removeBubble(bub));

      // show info bubble
      ui.addBubble(bubble);
    },
    false
  );

  fellows.forEach((fellow) => {
    let domElement = document.createElement("div");
    domElement.setAttribute("id", "el");
    domElement.style.cssText = `background-image: url("./assets/img/${fellow.img}")`;
    
    addMarkerToGroup(
      group,
      { lat: fellow.latitude, lng: fellow.longitude },
      `<div class="map-card">
        <div class="profile-img profile-img-map">
          <img class="description-img description-img-map" src="./assets/img/${fellow.img}">
        </div>
        <div class="info info-map">
          <p class="title card-text">
            <a href="/fellows-data/${fellow["file-name"]}">${fellow.name}</a>
          </p>
          <p class="location card-text">${fellow.location}</p>
        </div>
      </div>
      `,
      domElement
    );
  });
}

addInfoBubble(map);
window.addEventListener("resize", () => map.getViewPort().resize());
