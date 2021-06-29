$(document).ready(function() {
    // show hide checkbox detail
    var checked = $('#attachment-1').prop('checked')
    if (!checked) {
        $('#attachment-detail-1').hide();
    } else {
        $('#attachment-detail-1').show();
    }
    $("#attachment-1").change(function() {
        if (this.checked) {
            $('#attachment-detail-1').show();
        } else {
            $('#attachment-detail-1').hide();
        }
    });

    var checked2 = $('attachment-2').prop('cheked')
    if (!checked2) {
        $('#attachment-detail-2').hide();
    } else {
        $('#attachment-detail-2').show();
    }
    $("#attachment-2").change(function() {
            if (this.checked) {
                $('#attachment-detail-2').show();
            } else {
                $('#attachment-detail-2').hide();
            }
        })
        // ~show hide checkbox detail
        // ontop amination
    $("#myBtn").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function() {
                window.location.hash = hash;
            });
        }
    });
    //~ ontop amination
    // count text
    $('#fname').keyup(function(e) {
        $('#fname-count').html(this.value.length);
    }).keypress(function(e) {
        if (this.value.length >= 10) {
            e.preventDefault();
        }
    });
    $('#fname2').keyup(function(e) {
        $('#fname2-count').html(this.value.length);
    }).keypress(function(e) {
        if (this.value.length >= 10) {
            e.preventDefault();
        }
    });
    //~ count text

    // note content
  
    //~ note content
    // modal
    $("#datepicker").datepicker();
    //~ modal
    
});