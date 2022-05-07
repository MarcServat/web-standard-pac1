function initMap() {
  const company = {lat: 40.44685313318364, lng: -3.707131273233015};
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: company,
  });

  const marker = new google.maps.Marker({
    position: company,
    map: map,
  });
}

window.initMap = initMap;