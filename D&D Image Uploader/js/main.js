$(function () {
    var picbox = $('#picbox'),
        back = $('.back', picbox);

    picbox.filedrop({
        paramname: 'pic',
        maxfilesize: 2,
        maxfiles: 6,
        url: 'upload.php',
        
        uploadFinished: function (i, file, response, time) {
            $.data(file).addClass('done');
        },
        error: function (err, file) {
            switch (err) {
                case 'BrowserNotSupported':
                    showMessage('Your browser does not support HTML5 file upload');
                    break;
                case 'TooManyFiles':
                    alert('You went over the max number of files');
                    break;
                case 'FileTooLarge':
                    alert(file.name + ' is too big, please upload a smaller image.');
                    break;
                default:
                    break;
            }
        },
        beforeEach: function (file) {
            if (!file.type.match(/^image\//)) {
                alert('Your file is not an image');
                return false;
            }
        },
        uploadStarted: function (i, file, len) {
            
        }
    });
});