<template>
  <div>
    <div class="admin-heading">
      <div><span class="eyebrow">CUSTOMER MANAGEMENT</span><h1>Customers</h1></div>
    </div>

    <div class="admin-panel">
      <div class="table-wrap">
        <table>
          <thead><tr><th>Customer</th><th>Email</th><th>Orders</th><th>Total spent</th><th>Status</th></tr></thead>
          <tbody>
            <tr v-for="customer in customers" :key="customer.email">
              <td><strong>{{ customer.name }}</strong></td>
              <td>{{ customer.email }}</td>
              <td>{{ customer.orders }}</td>
              <td>₱{{ customer.spent }}</td>
              <td><span class="status-pill completed">Active</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
const customers = [
  { name: 'Juan Dela Cruz', email: 'juan@campus.edu', orders: 12, spent: 1240 },
  { name: 'Maria Santos', email: 'maria@campus.edu', orders: 9, spent: 875 },
  { name: 'Pedro Reyes', email: 'pedro@campus.edu', orders: 7, spent: 620 },
  { name: 'Anna Garcia', email: 'anna@campus.edu', orders: 5, spent: 490 }
]
</script>