//selecionar um checkbox usando um valor do mock

$(`select[name="selectPeriodTypeId"] option:eq(${data.period -1})`).attr("selected", true)

//quando é chumbado
$('select[name="company_type_id"]').val(data.companyType)

// quando consome um mock
$('select[name="rg_issuing_authority"]').append($('<option>')).val(data.rgIssuingAuthority)

{/* <select id="selectTESTE" onchange="funcTest($(this).val())">
    <option value="1">teste1</option>
    <option value="2">teste2</option>
    <option value="3">teste3</option>
</select>

function funcTest(data) {
    let res = data
    console.log(res)
} */}

// selecionar radio checked

$('input[name="searchType"]:checked').val()


