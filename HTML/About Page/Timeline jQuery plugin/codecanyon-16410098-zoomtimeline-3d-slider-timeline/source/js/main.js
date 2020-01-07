jQuery(document).ready(function($){


    $('input[name="dzstabs_accordio_styling_input"]').bind('change', function(){
        var _t = $(this);
        var val = _t.val();
        console.info(val);
        $('#dzstabs_accordio_styling').html(' body .dzs-tabs.skin-blue .tabs-menu .tab-menu-con.active .tab-menu{ background-color: '+val+'; }');
    })
})