

//----jquery-plagins----
include('js/jquery-1.7.1.js');
include('js/jquery.easing.js');
include('js/jquery.animate-colors-min.js');
include('js/jquery.transform-0.9.3.min.js');
include('js/jquery.fancybox-1.3.4.pack.js');
//----Menu+ContentSwitcher----
include('js/superfish.js');
include('js/switcher.js');
//----over buttons----
include('js/over-buttons.js');
//----google map----
include('js/googleMap.js');
//----gallery----
include('js/gallery.js');
//----All-Scripts----
include('js/main.js');
//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript" ></script>'); 
  return false;
}