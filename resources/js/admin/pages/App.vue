

<template>
    <div>
        <v-app>
            <TodosIndex/>
        </v-app>
    </div>
</template>


<script>
import TodosIndex from './todos/TodosIndex.vue';

export default {
    name: "App",
    components: { TodosIndex}
}

</script>



<style>
h1 {
    color: red;
}
</style>