---
layout: default
title: "DataTables Page"
excerpt: "DT Page Excerpt"
permalink: /datatable_page/
---

<h1>My DataTables Page</h1>

<!-- Your table goes here -->
<table id="myTable" class="display">
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>25</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>30</td>
            <td>London</td>
        </tr>
        <tr>
            <td>Charlie</td>
            <td>35</td>
            <td>Paris</td>
        </tr>
    </tbody>
</table>

<!-- Link to DataTables CSS and JS -->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>

<script>
    // Initialize DataTables
    $(document).ready(function() {
        $('#myTable').DataTable();
    });
</script>
