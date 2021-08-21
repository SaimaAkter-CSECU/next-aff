<template>
    <div id="headerlg" style="width:100%; margin-left:264px;">
        <v-toolbar
            color="white"
            class="w-100"
            fixed
        >
            <v-container class="d-flex align-items-center">
                <v-toolbar-title class="ps-5">
                    <v-icon>mdi-home-outline</v-icon> 
                    <v-icon>mdi-chevron-right</v-icon>
                    <span>Dashboard</span>
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-menu
                    open-on-hover
                    offset-y
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            text
                            v-bind="attrs"
                            v-on="on"
                        >
                            {{ userName }}
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item>
                            <v-list-item-title v-on:click="logOut" class="btn">Log Out</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-container>
        </v-toolbar>
    </div>
</template>

<script>
    export default {
        name: 'HeaderLg',
        data: () => ({
            drawer: false,
            userName: '',
        }),
        methods: {
            logOut(){
                localStorage.removeItem("user-info");
                this.$router.push({ name: "Login"}); 
            },
        }, 
        mounted(){
            let user = localStorage.getItem('user-info');
            this.userName = JSON.parse(user).name;
            if(!user){
                this.$router.push({name: "Login"}); 
            }
        }
    }
</script>