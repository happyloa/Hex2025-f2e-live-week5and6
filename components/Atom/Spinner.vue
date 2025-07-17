<template>
  <div class="flex items-center justify-center py-10">
    <span class="spinner | inline-block size-12 rounded-full"></span>
  </div>
</template>

<style scoped>
.spinner {
  border: 6px solid #d2d9f9;
  border-top: 6px solid #4a69e8;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
