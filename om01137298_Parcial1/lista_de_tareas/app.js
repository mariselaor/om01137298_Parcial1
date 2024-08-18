const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const nuevaTarea = ref('');
        const tareas = ref([]);

        function agregarTarea() {
            if (nuevaTarea.value.trim() !== '') {
                tareas.value.push(nuevaTarea.value.trim());
                nuevaTarea.value = '';
            }
        }

        function removetarea(index) {
            tareas.value.splice(index, 1);
        }

        return { nuevaTarea, tareas, agregarTarea, removetarea };
    }
});

app.mount('#app');