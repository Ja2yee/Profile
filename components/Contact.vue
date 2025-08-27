
<template>
  <section id="contact" class="py-16">
    <h2 class="text-2xl font-bold mb-6">Contact</h2>
    <div class="grid md:grid-cols-2 gap-6">
      <form class="space-y-3" @submit.prevent="alert('Thanks! This is a demo form.')">
        <input class="w-full border rounded px-3 py-2" placeholder="Your Name" />
        <input class="w-full border rounded px-3 py-2" placeholder="Email" type="email" />
        <textarea class="w-full border rounded px-3 py-2" rows="4" placeholder="Message"></textarea>
        <button class="px-4 py-2 bg-black text-white rounded">Send</button>
      </form>
      <div class="text-sm text-gray-600">
        <p>Email: <a class="underline" href="mailto:wajahatullahwajii@gmail.com">wajahatullahwajii@gmail.com</a></p>
        <p>GitHub: <a class="underline" href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
        <p>LinkedIn: <a class="underline" href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a></p>
      </div>
    </div>
  </section>
</template>
