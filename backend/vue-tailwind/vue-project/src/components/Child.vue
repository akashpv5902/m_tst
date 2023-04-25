<template>
   <div>
    <h1>child component</h1>
    <h1>{{name}}</h1>
    <div>
        <h1>{{obj.name}}</h1>
        <h1>{{obj.age}}</h1>
        <h1>{{obj.email}}</h1>
    </div>

    <div>
      <button @click="fun">Click me</button>
    </div>
 
   </div> 
</template>

<script>

export default{

    components:{

    },

    props:{

        name:{type:String,required:true},
        obj:{type:Object,required:true},
        fun:{type:Function,required:true}

    },

    data(){
      return{

      }
    },
    methods:{

    },
    mounted(){

    }

}
</script>
