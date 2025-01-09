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

<!-- Papa Parse (used for CSV parsing but can be removed here since we're not using CSV anymore) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

<!-- Custom Data Parsing and Table Building -->
<script>
  // Function to parse the custom file format
  function parseCustomFile(content) {
    const lines = content.split('\n');
    let columns = [];
    let data = [];
    let startParsingData = false;

    // Parse columns from the first few lines
    for (let line of lines) {
      // Match lines like "Col. X: <Column Name>"
      const match = line.match(/^Col\.\s*\d+: (.+)/);
      if (match) {
        columns.push(match[1]);
      } else if (line.trim() === "") {
        // Empty line marks the start of data
        startParsingData = true;
        continue;
      }

      // If we're past the empty line, parse the data rows
      if (startParsingData && line.trim()) {
        const row = line.trim().split(/\s+/);  // Split by whitespace (space/tab)
        data.push(row);
      }
    }

    return { columns, data };
  }

  // Load and parse the custom file
  fetch('/assets/data.txt')  // Path to your custom file
    .then(response => response.text())
    .then(content => {
      // Parse the content of the file
      const { columns, data } = parseCustomFile(content);

      // Dynamically populate the table headers
      const tableHeaders = document.getElementById('table-headers');
      columns.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        tableHeaders.appendChild(th);
      });

      // Dynamically populate the table rows
      const tableBody = document.getElementById('table-body');
      data.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });

      // Initialize DataTable after populating the table
      $('#example').DataTable();
    })
    .catch(error => console.error('Error loading file:', error));

</script>
