<template>
    <Child :name="name" :obj="user" :fun="getName" />
</template>

<script>
import Child from './Child.vue';

export default {
    name: 'Hello',

    components: {
        Child
    },

    props: {
        msg: String,



    },



    data() {
        return {

            name: 'Bruce',

            user: {
                name: 'amal',
                email: "amal@gmail",
                age: 32
            },





        }
    },

    mounted() {

    },

    methods: {

        getName() {
            alert(`your name is ${this.name} successfully completed`)
        }

    }
}

</script>

<style scoped></style>