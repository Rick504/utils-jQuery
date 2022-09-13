function save() {
              const data = {}
              const fields = [
                  'nomeDosCmpos',
              ]

              fields.forEach(field => { data[field] = $(`input[name="${field}"]`).val() })
              $.each($(`select`),function(){ data[`${$(this).attr('name')}`] = $(this).val() })
              $.each($(`textarea`),function(){ data[`${$(this).attr('name')}`] = $(this).val() })

              console.log(data)

              // $.ajax({ type: "POST", url: "MUDAR", data: {data}, dataType: "json"})
              //     .done(function() { location.href = "./" })
              //     .fail(function(error) { throw error })
          }
