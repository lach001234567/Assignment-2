// Code for the Add Location page.
/*var newLocation = "newLocation"
 *           <ul class="mdl-list" id="locationList">
 *             <li class="mdl-list__item mdl-list__item--two-line" onclick="viewLocation(1);">
 *               <span class="mdl-list__item-primary-content">
 *                 <img class="mdl-list__item-icon" id="icon1" src="images/loading.png" class="list-avatar" />
 *                 <span> newLocation </span>
 *                 <span id="weather1" class="mdl-list__item-sub-title">Weather summary</span>
 * </span>
 *             </li>
*        </ul>
*/

//GEOCODING GOES HERE!
    /* Refering to Element ID "address for adress input".
    * This was accessed from google API development pages which can be seen at https://developers.google.com/maps/documentation/javascript/geocoding#Geocoding
    * The main variables are googleGEOCODER and newMAP and these are accessed though the code below.
    */

var googleGEOCODER;
var newMAP;

function initialise(){
    googleGEOCODER = new google.maps.Geocoder();
    var coordinates = new google.maps.LatLng(-34.397, 150.644); //WANT TO PUT CURRENT LOCATION HERE!!!
    var newMAPOPTIONS= {
      zoom: 8,
      center: coordinates
    }
    newMAP = new google.maps.Map(document.getElementById("theMAP"), newMAPOPTIONS);
  };


function getAddress() {
    var newLocation = document.getElementById("address").value;
       googleGEOCODER.geocode( { address: newLocation}, function(results, status) {
    if(status == google.maps.GeocoderStatus.OK) {           
        newMAP.setCenter(results[0].geometry.location);
        var locationMarker = new google.maps.Marker({
            map: newMAP,
            position: results[0].geometry.location
        });
        }
    else    {
        console.log("Invalid Geocode due to " + status)
    }})};

//NOOOOT WOOOORKINNNNNGGG!!! YET LOOOOOOL
