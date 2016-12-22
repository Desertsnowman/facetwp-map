;(function ($) {
    jQuery(document).ready(function ($) {
        $(document).on('facetwp_map.init', function () {

            var editors = $("textarea.trumbowyg");
            editors.each(function () {
                $(this).trumbowyg({
                    resetCss: true,
                    removeformatPasted: true,
                    autogrow: true
                });
            });

        });
    });
})(jQuery);