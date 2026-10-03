<template>
  <div class="auth-page">
    <div class="auth-brand">
      <RouterLink to="/" class="brand"><span class="brand-mark">C</span> Campus<span>Canteen</span></RouterLink>
    </div>

    <div class="auth-card">
      <span class="eyebrow">WELCOME BACK</span>
      <h1>Log in to order.</h1>
      <p class="auth-subtitle">Use your campus account to continue.</p>

      <form @submit.prevent="submit">
        <label>Email<input v-model="email" type="email" placeholder="student@campus.edu" required /></label>
        <label>Password<input v-model="password" type="password" placeholder="••••••••" required /></label>
        <p v-if="error" class="error-message">{{ error }}</p>
        <button class="btn btn-primary full-button">Login</button>
      </form>

      <p class="auth-footer">Don't have an account? <RouterLink to="/register">Create one</RouterLink></p>
      <RouterLink to="/" class="back-link center-link">← Back to home</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const auth = useAuthStore()
const email = ref('')
const password = ref('')
const error = ref('')

function submit() {
  try {
    auth.login(email.value, password.value)
    router.push(email.value.includes('admin') ? '/admin' : '/menu')
  } catch (err) {
    error.value = err.message
  }
}
</script>