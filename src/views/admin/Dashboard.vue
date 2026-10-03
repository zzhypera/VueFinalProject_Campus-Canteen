<template>
  <div>
    <div class="admin-heading">
      <div>
        <span class="eyebrow">OVERVIEW</span>
        <h1>Good morning, Admin.</h1>
      </div>
      <span class="date-chip">{{ new Date().toLocaleDateString() }}</span>
    </div>

    <div class="stats-grid">
      <div class="stat-card"><span>Today's orders</span><strong>42</strong><small>Across all pickup points</small></div>
      <div class="stat-card"><span>Today's sales</span><strong>₱4,850</strong><small>+12% from yesterday</small></div>
      <div class="stat-card"><span>Pending orders</span><strong>8</strong><small>Need staff attention</small></div>
      <div class="stat-card"><span>Completed</span><strong>31</strong><small>Today's completed orders</small></div>
    </div>

    <div class="admin-panel">
      <div class="panel-heading"><h2>Recent orders</h2><RouterLink to="/admin/orders" class="text-link">View all →</RouterLink></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Order</th><th>Customer</th><th>Total</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>#ORD-1024</td><td>Juan Dela Cruz</td><td>₱215</td><td><span class="status-pill preparing">Preparing</span></td></tr>
            <tr><td>#ORD-1023</td><td>Maria Santos</td><td>₱150</td><td><span class="status-pill ready">Ready</span></td></tr>
            <tr><td>#ORD-1022</td><td>Pedro Reyes</td><td>₱85</td><td><span class="status-pill completed">Completed</span></td></tr>
            <tr><td>#ORD-1021</td><td>Anna Garcia</td><td>₱130</td><td><span class="status-pill pending">Pending</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>