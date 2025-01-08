---
layout: page
title: "DataTable Page"
permalink: /datatable_page/
datatable: true
---

<h1>My DataTable</h1>

<!-- Table Structure -->
<table id="example" class="display">
  <thead>
    <!-- The headers will be populated dynamically -->
  </thead>
  <tbody>
    <!-- Data will be loaded dynamically from CSV -->
  </tbody>
</table>

<!-- jQuery and DataTables CSS & JS -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.12.1/fc-4.1.0/fh-3.2.4/datatables.min.css"/>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.12.1/fc-4.1.0/fh-3.2.4/datatables.min.js"></script>

<!-- CSV Parsing Library (PapaParse) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

<!-- DataTable Initialization Script -->
<script>
  $(document).ready(function() {
    // Load CSV data and initialize DataTable
    Papa.parse("../_data/test.csv", {
      download: true,
      complete: function(results) {
        var tableData = results.data;
        
        // Get column headers from the first row of the CSV
        var columnHeaders = tableData[0];
        
        // Dynamically build the table headers
        var thead = $('#example thead');
        var headerRow = $('<tr>');
        columnHeaders.forEach(function(header) {
          headerRow.append('<th>' + header + '</th>');
        });
        thead.append(headerRow);

        // Remove the first row from tableData (which is the header row)
        tableData.shift();

        // Initialize DataTable with dynamic data
        var table = $('#example').DataTable();
        
        // Clear any pre-existing data
        table.clear();

        // Add data from CSV to the table
        table.rows.add(tableData).draw();
      }
    });
    
    // Initialize DataTable
    $('#example').DataTable();
  });
</script>
