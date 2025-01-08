---
layout: default
title: Sample page
permalink: /datatable_page/
datatable: true
---

<div class="datatable-begin"></div>

<table class="datatable">
  <thead>
    <tr>
      <th>Food</th>
      <th>Description</th>
      <th>Category</th>
      <th>Sample type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apples</td>
      <td>A small, somewhat round ...</td>
      <td>Fruit</td>
      <td>Fuji</td>
    </tr>
    <tr>
      <td>Bananas</td>
      <td>A long and curved, often-yellow ...</td>
      <td>Fruit</td>
      <td>Snow</td>
    </tr>
    <tr>
      <td>Kiwis</td>
      <td>A small, hairy-skinned sweet ...</td>
      <td>Fruit</td>
      <td>Golden</td>
    </tr>
    <tr>
      <td>Oranges</td>
      <td>A spherical, orange-colored sweet ...</td>
      <td>Fruit</td>
      <td>Navel</td>
    </tr>
  </tbody>
</table>

<div class="datatable-end"></div>

<!-- Add JQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- Add DataTables CSS -->
<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css">

<!-- Add DataTables JavaScript -->
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script>

<script>
  $(document).ready(function() {
    $('table.datatable').DataTable();
  });
</script>
