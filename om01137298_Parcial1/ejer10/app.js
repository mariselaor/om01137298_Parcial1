const { createApp, defineComponent, reactive, watch } = Vue;

const WatcherExample = defineComponent({
  setup() {
    // Crear una variable llamada 'count'
    const state = reactive({
      count: 0,
      message: ''
    });

    // Watcher para observar cambios en 'count'
    watch(
      () => state.count,
      (newValue, oldValue) => {
        state.message = `El valor cambió de ${oldValue} a ${newValue}`;
      }
    );

    // Método para incrementar el valor de 'count'
    const incrementCount = () => {
      state.count++;
    };

    return {
      state,
      incrementCount
    };
  },
  template: `
    <div>
      <button @click="incrementCount">Incrementar</button>
      <p>Valor actual: {{ state.count }}</p>
      <p v-if="state.message">{{ state.message }}</p>
    </div>
  `
});

const app = createApp({
  components: {
    WatcherExample
  }
});

app.mount('#app');
