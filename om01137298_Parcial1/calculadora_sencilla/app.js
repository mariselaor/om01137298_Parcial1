const { createApp, ref } = Vue;

        const app = createApp({
            setup() {
                const num1 = ref(0);
                const num2 = ref(0);
                const operation = ref('add');
                const result = ref(null);
                const error = ref(null);

                const calculate = () => {
                    error.value = null;
                    result.value = null;

                    try {
                        switch (operation.value) {
                            case 'add':
                                result.value = num1.value + num2.value;
                                break;
                            case 'subtract':
                                result.value = num1.value - num2.value;
                                break;
                            case 'multiply':
                                result.value = num1.value * num2.value;
                                break;
                            case 'divide':
                                if (num2.value === 0) {
                                    throw new Error('No se puede dividir por cero');
                                }
                                result.value = num1.value / num2.value;
                                break;
                            default:
                                throw new Error('Operación no válida');
                        }
                    } catch (e) {
                        error.value = e.message;
                    }
                };

                return { num1, num2, operation, result, error, calculate };
            }
        });

        app.mount('#app');