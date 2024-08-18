const{ createApp, ref }= Vue

const app= createApp({

    setup(){
        const message= ref("hola mundo x2");
        const author = ref("Jorge")

        const cambiofrase= ()=>{
            message.value = "hola soy Marisela";
            author.value = "x";
        }

        return {
            message,
            author,
            cambiofrase,
        }
    }
});
app.mount('#app')


 // const { createApp, ref } = Vue

 // createApp({
 //   setup() {
   //   const message = ref('Hello mundo :D!')
 //     return {
//        message
  //    }
    //}
  //}).mount('#app')
