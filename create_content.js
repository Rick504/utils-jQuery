function createTable(data) {
    const _table = data.reduce((previous, current) => {
        return previous + /*html*/`

        `
    }, '')

    return /*html*/ `
        ${_table}
    `
 }

function createContent(data) {
    let html = createTable(data)

    $('.row').html(html)
 }

$.ajax({ type: "GET", url: "../assets/js/mock/MUDAR.json", dataType: "json"})
    .done(function(data) { createContent(data)})
    .fail(function(error) { throw error })
