<template>
    <div style="width: 100%">
        <!-- <Header /> -->
        <div class="d-lg-block d-md-none">
            <div class="d-lg-flex">
                <HeaderLg />
                <Sidebar />
            </div>
            <div id="contents" style="calc(100% - 264px); min-height:100vh; margin-left: 264px">
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="d-lg-none d-md-block d-sm-block d-xs-block">
            <Header />
            <div id="contents" style="width:100%; min-height:100vh;">
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <!-- <div class="d-md-block d-sm-none">
            <div class="d-md-flex">
                <div id="headerlg" style="width:100%; margin-left:264px;">
                    <HeaderLg />
                </div>
                <div id="sidebar" class="sidebar bg-black text-white h-100 position-fixed" style="width: 264px; overflow-y: auto;" >
                    <Sidebar />
                </div>
            </div>
            <div id="contents" style="calc(100% - 264px); min-height:100vh; margin-left: 264px">
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div class="d-md-none d-sm-block">
            <div id="headerlg">
                <HeaderLg />
            </div>
            <div id="main-contents">
                <div class="container">
                    <router-view></router-view>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Sidebar from './Sidebar.vue'
    import HeaderLg from './HeaderLg.vue'

    export default {
        name: 'Dashboard',
        components:{
            Sidebar, HeaderLg, Header
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