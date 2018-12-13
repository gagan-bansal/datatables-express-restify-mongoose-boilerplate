
$(document).ready(function() {
  var table = $('#myTable').DataTable({
    "ajax": {
      url: '/api/v1/user',  // replace "user" with your collection
      dataSrc: ''
    },
    "columns": [
      { "data": "_id" },
      { "data": "someData", "defaultContent": "Not Editable" },
      { "data": "name" , "defaultContent": ""},
      { "data": "age", "defaultContent": "" },
      { "data": "gender", "defaultContent": "" }
    ],
    "columnDefs": [
      {
        "targets": [ 0 ],
        "visible": false
        //"searchable": false
      }
    ],
    "order": [[0, "asc"]]
  });

  function myCallbackFunction (updatedCell, updatedRow, oldValue) {
    console.log("The new value for the cell is: " + updatedCell.data());
    console.log("The values for each cell in that row are: " + JSON.stringify(updatedRow.data()));

    // cellEdit converts number to string
    var updated = updatedRow.data()
    updated.age = parseInt(updated.age)

    $.ajax({
      // replace "user" with your collection
      url: '/api/v1/user/' + updatedRow.data()._id,
      type: 'PUT',
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
          console.log('output: '+ JSON.stringify(data))
      },
      data: JSON.stringify(updatedRow.data())
    });
  }

  table.MakeCellsEditable({
    "onUpdate": myCallbackFunction,
    confirmationButton: true,
    columns: [2, 3, 4],
    inputTypes: [{
      column: 4,
      type: "list",
      options: [
        {value: '', display: '--select--'},
        {value: 'Male', display: 'Male'},
        {value: 'Female', display: 'female'}
      ]
    }]
  });
});
