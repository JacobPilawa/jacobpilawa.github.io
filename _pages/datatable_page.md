---
layout: default
title: "DataTables Page"
permalink: /datatable_page/
---

<h1>My Fancy DataTables Page</h1>

<!-- Your table goes here -->
<table id="myTable" class="display" cellspacing="0" width="100%">
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
        <tr>
            <td>David</td>
            <td>40</td>
            <td>Berlin</td>
        </tr>
        <tr>
            <td>Eva</td>
            <td>22</td>
            <td>Madrid</td>
        </tr>
        <tr>
            <td>Frank</td>
            <td>29</td>
            <td>Rome</td>
        </tr>
        <tr>
            <td>Grace</td>
            <td>33</td>
            <td>Tokyo</td>
        </tr>
        <tr>
            <td>Hank</td>
            <td>31</td>
            <td>Chicago</td>
        </tr>
        <tr>
            <td>Ivy</td>
            <td>27</td>
            <td>London</td>
        </tr>
        <tr>
            <td>Jack</td>
            <td>34</td>
            <td>New York</td>
        </tr>
    </tbody>
</table>

<!-- Link to DataTables CSS and JS -->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>

<script>
    // Initialize DataTables with extra features
    $(document).ready(function() {
        $('#myTable').DataTable({
            "paging": true,            // Enable pagination
            "scrollY": "200px",       // Enable vertical scrolling with fixed height
            "scrollCollapse": true,    // Allow scrolling to collapse when there are fewer rows than the height
            "ordering": true,         // Enable sorting
            "info": true,             // Show table information (e.g., "Showing 1 to 10 of 100 entries")
            "lengthMenu": [5, 10, 15], // Allow users to choose the number of rows per page (e.g., 5, 10, 15 rows per page)
            "searching": true,        // Enable search functionality
            "autoWidth": false        // Disable automatic column width calculation
        });
    });
</script>
