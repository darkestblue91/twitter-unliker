//Execute every 2 seconds
setInterval(() => {
	//Get all heart buttons with unfavorite class modifier
	const unfavoriteButtons = $('button.ProfileTweet-action--unfavorite');

	//Infinite loop
	for (i = 0; true; i++) {
		//If there are items remain to unlike
		if (i >= unfavoriteButtons.length) { // if items remain to unfavourite
			//Scroll to the bottom of the page to force Twitter load more tweets
			window.scrollTo(0, $(document).height());
			return;
		}

		//Do action with button
		$(unfavoriteButtons[i])
			//Click to unlike
			.trigger('click')
			//Remove button from DOM
			.remove(); 
	}
}, 2000);
