const { createApp, ref } = Vue;

        const app = createApp({
            setup() {
                // pide el contenido a mostrar
                const inputVal = ref('');

                // Define la alerta
                const showAlert = () => {
                    alert('El mensaje es: ' + inputVal.value);
                };

                return {
                    inputVal,
                    showAlert
                };
            }
        });

        app.mount('#app');