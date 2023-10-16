<template>
    <div>
        <h1>
            ToDo
        </h1>
        <hr>
        <v-text-field label="Solo" solo></v-text-field>
        <v-btn class="ma-2" color="primary" dark>
            Accept
            <v-icon dark right>
                mdi-checkbox-marked-circle
            </v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: "TodosIndex",
}
</script>