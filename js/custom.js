jQuery(function($) {
	$('#search-toggle').on('click',function(e){
		var open = $(this).attr('data-open');
		if(open == 'false'){
			$('#search-input').fadeIn('slow');
			$('#search-input').focus();
			$(this).attr('data-open','true');
		}
		if(open == 'true'){
			$('#search-input').fadeOut('slow');
			$(this).attr('data-open','false');
		}
	});
	$(window).load(function(e){
		if(window.location.hash == '#goto-query-noticias'){
			$('html, body').animate({
				scrollTop: parseInt($('#forma-noticias').offset().top) - 130
			}, 1300);
		}
	});

	$('.close-reveal-modal').click(function() {
		$('#fundo-modal').css('width', '0');
		$('#reveal-modal-id').css('visibility', 'hidden');
		
	});

	$(".content").fitVids();

	/* page-camara.php */
	$('.abas-nav ul li.menu-item-object-page a').on('click',function(e){
		$elem = $(this);
		e.preventDefault();
		var data = {
			'action': 'abas_camara',
			'url': $( this ).attr( 'href' )
		};
		$('#abas-content').html( '' );
		$('#abas-content').addClass('load');
		$( '.abas-nav ul li.active' ).removeClass( 'active' );
		$.post(ajax.ajax_url, data, function(response) {
			$( '#abas-content' ).removeClass( 'load' );
			$( '#abas-content' ).html( response );
			$( '.zilla-tabs' ).tabs({ fx: { opacity: 'show' } });
			$elem.parent( 'li' ).addClass( 'active' );
			if ( $elem.parent( 'li' ).children( '.icon' ).length == 0 ) {
				$elem.parent( 'li' ).append( '<span class="icon"></span>' );
				var height = $elem.height();
				if ( height >= 35 ) {
					height = height - 15;
				}
				var percent = ( 20 / 100 ) * height;
				height = height - percent + 'px'
				$elem.parent( 'li' ).children( '.icon' ).css( 'border-top-width', height );
				$elem.parent( 'li' ).children( '.icon' ).css( 'border-bottom-width', height );
				$elem.parent( 'li' ).children( '.icon' ).css( 'border-left-width', height );
				var percent = ( 40 / 100 ) * $elem.height();
				if ( $elem.height() >= 49 ) {
					var percent = ( 10 / 100 ) * $elem.height();
				}
				$elem.parent( 'li' ).children( '.icon' ).css( 'margin-top', '-' + percent + 'px' );


			}
		});
	});
	/* page-equipe.php */
	if ( $( 'header.equipe-header-title .image' ).length > 0 ) {
		var equipe_header_image_size = function(){
			var height = $( 'header.equipe-header-title .container' ).outerHeight() + 'px';
			$( 'header.equipe-header-title .image' ).css( 'height', height );
		}
		equipe_header_image_size();
	}

	if ( $( 'body' ).hasClass( 'page-template-page-agenda-desenvolvimento' ) ) {
		$( '.abas-nav ul li.menu-item-object-page' ).first().children( 'a' ).trigger( 'click' ); 
	}
	ajaxAgendaRequest = null;
	var ajaxAgenda = function( next_page ) {
		if ( typeof( next_page ) === 'undefined' ) { next_page = 1; }
		console.log( next_page );
		if( ajaxAgendaRequest != null ) {
                ajaxAgendaRequest.abort();
                ajaxAgendaRequest = null;
        }
		var eixos = [];
		var temas = [];
		$( '.each-agenda-filter-btn.selected' ).each( function() {
			if ( $( this ).attr( 'data-taxonomy' ) == 'eixos' ) {
				eixos.push( $(this).attr( 'data-term-id' ) );
			}
			if ( $( this ).attr( 'data-taxonomy' ) == 'temas' ) {
				temas.push( $(this).attr( 'data-term-id' ) );
			}
		});
		var data = {
			'action': 'agenda',
			'eixos': eixos,
			'temas': temas,
			'page': next_page
		};
		var key = $( '#agenda-search-key' ).val();
		if ( key != '' ) {
			data.key = key;
		}
		$( '.agenda-posts' ).addClass( 'load' );
		ajaxAgendaRequest = $.post( odin.ajax_url, data, function(response) {
			var max_pages = ajaxAgendaRequest.getResponseHeader( 'max-pages' );
			if ( next_page == 1 ) {
				$( '.agenda-posts .all-posts' ).html( response );
				$( '.agenda-posts' ).attr( 'data-max-pages', max_pages );
			}
			else {
				$( '.agenda-posts .all-posts' ).append( response );
			}
			if ( parseInt( max_pages ) <= next_page ) {
				$( '.agenda-posts .load-more-agenda' ).css( 'display', 'none' );
			}
			else {
				$( '.agenda-posts .load-more-agenda' ).css( 'display', 'inline-block' );
			}
			$( '.agenda-posts' ).attr( 'data-page', next_page );
			$( '.agenda-posts' ).removeClass( 'load' );
		});
	}

	$( '.each-agenda-filter-btn' ).on( 'click', function(e) {
		if( $( this ).hasClass( 'selected' ) ) {
			$( this ).removeClass( 'selected' );
		}
		else {
			$( this ).addClass( 'selected' );
		}
		ajaxAgenda();
	} );
	$( '.busca .search-btn-icon' ).on( 'click', function(e) {
		ajaxAgenda();
	} );

	if ( $( '.agenda-posts' ).length > 0 ) {
		ajaxAgenda();
	}
	$( '.agenda-posts .load-more-agenda' ).on( 'click', function(e) {
		e.preventDefault();
		var page = parseInt( $( '.agenda-posts').attr( 'data-page' ) ) + 1;
		console.log( page );
		ajaxAgenda( page );
	} );

})
