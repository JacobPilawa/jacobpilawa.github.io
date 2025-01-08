---
layout: default
title: "DataTables Page"
permalink: /datatable_page/
datatable: true
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
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/2.2.0/css/dataTables.dataTables.css" />
<script src="https://cdn.datatables.net/2.2.0/js/dataTables.js"></script>

<script>
	$(document).ready( function () {
	    $('#myTable').DataTable();
	} );
</script>
