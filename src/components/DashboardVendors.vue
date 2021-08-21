<template>
    <div id="dashboard-vendors">
        <v-toolbar
            color="light"
            light
        >
            <v-container class="d-flex align-items-center">
                <v-icon class="pe-5">mdi-home</v-icon>
                <v-toolbar-title>Dashboard</v-toolbar-title>

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
        <v-container class="mt-5">
            <v-row class="d-flex justify-content-center">
                <v-col
                    v-for="vendor in vendors"
                    :key="vendor.id"
                    class="col-sm-4 col-xs-12 justify-contents-center"
                >
                    <v-card class="card my-5 p-3" v-on:click="selectedVendor(vendor.id)">
                        <v-img
                            :src="vendor.url"
                            class="img-fluid mx-auto"
                        >
                        </v-img>
                        <v-card-text v-text="vendor.name" class="card-title px-0"></v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "DashboardVendors",
        data: () => ({
            vendors: [
                {
                    id: 1, 
                    name: 'Admission Assistant',
                    url: 'https://www.admissionassistant.com.bd/wp-content/uploads/2021/05/AA-Logo-Rec-blue-296x100.png', 
                }, 
                {
                    id: 2, 
                    name: 'Job Assistant',
                    url: 'https://www.admissionassistant.com.bd/wp-content/uploads/2021/05/AA-Logo-Rec-blue-296x100.png', 
                }, 
                {
                    id: 3, 
                    name: 'Biggyan Obhidhan',
                    url: 'https://www.admissionassistant.com.bd/wp-content/uploads/2021/05/AA-Logo-Rec-blue-296x100.png', 
                }, 
                {
                    id: 4, 
                    name: 'Biggyan Obhidhan 2',
                    url: 'https://www.admissionassistant.com.bd/wp-content/uploads/2021/05/AA-Logo-Rec-blue-296x100.png', 
                },
                {
                    id: 5, 
                    name: 'Biggyan Obhidhan 3',
                    url: 'https://www.admissionassistant.com.bd/wp-content/uploads/2021/05/AA-Logo-Rec-blue-296x100.png', 
                },
            ], 
            userName: '', 
        }),
        methods: {
            logOut(){
                localStorage.removeItem("user-info");
                this.$router.push({ name: "Login"}); 
            },
            selectedVendor(i){
                localStorage.setItem("vendorId", i );
                this.$router.push(
                    {
                        name: "dashboard-tutorial"
                    }
                ); 
            }
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