<template>
    <div>
        <h1>
            directiva v-moidel
        </h1>
        <form>
            <input v-model="form.name" type="text" placeholder="ingresa tu nombre">
            <input v-model="form.email" type="email" placeholder="ingresa tu correo">
        </form>
        <h3>v-model content</h3>
        <p>{{ form.name }}</p>
        <p>{{ form.email }}</p>
    </div>
</template>

<script>
export default {
    name: "VModel",
    data: () => ({
        form: {
            name: 'valor por defecto',
            email: ''
        }
    }),
}
</script>