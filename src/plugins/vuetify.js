import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import en from 'vuetify/es5/locale/en';

export default Vue => Vue.use(Vuetify, {
  customProperties: true,
  iconfont: 'md',
  lang: {
    locales: { en },
    current: 'en',
  },
});
