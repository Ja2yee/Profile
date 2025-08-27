
<script setup>
const projects = [
  { title: "Nuxt 3 E‑Commerce", desc: "Products listing, cart, Vuex, Tailwind.", },
  { title: "Vue 3 To‑Do", desc: "CRUD tasks with LocalStorage.", },
  { title: "Portfolio Website", desc: "This portfolio built with Nuxt 3.",  }
]
</script>

<template>
  <section id="projects" class="py-16">
    <h2 class="text-2xl font-bold mb-6">Projects</h2>
    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      <article v-for="p in projects" :key="p.title" class="border rounded-lg p-4">
        <h3 class="font-semibold">{{ p.title }}</h3>
        <p class="text-sm text-gray-300 mt-2">{{ p.desc }}</p>
      </article>
    </div>
  </section>
</template>
