import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Form,FormItem,Button,Input,Checkbox } from 'element-ui';

Vue.config.productionTip = false;

Vue.component(Form.name,Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Checkbox.name, Checkbox);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
