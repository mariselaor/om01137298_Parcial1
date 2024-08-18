const{ createApp, ref }= Vue

const app= createApp({
  setup() {
    return {
      count: ref(0)
    }
  }
});
app.mount('#app')