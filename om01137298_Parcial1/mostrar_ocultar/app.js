const { createApp, ref } = Vue;

    const app = createApp({
      setup() {
        const isVisible = ref(true);
        // metodo para ocultar y mostrar el mensaje 
        const ocultarOmostrarMensaje = () => {
          isVisible.value = !isVisible.value;
        };
        // boton de mostrar y ocultar 
        const buttonText = Vue.computed(() => {
          return isVisible.value ? 'Ocultar Mensaje' : 'Mostrar Mensaje';
        });

        return {
          isVisible,
          ocultarOmostrarMensaje,
          buttonText
        };
      }
    });

    app.mount('#app');