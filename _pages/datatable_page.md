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

<!-- DataTable Initialization Script -->
<script>
  // Fetch the text file containing the data
  fetch('/assets/data.txt')
    .then(response => response.text())
    .then(data => {
      // Split the file into lines
      var lines = data.trim().split('\n');

      // The first line contains the column names
      var headers = lines[0].split(/\s+/); // Split by space or tab

      var tableHeaders = document.getElementById('table-headers');
      var tableBody = document.getElementById('table-body');

      // Create table headers dynamically based on the first line (headers)
      headers.forEach(function(header) {
        var th = document.createElement('th');
        th.textContent = header; // Use the header name directly
        tableHeaders.appendChild(th);
      });

      // Loop through the remaining lines (data rows)
      lines.slice(1).forEach(function(line) {
        var columns = line.split(/\s+/); // Split each line by space or tab
        
        var tr = document.createElement('tr');
        columns.forEach(function(column) {
          var td = document.createElement('td');
          td.textContent = column;
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });

      // Initialize DataTable after the table is populated
      $('#example').DataTable();
    })
    .catch(error => console.error('Error loading file:', error));
</script>
