const { createApp, ref } = Vue;

const app = createApp({
  setup() {
    const theme = ref('light');

    const toggleTheme = () => {
      theme.value = theme.value === 'light' ? 'dark' : 'light';
      document.body.className = theme.value;
    };

    return {
      theme,
      toggleTheme
    };
  }
});

app.mount('#app');