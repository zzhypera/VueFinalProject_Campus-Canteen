<template>
  <div class="auth-page">
    <div class="auth-brand">
      <RouterLink to="/" class="brand"><span class="brand-mark">C</span> Campus<span>Canteen</span></RouterLink>
    </div>

    <div class="auth-card">
      <span class="eyebrow">JOIN THE CAMPUS</span>
      <h1>Create your account.</h1>
      <p class="auth-subtitle">Order faster and keep track of your canteen orders.</p>

      <form @submit.prevent="submit">
        <label>Full name<input v-model="name" type="text" placeholder="Juan Dela Cruz" required /></label>
        <label>Email<input v-model="email" type="email" placeholder="student@campus.edu" required /></label>
        <label>Password<input v-model="password" type="password" placeholder="••••••••" required /></label>
        <p v-if="error" class="error-message">{{ error }}</p>
        <button class="btn btn-primary full-button">Create account</button>
      </form>

      <p class="auth-footer">Already have an account? <RouterLink to="/login">Log in</RouterLink></p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'

const router = useRouter()
const auth = useAuthStore()
const name = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

function submit() {
  try {
    auth.register(name.value, email.value, password.value)
    router.push('/menu')
  } catch (err) {
    error.value = err.message
  }
}
</script>