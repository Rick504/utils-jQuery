// esse caso foi feito com um each para pegar cada input gerado no js e
// aplicar essa regra pra cada input gerado

let testeArr = [0, 1, 2]

function usingMask() {
    $.mask.definitions['H'] = "[0-2]"
    $.mask.definitions['h'] = "[0-4]"
    $.mask.definitions['M'] = "[0-5]"
    $.mask.definitions['m'] = "[0-9]"
    $.each(testeArr, function (index, element) {
        $(`#nomeTal_${index}`).mask("Hh:Mm", {
            completed: function() {
                var currentMask = $(this).mask()
                if (isNaN(parseInt(currentMask))) {
                    $(this).val("")
                } else if (parseInt(currentMask) > 2359) {
                    $(this).val("23:59")
                }
            }
        })
    })
}
