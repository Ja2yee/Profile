
<template>
  <section id="home" class="min-h-[70vh] flex items-center pt-16">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="text-3xl md:text-5xl font-bold">Front-End Developer</h1>
        <p class="mt-4 text-gray-600">
          I build fast, responsive, and user‑friendly web apps using Nuxt.js, Vue.js, and Tailwind CSS.
        </p>
        <div class="mt-6 flex gap-3">
          <a href="#projects" class="px-4 py-2 rounded bg-black text-white">View Projects</a>
          <a href="mailto:wajahatullahwajii@gmail.com" class="px-4 py-2 rounded border">Contact</a>
        </div>
      </div>
      <div class="hidden md:block">
        <div class="aspect-square rounded-2xl border grid place-items-center">
          <!-- <span class="text-sm text-gray-500">Your Photo / Logo</span> -->
          <img src="/images/pic.jpg" alt="Your Name" class="object-cover rounded-2xl" />
        </div>
      </div>
    </div>
  </section>
</template>
