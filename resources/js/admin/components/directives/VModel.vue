<template>
    <div>
        <h1>
            directiva v-moidel
        </h1>
        <form>
            <input v-model="form.name" type="text" placeholder="ingresa tu nombre">
            <input v-model="form.email" type="email" placeholder="ingresa tu correo">
            <button @click="submit(5)">
                Submit
            </button>
        </form>
        <h3>v-model content</h3>
        <p>{{ form.name }}</p>
        <p>{{ form.email }}</p>
        <h4>mi contador va en: {{counter}}</h4>
    </div>
</template>

<script>
export default {
    name: "VModel",
    data: () => ({
        form: {
            name: '',
            email: ''
        },
        counter: 0,
    }),

    methods: {
        submit(increment = 1){
            this.counter = this.counter + increment
            //console.log(`Mi nombre es : ${this.form.name}`)
        }
    }
}
</script>