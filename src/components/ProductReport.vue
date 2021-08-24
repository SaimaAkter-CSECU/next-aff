<template>
    <div id="productReport">
        <v-container>
            <!-- Filters -->
            <v-row>
                <v-col
                    cols="12"
                    md="5"
                    sm="12"
                >
                    <v-row>
                        <v-col col="12" sm="12" md="6">
                            <v-select
                                v-model="productCat"
                                label="Product Category"
                                :items="categories"
                                item-value="id"
                                item-text="category"
                                @change="getCategory()"
                            ></v-select>
                        </v-col>
                        <v-col col="12" sm="12" md="6">
                            <v-select
                                v-model="product"
                                label="Product Category"
                                :items="products"
                                item-value="id"
                                item-text="name"
                                :disabled="!products.length"
                                @change="getProduct()"
                            ></v-select>
                        </v-col>
                        <!-- <v-col col="12" sm="12" md="6">
                            <v-select
                                v-model="variant"
                                label="Product Category"
                                :items="variants"
                                item-value="id"
                                item-text="category"
                                @change="getCategory()"
                            ></v-select>
                        </v-col> -->
                    </v-row>
                </v-col>
                <v-col
                    cols="12"
                    md="7"
                    sm="12"
                >
                    <!-- Dates -->
                    <v-row class="d-flex justify-content-end">
                        <v-col
                            col="12"
                            sm="12"
                            md="3"
                        >
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="dates"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="dates"
                                        label="Showing For"
                                        append-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="dates"
                                    range
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menu = false" 
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.menu.save(dates)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                        <v-col
                            col="12"
                            sm="12"
                            md="3"
                        >
                            <v-menu
                                ref="menuCompare"
                                v-model="menuCompare"
                                :close-on-content-click="false"
                                :return-value.sync="datesCompare"
                                transition="scale-transition"
                                offset-y
                                min-width="auto"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="datesCompare"
                                        label="Compare To"
                                        append-icon="mdi-calendar"
                                        readonly
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    v-model="datesCompare"
                                    range
                                    scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="menuCompare = false" 
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        text
                                        color="primary"
                                        @click="$refs.menuCompare.save(dates)"
                                    >
                                        OK
                                    </v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>

            <div v-if="!product" style="text-center fs-6" class="d-flex justify-content-center mt-5">
                select category > then product > then date-range
            </div>
            <div v-else>
                <!-- Amount -->
                <v-row class="m-0 mt-6">
                    <v-col
                        cols="12"
                        md="4"
                        sm="12"
                    >
                        <v-card class="card px-5 py-3">
                            <div class="d-flex align-items-center">
                                <v-avatar
                                    color="green lighten-5"
                                    large
                                    size="60"
                                >
                                    <v-icon size="40" class="text-sucess">mdi-currency-bdt</v-icon>
                                </v-avatar>
                                <div class="ps-4">
                                    <div class="fs-2 fw-bolder text-dark">{{total_transaction}} </div>
                                    <div class="fw-thin">Transactions Occured</div>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                        sm="12"
                    >
                        <v-card class="card px-5 py-3">
                            <div class="d-flex align-items-center">
                                <v-avatar
                                    color="yellow lighten-5"
                                    large
                                    size="60"
                                >
                                    <v-icon size="40" class="text-warning">mdi-currency-bdt</v-icon>
                                </v-avatar>
                                <div class="ps-4">
                                    <div class="fs-2 fw-bolder text-dark">{{total_sale}}/- </div>
                                    <div class="fw-thin">Total Sales</div>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col
                        cols="12"
                        md="4"
                        sm="12"
                    >
                        <v-card class="card px-5 py-3">
                            <div class="d-flex align-items-center">
                                <v-avatar
                                    color="cyan lighten-5"
                                    large
                                    size="60"
                                >
                                    <v-icon size="40" class="text-primary">mdi-currency-bdt</v-icon>
                                </v-avatar>
                                <div class="ps-4">
                                    <div class="fs-2 fw-bolder text-dark">{{total_earning}}/- </div>
                                    <div class="fw-thin">Total Earning</div>
                                </div>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
                
                <!-- Table -->
                <v-row class="m-0 mt-6">
                    <v-col
                        cols="12"
                        md="12"
                        sm="12"
                    >
                        <v-card class="card px-5 py-3">
                            <div class="d-flex align-items-center" v-if="!transactions.length">
                                <div class="mx-auto">
                                    <div class="fw-thin my-9">No transactions occured!</div>
                                </div>
                            </div>
                            <v-simple-table class="w-100" v-else>
                                <template v-slot:default>
                                    <thead
                                        color="grey lighten-4"
                                        rounded-pill
                                        class="rounded-pill bg-light"
                                    >
                                        <tr rounded-pill>
                                            <th class="text-center fs-6">
                                                Date
                                            </th>
                                            <th class="text-center fs-6">
                                                Transaction Id
                                            </th>
                                            <th class="text-center fs-6">
                                                Discount Code
                                            </th>
                                            <th class="text-center fs-6">
                                                Amount
                                            </th>
                                            <th class="text-center fs-6">
                                                Commission 
                                            </th>
                                            <th class="text-center fs-6">
                                                Earning 
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            v-for="item in transactions"
                                            :key="item.id"
                                            class="text-center"
                                            rounded-pill
                                        >
                                            <td>{{ item.date }}</td>
                                            <td>{{ item.transaction_id }}</td>
                                            <td>{{ item.discount_code }}</td>
                                            <td>{{ item.amount }}/-</td>
                                            <td>{{ item.commission }}%</td>
                                            <td>{{ item.earning }}/-</td>
                                        </tr>
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "ProductReport", 
        data: () => ({
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            menuCompare: false,
            dates: [], 
            datesCompare: [],

            productCat:'', 
            product: '',
            categories: [], 
            products: [],
            total_transaction: '', 
            total_sale: '0',
            total_earning: '0',
            productName: '',
            transactions: [],
        }), 
        methods: {
            async allProducts(){
                let result = await axios.get(`https://raw.githubusercontent.com/SaimaAkter-CSECU/next-aff-db/f3bf5db94a537a4c491834f2e7e0128273dad9ea/db.json/productTransactions`); 
                this.categories = result.data; 
            }, 
            async getCategory(){
                let productlist = await axios.get(`https://raw.githubusercontent.com/SaimaAkter-CSECU/next-aff-db/f3bf5db94a537a4c491834f2e7e0128273dad9ea/db.json/productTransactions?id=${this.productCat}`); 
                this.products = productlist.data[0].products;  
            }, 
            async getProduct(){
                let productDetails = this.products.find( x => x.id == this.product);
                this.productName = productDetails.name; 
                this.total_transaction = productDetails.transactions.length; 
                this.total_sale = productDetails.total_sale; 
                this.total_earning = productDetails.total_earning;
                this.transactions = productDetails.transactions; 
            }
        }, 
        mounted(){
            this.allProducts(); 
            let user = localStorage.getItem('user-info');
            this.userName = JSON.parse(user).name;
            if(!user){
                this.$router.push({name: "Login"}); 
            }
        }
    }
</script>
