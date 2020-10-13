<?php 
  require_once "global.php";
  $dataPoints = array( 
	array("label"=>"IPHONE", "y"=>60),
	array("label"=>"TECNO", "y"=>10),
	array("label"=>"SAMSUNG", "y"=>20),
	array("label"=>"OPPO", "y"=>10),
)
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php require_once "meta.php"?>
  <title>Document</title>
  <?php require_once"meta.php" ?>
</head>

<body>
  <div class="index-container">
    <nav id="left-navigation" class="left-nav">
      <div class="header px-2 py-2">
        <img id="logo-image" src="assets/img/loginpic.png" alt="">
      </div>
      <div class="nav-content">
        <ul>
          <li>
            <a class="menu-item active d-flex align-items-center">
              <div class="ml-4">
                <object type="image/svg+xml" data="assets/icons/dashboard.svg" class="icon icon-bike"></object>
              </div>
              <div><span>Dashboard</span></div>
              <div><span><i class="flaticon-right-chevron"></i></span></div>
            </a>
          </li>
          <li id="orders">
            <a class="menu-item d-flex align-items-center">
              <div class="ml-4">
                <object type="image/svg+xml" data="assets/icons/orders.svg" class="icon icon-bike"></object>
              </div>
              <div><span>Orders</span></div>
              <div><span><i class="fas fa-chevron-down"></i></span></div>
            </a>
            <div id="orders-submenu">
              <a class="menu-item sub d-flex align-items-center">

                <div><span>Creat New Order</span></div>
              </a>
              <a class="menu-item sub">
                <div><span>View Orders</span></div>
              </a>
            </div>
            <div>
            </div>
          </li>
          <li id="products">
            <a class="menu-item">
              <div class="ml-4">
                <object type="image/svg+xml" data="assets/icons/reports.svg" class="icon icon-bike"></object>
              </div>
              <div><span>Products</span></div>
              <div><span><i class="fas fa-chevron-down"></i></span></div>
            </a>
            <div id="products-submenu">
              <a class="menu-item sub">
                <div><span>Creat New Product</span></div>
              </a>
              <a class="menu-item sub">
                <div><span>View Products</span></div>
              </a>
            </div>
          </li>
          <li>
            <a class="menu-item">
              <div class="ml-4">
                <object type="image/svg+xml" data="assets/icons/customers.svg" class="icon icon-bike"></object>
              </div>
              <div><span>Customers</span></div>
              <div><span><i class="flaticon-right-chevron"></i></span></div>
            </a>
          </li>
          <li>
            <a class="menu-item">
              <div class="ml-4">
                <object type="image/svg+xml" data="assets/icons/reports.svg" class="icon icon-bike"></object>
              </div>
              <div><span>Report</span></div>
              <div><span><i class="flaticon-right-chevron"></i></span></div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="content">
      <nav class="toolbar d-flex justify-content-between align-items-center px-3">
        <div class="d-flex">
          <button id="open-menu-btn" class="menu-icon"><i class="fas fa-bars"></i></button>
        </div>
        <div class="d-flex align-items-center profile-sec">
          <div class="profile-pic">E</div>
          <span class="ml-2 d-flex align-items-center">Eric Prestein&nbsp;&nbsp;<i
              class="fas fa-angle-down mt-1"></i></span>
        </div>
      </nav>
      <main class="d-flex position-relative">
        <div class="d-flex flex-grow-1 content-sec position-relative">
          <div class="d-flex recent-orders-sec position-absolute flex-column">
            <div class="section-header d-flex py-3 px-2">
              <span>Recent Orders</span>
            </div>
            <?php require_once"components/table.php" ?>
          </div>
        </div>
        <div class="d-flex flex-column task-bar-sec">
          <div class="chart-content d-flex flex-column">
            <div class="section-header d-flex py-3 px-2">
              <span>Statistic</span>
            </div>
            <div class="d-flex justify-content-center align-item-center">
              <div id="chartContainer" style="height: 350px; width: 200px;"></div>
            </div>
          </div>
        </div>
      </main>
      <footer class="toolbar d-flex justify-content-between align-items-center px-3">
        <div class="d-flex">
          
        <div class="d-flex align-items-center profile-sec">
          
        </div>
      </footer>
    </div>
  </div>
  <?php require_once "icons.php"?>
  <?php require_once "script.php"?>
  <script src="assets/js/navigation.js"></script>
  <script>
  CanvasJS.addColorSet("greenShades",
    [ //colorSet Array

      "#1064a0",
      "#1a8ee0",
      "#35a5f5",
      "#2fa9ff",
      "#5aa8df"
    ]);

  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    colorSet: "greenShades",
    title: {
      text: ""
    },
    subtitles: [{
      text: ""
    }],
    data: [{
      type: "pie",
      yValueFormatString: "#,##0.00\"%\"",
      indexLabel: "{label} ({y})",
      dataPoints: <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
    }]
  });
  chart.render();
  </script>
</body>

</html>