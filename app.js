$(function() {
    var $calculate = $('#calculate'),
        $clear = $('#clear'),
        $first = $('#first'),
        $second = $('#second');
    
    $calculate.on('click', onCalculateClick);
    $clear.on('click', onClearClick);
    $first.on('input', onNumberFunction);
    $second.on('input', onNumberFunction);

    function onCalculateClick (e) {
        var $operation = $('select[name=select]').val(),
            $first = +$('#first').val(),
            $second = +$('#second').val(),
            $result;
            if ($operation == '+') {
                $result = $first + $second;
            } else if ($operation == '-') {
                $result = $first - $second;
            } else if ($operation == '*') {
                $result = $first * $second;
            } else {
                $result = $first / $second;
            };
        $('#result').val($result);
        
    };

    function onClearClick (e) {
        $('#first').val('');
        $('#second').val(''); 
        $('#result').val('');
    };

    function onNumberFunction (e) {
        var pattern = /^\d+$/g;
            if (pattern.test($(this).val())) {
			    $(this);
		    } else {
			    $(this).css({'border': '2px solid red'});
		    };    
    };

});   