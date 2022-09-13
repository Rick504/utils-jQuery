// consumindo mock messes
function createYears(data) {
    data.map((item) => {
        $('select[name="rgEmittedYears"]').append(
            $('<option>').append(item)
        )
    })
 }

$.ajax({ type: 'GET', url: '../assets/js/mock/dates/years.json', dataType: 'json' })
  .done(function (data) { createYears(data) })
  .fail(function (error) { throw error })

// consumindo mock messes
function createMonth(data) {
    data.map((item) => {
        $('select[name="rgEmittedMonth"]').append(
            $('<option>').append(item)
        )
    })
 }

$.ajax({ type: 'GET', url: '../assets/js/mock/dates/months.json', dataType: 'json' })
  .done(function (data) { createMonth(data) })
  .fail(function (error) { throw error })

// consumindo mock dias
function createDay(data) {
    data.map((item) => {
        $('select[name="rgEmittedDt"]').append(
            $('<option>').append(item)
        )
    })
 }

$.ajax({ type: 'GET', url: '../assets/js/mock/dates/days.json', dataType: 'json' })
  .done(function (data) { createDay(data) })
  .fail(function (error) { throw error })

// consumindo mock estados
function createState(data) {
    data.map((item) => {
        $('select[name="rgEmittedState"]').append(
            $('<option>').append(item)
        )
    })
 }

$.ajax({ type: 'GET', url: '../assets/js/mock/state.json', dataType: 'json' })
  .done(function (data) { createState(data) })
  .fail(function (error) { throw error })
