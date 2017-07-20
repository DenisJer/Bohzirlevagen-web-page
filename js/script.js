$(document).ready(function(){
	$('.js--section-one').waypoint(function(direction){

		if (direction == "down") {
			$('nav').addClass('sticky');
            $('.fa').addClass('burger-icon');
		} else {
			$('nav').removeClass('sticky');	
            $('.fa').removeClass('burger-icon');
		}
	},{
        offset: '120px;'
    });
    
    
    /* burger navigation */
   $('.menu').hide();
    $('.burger').click(function(){
        $('.menu').slideToggle(0);
    });
    
    /* maps */
    var munchenMap = new GMaps({
      div: '#munchen-map',
      lat: 48.1427649,
      lng: 11.5438087,
    });
    var berlinMap = new GMaps({
      div: '#berlin-map',
      lat: 52.5163,
      lng: 13.3290113,
    });
    
    munchenMap.addMarker({
  lat: 48.1427649,
  lng: 11.5438087,
  title: 'BohnZirlewagen GmbH & Co. KG',
 /* click: function(e) {
    
  } */
});
    berlinMap.addMarker({
  lat: 52.5163,
  lng: 13.3290113,
  title: 'BohnZirlewagen GmbH',
 /* click: function(e) {
    
  } */
});
});