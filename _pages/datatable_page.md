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
    <tr>
      <th>Name</th>
      <th>Position</th>
      <th>Office</th>
      <th>Age</th>
      <th>Start date</th>
      <th>Salary</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td>$320,800</td>
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td>$170,750</td>
    </tr>
    <!-- Add more rows as needed -->
  </tbody>
</table>

<!-- jQuery and DataTables CSS & JS -->
<script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/v/dt/dt-1.12.1/fc-4.1.0/fh-3.2.4/datatables.min.css"/>
<script type="text/javascript" src="https://cdn.datatables.net/v/dt/dt-1.12.1/fc-4.1.0/fh-3.2.4/datatables.min.js"></script>

<!-- DataTable Initialization Script -->
<script>
  $(document).ready( function () {
    $('#example').DataTable();
  });
</script>
