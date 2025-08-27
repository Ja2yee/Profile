
<template>
  <div class="min-h-screen flex flex-col bg-gray-500" >
    <header class="sticky top-0 bg-white/80 backdrop-blur z-50 border-b">
      <nav class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" class="font-bold">Wajahatullah</a>
        <ul class="flex gap-4 text-sm">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main class="max-w-6xl mx-auto px-4">
      <slot />
    </main>
    <footer class="text-center text-xs text-gray-500 py-8">© {{ new Date().getFullYear() }} Wajahatullah</footer>
  </div>
</template>
