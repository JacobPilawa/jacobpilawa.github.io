---
layout: default
title: "DataTables Page"
permalink: /datatable_page/
datatable: true
---

<h1>My Fancy DataTables Page</h1>

<div class="datatable-begin"></div>

Food    | Description                           | Category | Sample type
------- | ------------------------------------- | -------- | -----------
Apples  | A small, somewhat round ...           | Fruit    | Fuji
Bananas | A long and curved, often-yellow ...   | Fruit    | Snow
Kiwis   | A small, hairy-skinned sweet ...      | Fruit    | Golden
Oranges | A spherical, orange-colored sweet ... | Fruit    | Navel

<div class="datatable-end"></div>

<!-- Link to DataTables CSS and JS -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="https://cdn.datatables.net/2.2.0/css/dataTables.dataTables.css" />
<script src="https://cdn.datatables.net/2.2.0/js/dataTables.js"></script>

<script>
	$(document).ready( function () {
	    $('#myTable').DataTable();
	} );
</script>
