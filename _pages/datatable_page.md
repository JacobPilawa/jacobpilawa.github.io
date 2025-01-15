---
layout: page
title: "Black Hole Data"
permalink: /datatable_page/
datatable: true
---

# Information

* Currently including the following:
	* MM13: [Revisiting the Scaling Relations of Black Hole Masses and Host Galaxy Properties](https://ui.adsabs.harvard.edu/abs/2013ApJ...764..184M/abstract)
	* S16: [Selection bias in dynamically measured supermassive black hole samples: its consequences and the quest for the most fundamental relation ](https://academic.oup.com/mnras/article/460/3/3119/2609473)
	* More to come.



<h1>Black Hole Data</h1>

<!-- Column Selector (Clickable buttons for each column) -->
<div id="column-selector">
  <h3>Select Columns to Display:</h3>
  <div id="button-container"></div>
</div>

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

<!-- MathJax for LaTeX rendering -->
<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

<!-- Custom Data Parsing and Table Building -->
<script>
  // Function to parse the custom file format
  function parseCustomFile(content) {
    const lines = content.split('\n');
    let columns = [];
    let data = [];
    
    // The first line contains the column names
    const headerLine = lines[0].trim();
    columns = headerLine.split('\t');  // Split by tab character for columns
    
    // Process the rest of the lines as data
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line) {
        const row = line.split('\t');  // Split by tab character for rows
        data.push(row);
      }
    }

    return { columns, data };
  }

  // Load and parse the custom file
  fetch('/assets/fulldatabase.txt')  // Path to your custom file
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
          
          // Check if cell contains LaTeX (wrap with $ for inline math)
          if (cell.includes('\\(') && cell.includes('\\)')) {
            td.innerHTML = cell;  // Leave as is for inline math
          } else {
            td.textContent = cell;  // Regular text
          }
          
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });

      // Create clickable buttons for each column
      const buttonContainer = document.getElementById('button-container');
      columns.forEach((col, index) => {
        const button = document.createElement('button');
        button.textContent = col;
        button.classList.add('column-button');
        button.style.backgroundColor = '#CCFFCC';  // Initial soft green color
        button.style.marginRight = '10px';
        button.style.padding = '5px 10px';
        button.style.border = 'none';
        button.style.cursor = 'pointer';
        
        button.addEventListener('click', function() {
          toggleColumn(index, button);
        });

        buttonContainer.appendChild(button);
      });

      // Function to toggle visibility of columns and button color
      function toggleColumn(index, button) {
        const table = $('#example').DataTable();
        const isVisible = table.column(index).visible();
        
        // Toggle column visibility
        if (isVisible) {
          table.column(index).visible(false);
          button.style.backgroundColor = '#FFCCCC';  // Soft red
        } else {
          table.column(index).visible(true);
          button.style.backgroundColor = '#CCFFCC';  // Soft green
        }
      }

      // Initialize DataTable after populating the table
      $('#example').DataTable({

      });

      // After DataTable is initialized, trigger MathJax to render LaTeX in the table
      MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    })
    .catch(error => console.error('Error loading file:', error));
</script>

<!-- Style for Column Buttons -->
<style>
  .column-button {
    transition: background-color 0.3s ease;
  }

  .column-button:hover {
    background-color: #FF9999;  /* Soft red hover */
  }
</style>
