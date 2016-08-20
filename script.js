$( document ).ready(function() {
 	// Define the game here!!!!
 	var NumberOfSpecialCards = 1;
 	var NumberOfPlatformCards = 1;
 	var NumberOfSystemCards = 3;
 	var NumberOfThemeCards = 4;
 	// dont touch anything after this point
	 $.getJSON( "cards.json", function( data ) {
	 var items = [];
	 $.each( data, function( key, val ) {
	    items.push( val );
	 });
	  shuffleArray(items);
	jQuery.each( items, function( i, val ) {
	$( "body" ).append( " <img class='card draggable "+items[i].type+" ' id= "+items[i].imgurl+" src='images/"+items[i].imgurl+".jpg '>" );
	})
	$( function() {
		$( "img.draggable" ).draggable();
	});
	setDeck(NumberOfThemeCards,NumberOfSystemCards,NumberOfPlatformCards,NumberOfSpecialCards);
	function setDeck(numTheme, numSystem, numPlatform, numSpecial){ 
		for(var i = 0; i < numTheme; i++ ){ 
			dealCard("theme");
		}
		for(var i = 0; i < numSystem; i++ ){ 
			dealCard("system");
		}
		for(var i = 0; i < numPlatform; i++ ){ 
			dealCard("platform");
		}
		for(var i = 0; i < numSpecial; i++ ){ 
			dealCard("special");
		}
	}
	$("button#any").click(function() { 
		 $("img.card").each(function(){ 
		 	if($(this).hasClass("inPlay")){ 
		 	} else { 
				$(this).addClass("inPlay");
		 		$(this).css("left", "200px");
		 		$(this).css("top", "200px");
				return false;
			}
		 });
	});
	buttFunct("platform");
	buttFunct("system");
	buttFunct("special");
	buttFunct("theme");
	function buttFunct(typeOCard){
			var target = "button#"+typeOCard;
		$(target).click(function() { 
			dealCard(typeOCard);
		});
	}
	function dealCard(typeOCard){
		$("img.card").each(function(){ 
		 	if($(this).hasClass("inPlay")){ 
		 	} else { 
			 	if($(this).hasClass(typeOCard)){ 
			 		var offsetPileX = (Math.floor((Math.random() * 200) + 1)) + 200;
			 		var offsetPileY = (Math.floor((Math.random() * 200) + 1)) + 200;
					$(this).addClass("inPlay");
			 		$(this).css("left", ""+offsetPileY+"px");
			 		$(this).css("top", ""+offsetPileX+"px");
					return false;
			 	}
			}
		});
	}
	var rotation = 0;
	jQuery.fn.rotate = function(degrees) {
	   		$(this).css({'transform' : 'rotate('+ degrees +'deg)'});
		};
		$('img').click(function() {
		    rotation += 90;
		    $(this).rotate(rotation);
		});
	});
	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}
});