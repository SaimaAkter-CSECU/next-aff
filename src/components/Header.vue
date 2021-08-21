<template>
    <div>
        <v-app-bar
            color="white"
        >
            <v-container class="d-flex align-items-center">
                <v-app-bar-nav-icon v-on:click.stop="drawer = !drawer" ></v-app-bar-nav-icon>

                <v-toolbar-title class="ps-5">
                    <v-icon>mdi-home-outline</v-icon> 
                    <v-icon>mdi-chevron-right</v-icon>
                    Dashboard
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
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            color="black"
        >
            <!-- <v-list-item>
                <v-list-item-avatar>
                    <v-img src="https://nextivesolution.com/wp-content/uploads/2020/10/logo-rec-outlined-white-1536x456.png"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title class="text-white">Nextive Solution</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list>
                <v-list-item>
                    <v-treeview>
                        <v-list-item>
                            <v-list-item-title class="text-white">
                                Tranasction
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title class="text-white">
                                Tranasction
                            </v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title class="text-white">
                                By Products
                            </v-list-item-title>
                        </v-list-item>
                    </v-treeview>
                </v-list-item> 
                <v-list-item>
                    <v-list-item-title class="text-white">
                        Products
                    </v-list-item-title>
                </v-list-item>  
                <v-list-item>
                    <v-list-item-title class="text-white">Products</v-list-item-title>
                </v-list-item>           
                <v-list-item>
                    <v-list-item-title class="text-white">My Payments</v-list-item-title>
                </v-list-item>            
                <v-list-item>
                    <v-list-item-title class="text-white">Change Password</v-list-item-title>
                </v-list-item> 
                <v-list-item>
                    <v-list-item-title class="text-white">How to use this dashboard</v-list-item-title>
                </v-list-item> 
                <v-list-item>
                    <v-list-item-title class="text-white">Key Account Manager</v-list-item-title>
                </v-list-item> 
            </v-list> -->
            <Sidebar />
        </v-navigation-drawer>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue'
    export default {
        name: 'Header',
        components: {
            Sidebar
        }, 
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