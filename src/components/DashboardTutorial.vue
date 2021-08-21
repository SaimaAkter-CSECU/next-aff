<template>
    <div class="d-flex align-self-center h-100 justify-content-center mx-auto my-5">
        <iframe width="60%" height="365" src="https://www.youtube.com/embed/pjmbteKGSd4" style="border-radius:1rem;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: 'DashboardTutorial',
        mounted(){
            let user = localStorage.getItem('user-info');
            this.userName = JSON.parse(user).name;
            if(!user){
                this.$router.push({name: "Login"}); 
            }
        }
    }
</script>