---
layout: default
title: Sample page
permalink: /datatable_page/
datatable: true
---

Food    | Quantity sold | Time sold         | Cashier
------- | ------------- | ----------------- | -----------
Apples  |   5           | 8-25-2022 9:00:01 | Bearbear
Bananas |   10          | 8-25-2022 9:03:55 | Racc
Kiwis   |   3           | 8-25-2022 9:06:37 | Mickey
Oranges |   5           | 8-25-2022 9:07:24 | Bearbear
{: .datatable}


<head>
    <!--The lines below help include JQuery DataTables into Markdown files-->
    {%- if page.datatable == true -%}
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>  <!--Add JQuery-->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.css"> <!--add style sheet-->
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.js"></script> <!--add dataTables-->
    <script>
        $(document).ready( function () {
        $('table.datatable').DataTable();
        } );
    </script>
    {% endif %}
</head>
