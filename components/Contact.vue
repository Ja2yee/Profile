
<template>
  <section id="contact" class="py-16 ">
    <h2 class="text-2xl font-bold mb-6">Contact</h2>
    <div class="flex flex-col gap-6">
      <form class="space-y-3" @submit.prevent="alert('Thanks! This is a demo form.')">
        <input class="w-full border rounded px-3 py-2" placeholder="Your Name" />
        <input class="w-full border rounded px-3 py-2" placeholder="Email" type="email" />
        <textarea class="w-full border rounded px-3 py-2" rows="4" placeholder="Message"></textarea>
        <button class="px-4 py-2 bg-black text-white rounded">Send</button>
      </form>
      <div class="flex gap-44 items-center justify-center pt-10 text-lg font-bold text-black">
        <p>Email: <a  href="mailto:wajahatullahwajii@gmail.com"><span class="text-gray-300 text-sm">wajahatullahwajii@gmail.com</span></a></p>
        <p>GitHub: <a  href="https://github.com/yourusername" target="_blank"><span class="text-gray-300 text-sm">github.com/yourusername</span></a></p>
        <p>LinkedIn: <a  href="https://linkedin.com/in/yourprofile" target="_blank"><span class="text-gray-300 text-sm">linkedin.com/in/yourprofile</span></a></p>
      </div>
    </div>
  </section>
</template>
