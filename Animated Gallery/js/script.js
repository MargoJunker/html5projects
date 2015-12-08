$(document).ready(function()){
    var items = $('#gallery li'),
        itemsByTags =[];

    //loop through tags
    items.each(function(i){
        var elem = $(this),
        tags = elem.data('tags').split(',');
        
        //Add data attribute for quicksand
        elem.attr('data-id',i);
        
        $.each(tags,function(key,value){
            //Remove whitespace
            valuse = $.trim(value);
            
            if(!(valuse in itemsByTags)){
                //Aad emty value
                itemsByTags[value] = [];
            }
            
            //Add image to arry
            itemsByTags[value].push(elem);
        });
    });

    //Create "All Items" option
    createList(itemsByTags, function(k, v){
        createList(k, v);
    })
});