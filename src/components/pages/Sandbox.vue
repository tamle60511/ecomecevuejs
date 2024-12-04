<script setup lang="ts">
import Navbar from '$components/organisms/Navbar.vue'
import SideBar from '$components/organisms/Sidebar.vue'
</script>

<template>
  <div class="Dashboard flex items-start">
    <SideBar />
    <main class="Main w-full">
      <Navbar />
    </main>
  </div>
</template>
