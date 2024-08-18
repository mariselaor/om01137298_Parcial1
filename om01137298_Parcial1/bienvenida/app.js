const { createApp, defineComponent, reactive } = Vue;

const WelcomeMessage = defineComponent({
  setup() {
    const user = reactive({
      name: ''
    });

    const nombreNuevo = (event) => {
      user.name = event.target.value;
    };

    return {
      user,
      nombreNuevo
    };
  },
  template: `
    <div>
      <input type="text" v-model="user.name" placeholder="Escribe tu nombre" @input="nombreNuevo" />
      <p v-if="user.name">¡Bienvenido, {{ user.name }} :) !</p>
    </div>
  `
});

const app = createApp({
  components: {
    WelcomeMessage
  }
});

app.mount('#app');
