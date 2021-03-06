(function($) {

    $(function() {
        $( document ).on( 'change', '.toggle-checkbox', function( e ){
            var clicked     = $( this ),
                parent      = clicked.closest( '.facetwp_map-section-content' ),                
                toggleAll   = parent.find( '[data-toggle-all="true"]' ),
                allcount    = parent.find( '.facetwp_map-control .switch > input' ).not( toggleAll ).length,
                tottlecount = parent.find( '.facetwp_map-control .switch > input:checked' ).not( toggleAll ).length;

            if( clicked.is(':checked') ){
                clicked.parent().addClass( 'active' );
                if( allcount === tottlecount ){
                   toggleAll.prop( 'checked', true ).parent().addClass( 'active' );
                }

            }else{
                clicked.parent().removeClass( 'active' );
                if( toggleAll.length ){
                    toggleAll.prop( 'checked', false ).parent().removeClass( 'active' );
                }
            }

        } );
        $( document ).on( 'facetwp_map.init', function() {
            $('.toggle-checkbox').each( function(){
                var box = $( this ),
                    val = box.data('value');

                if( val === 1 ){
                    box.prop( 'checked', true ).data('value', null).parent().addClass('active');
                }
            });
        });
        $( document ).on('change', '[data-toggle-all="true"]', function(e){
            var clicked = $( this ),
                parent = clicked.closest( '.facetwp_map-section-content' );
                parent.find('.facetwp_map-control .switch > input').not(this).prop('checked', this.checked).trigger('change');
        });
    });

})( jQuery );