<script>
import axios from 'axios';
export default{ 
    data(){
        return {
            jsonData : null,
            error : null
            
            
        };
    },
    mounted(){
        this.getBookCountApi();
    },
    methods: {
        async getBookCountApi(){
            try{
                const response = await axios.get('https://countbooks-4sjx7ufuia-uc.a.run.app');
                this.jsonData = response.data;
                console.log(this.jsonData);
                this.error = null;
            }
            catch(error){
                console.error("Error getting all books : ",error);
                this.error = error;
                this.count = null;
            }
        }
    }

}
</script>
<template>
    <pre>{{ jsonData }}</pre>
</template>