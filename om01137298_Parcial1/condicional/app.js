const { createApp, defineComponent, ref } = Vue;

const ConditionalMessage = defineComponent({
  props: {
    isHappy: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    return {
      isHappy: props.isHappy
    };
  },
  template: `
    <div>
      <p v-if="isHappy">¡Estoy feliz!</p>
      <p v-else>No estoy tan feliz...</p>
    </div>
  `
});

const app = createApp({
  components: {
    ConditionalMessage
  }
});

app.mount('#app');
