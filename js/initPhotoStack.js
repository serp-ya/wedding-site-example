// [].slice.call( document.querySelectorAll( '.photostack' ) ).forEach( function( el ) { new Photostack( el ); } );
// setTimeout(function(){
// }, 500);


new Photostack( document.getElementById( 'photostack-3' ), {
    callback : function( item ) {
        //console.log(item)
    }
} );