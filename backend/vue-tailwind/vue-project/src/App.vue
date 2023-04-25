<template>
  <h1>{{msg}}</h1>
  <Hello :msg="msg"/>
  <Home/>
</template>

<script>
import Hello from './components/Hello.vue';
import Home from './components/Home.vue';

export default {
  name: 'VueProjectApp',
 
  components:{
    Hello,Home
  },
  data() {
    return {
      msg:'my nmae is dipin '
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

</style>