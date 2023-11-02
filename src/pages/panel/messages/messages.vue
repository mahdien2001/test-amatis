<template>
    <div>
        <center class="mt-5" v-if="messages.messages && messages.messages.length <= 0">پیامی جدیدی موجود نیست</center>
        <v-alert id="message_box" v-for="m in messages.messages" :key="m._id" outlined type="warning" text
            class="ma-4 py-5">
            <div>
                <h3>{{ m.postName }}</h3>
            </div>
            <div class="py-4" style="white-space: pre-line;">{{ m.message }}</div>

            <span class="caption">{{ new Date(m.createdAt).toLocaleDateString("fa-IR") }}</span>
        </v-alert>
    </div>
</template>
<script src="./messages"></script>

<style>
#message_box {
    position: relative;
}

#message_box span {
    position: absolute;
    top: 0px;
    left: 5px;
}

#message_box button {
    position: absolute;
    bottom: 5px;
    left: 5px;
    width: fit-content;
}
</style>