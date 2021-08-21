<template>
    <div id="transactionReport">
        <v-container>
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
                                @click="$refs.menu.save(dates), getDate()"
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
                                <div class="fs-2 fw-bolder text-dark">0/- </div>
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
                                <div class="fs-2 fw-bolder text-dark">0/- </div>
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
                                <div class="fs-2 fw-bolder text-dark">0/- </div>
                                <div class="fw-thin">Total Earning</div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>

            <v-row class="m-0 mt-6">
                <v-col
                    cols="12"
                    md="12"
                    sm="12"
                >
                    <v-card class="card px-5 py-3">
                        <div class="d-flex align-items-center">
                            <div class="mx-auto">
                                <div class="fw-thin my-9">No transactions occured!</div>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "TransactionReport", 
        data: () => ({
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            menu: false,
            menuCompare: false,
            dates: [], 
            datesCompare: [],
        }), 
        methods: {
            // async dateRangeText () {
            //     return this.dates.join(' ~ ')
            // },
        },
        mounted(){
            // this.dataRangeText(); 
        }
    }
</script>