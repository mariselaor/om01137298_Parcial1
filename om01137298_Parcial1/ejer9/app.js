const { createApp, defineComponent, reactive, computed } = Vue;

const FullNameDisplay = defineComponent({
  setup() {
    // Usamos reactive para crear un objeto reactivo que almacena el nombre y apellido
    const person = reactive({
      firstName: '',
      lastName: ''
    });

    // Computed property para calcular el nombre completo
    const fullName = computed(() => {
      return `${person.firstName} ${person.lastName}`;
    });

    // Métodos para actualizar el nombre y apellido
    const updateFirstName = (event) => {
      person.firstName = event.target.value;
    };

    const updateLastName = (event) => {
      person.lastName = event.target.value;
    };

    return {
      person,
      fullName,
      updateFirstName,
      updateLastName
    };
  },
  template: `
    <div>
      <input type="text" v-model="person.firstName" placeholder="Nombre" @input="updateFirstName" />
      <input type="text" v-model="person.lastName" placeholder="Apellido" @input="updateLastName" />
      <p v-if="fullName">Nombre completo: {{ fullName }}</p>
    </div>
  `
});

// Crear la aplicación
const app = createApp({
  components: {
    FullNameDisplay
  }
});

app.mount('#app');
