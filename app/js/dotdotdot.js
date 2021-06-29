var xmpl = document.querySelector( '#xmpl-3' );
		var dot = new Dotdotdot( xmpl, {

			// Prevents the <a class="toggle" /> from being removed
			keep: '.toggle'

		})

		// Get the dotdotdot API
		var api = dot.API;

		xmpl.addEventListener( 'click', ( evnt ) => {
			if ( evnt.target.closest( '.toggle' ) ) {
				evnt.preventDefault();

				//	When truncated, restore
				if ( xmpl.matches( '.ddd-truncated' ) )
				{
					api.restore();
					xmpl.classList.add( 'full-story' );
				}

				//	Not truncated, truncate
				else
				{
					xmpl.classList.remove( 'full-story' );
					api.truncate();
					api.watch();
				}
			}
		});

