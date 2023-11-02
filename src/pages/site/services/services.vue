<template>
    <div>

        <v-card width="95%" class="mx-auto my-2 pa-2 d-flex align-center justify-start" v-for="s in services.services"
            :key="s._id" :to="{ path: '/service', query: { id: s._id } }">
            <img height="80px" width="80px" class="ml-5" :src="$hostname + s.image1" />
            <div class="d-flex flex-column align-start">
                <h4 class="pa-1">{{ s.name }}</h4>
                <v-card-subtitle class="caption ma-0 pa-0 mt-2">{{ s.user.username }}</v-card-subtitle>
            </div>
        </v-card>

    </div>
</template>

<script src="./services.js"></script>