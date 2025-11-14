<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Campus360 — Dashboard</title>
  <link rel="stylesheet" href="css/style.css" />
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <nav class="topbar">
    <div class="brand">Campus360</div>
    <div class="nav-links">
      <span id="welcomeName"></span>
      <a href="events.html">Events</a>
      <a href="lostfound.html">Lost & Found</a>
      <a href="index.html" id="logout">Logout</a>
    </div>
  </nav>

  <main class="container">
    <section class="grid">
      <div class="card">
        <h3>Marks</h3>
        <canvas id="marksChart" height="140"></canvas>
      </div>

      <div class="card small-card">
        <h3>Attendance</h3>
        <div class="big" id="attendancePercent">—</div>
        <div class="muted">Semester attendance</div>
      </div>

      <div class="card small-card">
        <h3>Upcoming Events</h3>
        <div class="big" id="eventsCount">—</div>
        <div class="muted">Events this month</div>
      </div>

      <div class="card small-card">
        <h3>Lost Items</h3>
        <div class="big" id="lostCount">—</div>
        <div class="muted">Reported found items</div>
      </div>
    </section>

    <section class="card">
      <h3>Quick actions</h3>
      <div class="row">
        <a class="btn" href="events.html">View Events</a>
        <a class="btn" href="lostfound.html">View Lost & Found</a>
      </div>
      <p class="muted small">This is a frontend demo. Real backend can be connected later.</p>
    </section>
  </main>

  <script src="js/auth.js"></script>
  <script src="js/dashboard.js"></script>
</body>
</html>
