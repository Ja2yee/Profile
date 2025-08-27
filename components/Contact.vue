<script>
const submit = () => {
  alert('Thanks! This is a demo form.');
};
</script>
<template>
  <section id="contact" class="py-16 ">
    <h2 class="text-2xl font-bold mb-6">Contact</h2>
    <div class="flex flex-col gap-6">
      <form class="space-y-3">
        <input class="w-full border rounded px-3 py-2" placeholder="Your Name" />
        <input class="w-full border rounded px-3 py-2" placeholder="Email" type="email" />
        <textarea class="w-full border rounded px-3 py-2" rows="4" placeholder="Message"></textarea>
        <button class="px-4 py-2 bg-black text-white rounded" @click="submit">Send</button>
      </form>
      <div class="flex gap-44 items-center justify-center pt-10 text-lg font-bold text-black">
        <p>Email: <a  href="mailto:wajahatullahwajii@gmail.com"><span class="text-gray-300 text-sm">wajahatullahwajii@gmail.com</span></a></p>
        <p>GitHub: <a  href="https://github.com/yourusername" target="_blank"><span class="text-gray-300 text-sm">github.com/yourusername</span></a></p>
        <p>LinkedIn: <a  href="https://www.linkedin.com/in/wajahatullah-sakhi-2952b2251/" target="_blank"><span class="text-gray-300 text-sm">https://www.linkedin.com/in/wajahatullah-sakhi-2952b2251/</span></a></p>
      </div>
    </div>
  </section>
</template>
