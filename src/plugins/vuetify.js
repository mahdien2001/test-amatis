import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    rtl: true,

    theme: {
        themes: {
          light: {
            primary: '#00c49a',
            secondary: '#22577a',
            lighten1 : '#b6edd6' ,
            lighten2 : '#e5f9ff' ,
            accent: '#8c9eff',
            error: '#b71c1c',
          },
        },
      },

});
