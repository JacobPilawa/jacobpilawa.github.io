<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DataTables Test</title>

    <!-- DataTables CSS -->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.12.1/css/jquery.dataTables.min.css">
</head>
<body>

    <h1>DataTables Test</h1>

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
        </tbody>
    </table>

    <!-- jQuery library -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- DataTables JS -->
    <script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>

    <!-- Initialize DataTables -->
    <script>
        $(document).ready(function() {
            // Make sure DataTables is available
            if (typeof $.fn.DataTable === 'function') {
                $('#myTable').DataTable();
            } else {
                console.error('DataTables not loaded');
            }
        });
    </script>
    
</body>
</html>
