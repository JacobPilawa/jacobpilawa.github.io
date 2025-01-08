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
    <tr id="table-headers">
      <!-- Table headers will be dynamically inserted here -->
    </tr>
  </thead>
  <tbody id="table-body">
    <!-- Table rows will be dynamically inserted here -->
  </tbody>
</table>

<!-- jQuery and DataTables CSS & JS -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.12.1/fc-4.1.0/fh-3.2.4/datatables.min.css"/>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.12.1/fc-4.1.0/fh-3.2.4/datatables.min.js"></script>

<!-- Papa Parse -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

<!-- DataTable Initialization Script -->
<script>
  // Load and parse the CSV file
  Papa.parse('/assets/test.csv', {
    download: true,
    header: true, // Use the first row as headers
    dynamicTyping: true, // Automatically convert types
    complete: function(results) {
      var headers = Object.keys(results.data[0]); // Get headers from the first row
      var tableHeaders = document.getElementById('table-headers');
      var tableBody = document.getElementById('table-body');

      // Create table headers dynamically
      headers.forEach(function(header) {
        var th = document.createElement('th');
        th.textContent = header;
        tableHeaders.appendChild(th);
      });

      // Create table rows dynamically
      results.data.forEach(function(row) {
        var tr = document.createElement('tr');
        headers.forEach(function(header) {
          var td = document.createElement('td');
          td.textContent = row[header];
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });

      // Initialize DataTable after the table is populated
      $('#example').DataTable();
    }
  });
</script>
