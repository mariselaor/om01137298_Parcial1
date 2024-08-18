Vue.createApp({
  data() {
      return {
          mensaje: false
      };
  },
  methods: {
      cambiarMensaje() {
          this.mensaje = !this.mensaje;
      }
  },
  components: {
      'mensaje': {
          props: ['mensaje'],
          template: `
              <div>
                  <p v-if="mensaje">¡Bienvenido de nuevo!</p>
                  <p v-else>Por favor click para seguir probando.</p>
              </div>
          `
      }
  }
}).mount('#app');
//Realizado con option api

