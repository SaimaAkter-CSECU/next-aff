<template>
    <div id="sidebar" class="sidebar bg-black text-white h-100 position-fixed" style="width: 264px; overflow-y: auto;" >
        <v-container> 
            <v-list class="bg-black">
                <v-list-item class="my-5">
                    <v-list-item-avatar class="m-0 aff-logo-div">
                        <v-img
                            :src="logo"
                            alt="Nextive Solution"
                            class="img-fluid aff-logo"
                        >
                        </v-img>
                    </v-list-item-avatar>
                </v-list-item>   
                <v-divider></v-divider>
                <v-list-item>
                    <v-list-item-title router>
                        <router-link class="text-white" to="/transaction-report">Transaction</router-link>
                    </v-list-item-title>
                </v-list-item>  
                <v-list-item>
                    <v-list-item-title router>
                        <router-link class="text-white" to="/product-report">By Products</router-link>
                    </v-list-item-title>
                </v-list-item>     
                <v-list-item>
                    <v-list-item-title router>
                        <router-link class="text-white" to="/products">Products</router-link>
                    </v-list-item-title>
                </v-list-item>      
                <v-list-item>
                    <v-list-item-title class="text-white" router>
                        <router-link class="text-white" to="/payments">My Payments</router-link>
                    </v-list-item-title>
                </v-list-item>            
                <v-list-item>
                    <v-list-item-title class="text-white" router>
                        <router-link class="text-white" to="/reset-password">Change Password</router-link>
                    </v-list-item-title>
                </v-list-item> 
                <v-list-item>
                    <v-list-item-title class="text-white" router >
                        <router-link class="text-white" to="/dashboard-tutorial">How to use this dashboard</router-link>
                    </v-list-item-title>
                </v-list-item> 
                <v-list-item>
                    <v-list-item-title class="text-white" router >
                        <router-link class="text-white" to="/key-manager">Key Account Manager</router-link>
                    </v-list-item-title>
                </v-list-item> 
            </v-list>
        </v-container>
    </div>
</template>

<script>
    import logo from '../assets/next-logo.png';
    export default {
        name: 'Sidebar',
        data: () => ({
            logo: logo
        }),

    }
</script>