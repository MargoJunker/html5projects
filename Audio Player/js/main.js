var audio = new Audio('media/Ride Out - Kid Ink, Tyga, Wale, YG & Rich Homie Quan.mp3');

//Hide pause
$('#pause').hide();

$('#play').click(function() {
    audio.play()
    $('#play').hide();
    $('#pause').show();
});

$('#pause').click(function() {
    audio.pause()
    $('#play').show();
    $('#pause').hide();
});

$('#stop').click(function() {
    audio.pause();
    audio.currentTime = 0;
});