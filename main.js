$( document ).ready(function() {
    if (window.matchMedia( "(max-width: 550px)" ).matches){
        $("#navbar").scrollspy({
            offset: -117, // Offset for fixed header
            animate: true
        });
    } else {
        $("#navbar").scrollspy({
            offset: -64, // Offset for fixed header
            animate: true
        });
    }
});