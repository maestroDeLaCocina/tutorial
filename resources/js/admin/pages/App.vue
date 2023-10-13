

<template>
    
    <div>
        <h1>
            tutorial de vue
        </h1>
        <hr/>
        <VModel/>
    </div>
    
    
</template>


<script>
import VModel from '../components/directives/VModel.vue'
export default{
    name:"App",
    components: {VModel}
}

</script>



<style>
    h1{
        color: red;
    }
</style>