import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('canteen_user') || 'null'))
  const token = ref(localStorage.getItem('canteen_token') || '')

  const isAuthenticated = computed(() => !!token.value)

  function login(email, password) {
    if (!email || !password) throw new Error('Please enter your email and password.')

    token.value = 'demo-token'
    user.value = {
      id: 1,
      name: email.includes('admin') ? 'Canteen Admin' : 'Campus Student',
      email,
      role: email.includes('admin') ? 'admin' : 'student'
    }

    localStorage.setItem('canteen_token', token.value)
    localStorage.setItem('canteen_user', JSON.stringify(user.value))
  }

  function register(name, email, password) {
    if (!name || !email || !password) throw new Error('Please complete all required fields.')

    token.value = 'demo-token'
    user.value = { id: Date.now(), name, email, role: 'student' }
    localStorage.setItem('canteen_token', token.value)
    localStorage.setItem('canteen_user', JSON.stringify(user.value))
  }

  function logout() {
    token.value = ''
    user.value = null
    localStorage.removeItem('canteen_token')
    localStorage.removeItem('canteen_user')
  }

  return { user, token, isAuthenticated, login, register, logout }
})