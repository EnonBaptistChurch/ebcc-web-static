<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const status = ref<'idle' | 'success' | 'error'>('idle')
const isSubmitting = ref(false)
const honeypot = ref('') // anti-spam hidden input
const hasFormId = ref(false) // Flag to check if Formspree ID exists

// Check if Formspree ID is available
async function checkFormId() {
  const response = await fetch('/api/formspree/checkId')
  const result = await response.json()
  
  if (response.ok) {
    if(result.success) {
    hasFormId.value = true;
    }
    else {
      hasFormId.value = false;
    }
  } else {
    hasFormId.value = false
    console.error('Error:', result.error)
  }
}

// Submit the form
const handleSubmit = async () => {
  if (honeypot.value) {
    status.value = 'error'
    return
  }

  isSubmitting.value = true
  status.value = 'idle'

  try {
    const response = await $fetch('/api/formspree/submit', {
      method: 'POST',
      body: formData.value
    })

    if (typeof response === 'object' && response !== null && 'error' in response) {
      const message = (response as { error: string }).error
      throw new Error(message)
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

// Check Form ID when the component mounts
onMounted(() => {
  checkFormId();
})
</script>

<template>
   <form
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-field"
    data-netlify-recaptcha="true"
  >
    <input type="hidden" name="form-name" value="contact" />
    <p hidden>
      <label>Don’t fill this out: <input name="bot-field" /></label>
    </p>
    <p>
      <label>Your Name: <input type="text" name="name" required /></label>
    </p>
    <p>
      <label>Your Email: <input type="email" name="email" required /></label>
    </p>
    <p>
      <label>Message: <textarea name="message" required></textarea></label>
    </p>
    <div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
  

</template>
<style scoped>
.email-form {
  max-width: 1000px;  /* Wide enough to support 2-column layout */
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
  border-color: var(--nav-bar-bg-color);;
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
    flex-direction: column;  /* Stack the fields vertically on mobile */
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
