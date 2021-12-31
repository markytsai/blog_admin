import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.config.productionTip = false
// 使用vuetify
Vue.use(Vuetify)
Vue.use(VueQuillEditor, {
  placeholder: '请输入内容'
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
