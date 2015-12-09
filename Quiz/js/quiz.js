var score = 0; // Set score to 0
var total = 5; // Total number of questions
var point = 2; // Points per correct answer
var highest = total * point;

// Initializer
function init(){
    // Set correct answers
    sessionStorage.setItem('a1','b');
    sessionStorage.setItem('a2','d');
    sessionStorage.setItem('a3','c');
    sessionStorage.setItem('a4','a');
    sessionStorage.setItem('a5','b');
}

$(document).ready(function(){
    // Hide all questions
    $('.questionForm').hide();
    
    // Show first question
    $('#q1').show();
    
    $('#q1 #submit').click(function(){
        $('.questionForm').hide();
        proccess('q1');
        $('#q2').fadeIn(300);
        return false;
    });
    
    $('#q2 #submit').click(function(){
        $('.questionForm').hide();
        proccess('q2');
        $('#q3').fadeIn(300);
        return false;
    });
    
    $('#q3 #submit').click(function(){
        $('.questionForm').hide();
        proccess('q3');
        $('#q4').fadeIn(300);
        return false;
    });
    
    $('#q4 #submit').click(function(){
        $('.questionForm').hide();
        proccess('q4');
        $('#q5').fadeIn(300);
        return false;
    });
    
    $('#q5 #submit').click(function(){
        $('.questionForm').hide();
        proccess('q5');
        $('#result').fadeIn(300);
        return false;
    });
    
});

// Process the answers

function process(q){
    if(q == q1){
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a1){
            score ++;
        }
    }
    if(q == q2){
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a2){
            score ++;
        }
    }
    if(q == q3){
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a3){
            score ++;
        }
    }
    if(q == q4){
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a4){
            score ++;
        }
    }
    if(q == q5){
        var submitted = $('input[name=q1]:checked').val();
        if(submitted == sessionStorage.a5){
            score ++;
        }
        $('#results').html('<h3>Your final score is: '+score+' out of 5</h3><a href="indef.html">Take Quiz Again</a>')
    }
    return false;
}
    
    
    
    

// Add event listener
window.addEventListener('load', init, false);
