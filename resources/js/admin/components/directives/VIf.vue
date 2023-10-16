<template>
    <div>
        <h3>
            Directiva v-if
        </h3>
        <p v-if="this.flag">
            Estaba oculto
        </p>
        <p v-else>hay informacion oculta</p>
        <button @click="showInfo">
            Mostrar
        </button>
    </div>
</template>


<script>
export default {
    name: 'VIf',
    data: () => ({
        flag: false,
    }),
    methods: {
        showInfo() {
            this.flag = !this.flag;
            console.log(this.flag)
        }
    }
}



</script>