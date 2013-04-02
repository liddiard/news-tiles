$(document).ready(function(){
	/* not working yet */
	function allMenuItem(){
		if ($('#menu:first-child').html() !== 'all <span class="down-arrow">&#x25BC;</span>'){
			$('#menu:').prepend('<li><a id="select-all" href="#"><span class="swatch all"></span>all</a></li>');
		};
	};
	
	$('#select-news').click(function(){
		$('#current-view').html('news <span class="down-arrow">&#x25BC;</span>');
		allMenuItem();
	});
	$('#select-sports').click(function(){
		$('#current-view').html('sports <span class="down-arrow">&#x25BC;</span>');
	});
	$('#select-aande').click(function(){
		$('#current-view').html('a&amp;e <span class="down-arrow">&#x25BC;</span>');
	});
	$('#select-opinion').click(function(){
		$('#current-view').html('opinion <span class="down-arrow">&#x25BC;</span>');
	});
	$('#select-multimedia').click(function(){
		$('#current-view').html('multimedia <span class="down-arrow">&#x25BC;</span>');
	});
	$('#select-prime').click(function(){
		$('#current-view').html('prime <span class="down-arrow">&#x25BC;</span>');
	});
	$('#select-blogs').click(function(){
		$('#current-view').html('blogs <span class="down-arrow">&#x25BC;</span>');
	});
});