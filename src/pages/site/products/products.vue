<template>
    <div>
        <v-card width="95%" class="mx-auto my-2 pa-2 d-flex align-center justify-start" v-for="p in products.products"
            :key="p._id" :to="{ path: '/product', query: { id: p._id } }">
            <img height="80px" width="80px" class="ml-5" :src="$hostname + p.image1" />
            <div class="d-flex flex-column align-start">
                <h4 class="pa-1">{{ p.name }}</h4>
                <v-card-subtitle class="ma-0 pa-0">قیمت ({{ p.priceType }}) : {{ p.price }} تومان</v-card-subtitle>
                <v-card-subtitle class="caption ma-0 pa-0 mt-2">{{ p.user.username }}</v-card-subtitle>
            </div>
        </v-card>
    </div>
</template>

<script src="./products.js"></script>