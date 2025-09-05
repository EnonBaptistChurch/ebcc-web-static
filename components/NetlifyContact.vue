<script lang="ts" setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref<'idle' | 'success' | 'error'>('idle')
const isSubmitting = ref(false)
const honeypot = ref('') // anti-spam hidden input

// Submit the form
const handleSubmit = async () => {
  if (honeypot.value) {
    status.value = 'error'
    return
  }

  isSubmitting.value = true
  status.value = 'idle'

  try {
    const response = await $fetch('/.netlify/functions/contact', {
      method: 'POST',
      body: formData.value
    })

    if (typeof response === 'object' && response !== null && 'error' in response) {
      const message = (response as { error: string }).error
      throw new Error(message) // now TypeScript knows it's a string
    }

    status.value = 'success'
    formData.value = { name: '', email: '', message: '' }
  } catch (err) {
    status.value = 'error'
    console.error('Submission failed:', err instanceof Error ? err.message : err)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit" class="email-form">
      <div class="form-row">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="formData.name"
            type="text"
            name="name"
            required
            placeholder="Your full name"
          />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="formData.email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="formData.message"
          name="message"
          required
          placeholder="Type your message here..."
          rows="9"
        ></textarea>
      </div>

      <!-- Honeypot hidden field -->
      <input v-model="honeypot" type="text" name="_gotcha" style="display: none;" />

      <button type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Sending...' : 'Send' }}
      </button>

      <p v-if="status === 'success'" class="status success">Message sent successfully!</p>
      <p v-else-if="status === 'error'" class="status error">Something went wrong. Please try again.</p>
    </form>
  </div>
</template>

<style scoped>
.email-form {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 1rem;
}

.form-row {
  display: flex;
  gap: 2rem;
  margin-bottom: 1.25rem;
}

.form-group {
  flex: 1;
  margin-bottom: 1.25rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #333;
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.75rem;
  box-sizing: border-box;
  transition: border-color 0.2s ease;
}

input:focus,
textarea:focus {
  border-color: var(--nav-bar-bg-color);
  outline: none;
}

button {
  display: block;
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  background-color: var(--nav-bar-bg-color);
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

button:hover:not(:disabled) {
  background-color: #0056b3;
}

.status {
  margin-top: 1rem;
  font-weight: 500;
  text-align: center;
}

.success {
  color: green;
}

.error {
  color: red;
}

/* Mobile - Single column layout */
@media (max-width: 767px) {
  .form-row {
    flex-direction: column;
  }
}

/* Desktop - Two-column layout */
@media (min-width: 768px) {
  .email-form {
    max-width: 1000px;
    padding: 3rem;
  }

  .form-row {
    display: flex;
    gap: 2rem;
  }

  .form-group {
    flex: 1;
  }

  input,
  textarea {
    font-size: 1.125rem;
    padding: 1rem;
  }

  button {
    font-size: 1.125rem;
    padding: 1rem;
  }
}
</style>
