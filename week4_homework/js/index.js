$(function(){
    console.log("page loaded");
    
    $('#heading1').click(function(){
        console.log("heading1 clicked");
    });
});
console.log("file loaded");

$('#coding').click(function(){
	changeGif( 'http://i.imgur.com/3fAd0w8.gif');
});

$('#playingGuitar').click(function(){
	changeGif( 'http://gifsec.com/wp-content/uploads/GIF/2014/11/Guitar-Playing-Guitar-Cat-Cats-Cat-playing-Guitar-GIF.gif');
});

$('#marketing').click(function(){
	changeGif('http://reactiongifs.me/wp-content/uploads/2013/08/working-hard.gif');
});
$('#reading').click(function(){
	changeGif('https://media.giphy.com/media/34ZNcoaN5u4hi/giphy.gif');
});

function changeGif(src)
{
	$('#action').attr('src',src);
}
