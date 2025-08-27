
<template>
  <div class="min-h-screen flex flex-col bg-gray-500" >
    <header class="sticky top-0 bg-white/80 backdrop-blur z-50 border-b">
      <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" class="font-bold">Wajahatullah</a>
        <ul class="flex gap-4 text-sm">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="#skills">Skills</NuxtLink></li>
          <li><NuxtLink to="#projects">Projects</NuxtLink></li>
          <li><NuxtLink to="#experience">Experience</NuxtLink></li>
          <li><NuxtLink to="#contact">Contact</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="max-w-6xl mx-auto px-4">
      <slot />
    </main>
    <footer class="text-center text-xs text-white py-8">© {{ new Date().getFullYear() }} Wajahatullah</footer>
  </div>
</template>
