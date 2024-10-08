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
        this.getAllBooksApi();
    },
    methods: {
        async getAllBooksApi(){
            try{
                const response = await axios.get('https://getallbooks-4sjx7ufuia-uc.a.run.app');
                this.jsonData = response.data;
                console.log(this.jsonData);
                this.error = null;
            }
            catch(error){
                console.error("Error fetching book count : ",error);
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