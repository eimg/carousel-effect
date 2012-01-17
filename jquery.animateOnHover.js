(function($) {
    $.fn.animateOnHover = function() {
        $(this).each(function () {
            $(this).hover(function () {
            	$(this).data('state', 'animate');
                fadeItOut( this );
            }, function() {
                $(this).data('state', 'static');
            });
        });

        function fadeItIn(e) {
            $(e).fadeTo(400, 1, function () {
                if($(this).data('state') != 'static')
                    fadeItOut(e);
            });
        }

        function fadeItOut(e) {
            $(e).fadeTo(400, 0.5, function () {
                fadeItIn(e);
            });
        }
    }
})(this.jQuery);

