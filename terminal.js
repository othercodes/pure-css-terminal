jQuery(document).ready(function () {

    let sectionArray = [];
    jQuery('.term-section').each(function (i, e) {
        sectionArray.push(jQuery(e).attr('id'));
    });

    let terminalInput = jQuery('#terminal-input');
    let errorCommandLayout = jQuery('#term-error');
    let commandLayout = jQuery('.command');

    jQuery('#xt-btn-close').click(function () {
        jQuery('#xt-terminal-wrapper').hide();
    });

    jQuery('#xt-btn-minimize').click(function () {
        jQuery('#xt-terminal-wrapper').addClass('minimized');
    });

    jQuery('#xt-btn-maximize').click(function () {
        jQuery('#xt-terminal-wrapper').removeClass('minimized');
    });

    commandLayout.hide();
    terminalInput.focus();

    commandLayout.fadeIn();
    terminalInput.focus();
    terminalInput.val('');

    terminalInput.keyup(function (e) {
        if (e.which === 13) {

            commandLayout.hide();
            let destination = terminalInput.val()
                .replace('/', '_')
                .replace(/ /g, '');

            jQuery('div[id="term-' + destination + '"]')
                .addClass('open').siblings().removeClass('open');
            if (jQuery.inArray('term-' + destination, sectionArray) === -1) {
                errorCommandLayout.addClass('open');
                errorCommandLayout.siblings().removeClass('open');
            }

            commandLayout.fadeIn();
            terminalInput.focus();
            terminalInput.val('');
        }
    });
});
