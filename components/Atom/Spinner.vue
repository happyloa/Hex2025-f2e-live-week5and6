<template>
  <div class="flex items-center justify-center py-10">
    <span class="spinner"></span>
  </div>
</template>

<style scoped>
.spinner {
  width: 48px;
  height: 48px;
  border: 6px solid #e3e9ff;
  border-top: 6px solid #4a69e8;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
  display: inline-block;
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
