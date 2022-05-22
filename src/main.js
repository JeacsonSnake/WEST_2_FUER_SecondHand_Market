import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'default-passive-events'
import {
    Form,
    FormItem,
    Button,
    Input,
    Checkbox,
    Row,
    Col,
    Card,
    Tag,
    Avatar,
    Image,
    Carousel,
    CarouselItem,
    Empty,
    Table,
    TableColumn,
    Dialog,
    Message,
    MessageBox,
    Select,
    Option,
} from 'element-ui';

Vue.config.productionTip = false;

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;

Vue.component(Form.name,Form);
Vue.component(FormItem.name, FormItem);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Checkbox.name, Checkbox);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
Vue.component(Card.name, Card);
Vue.component(Tag.name, Tag);
Vue.component(Avatar.name, Avatar);
Vue.component(Image.name, Image);
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
Vue.component(Empty.name, Empty);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Dialog.name, Dialog);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faKeyboard } from '@fortawesome/free-regular-svg-icons'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add icons to the library */
library.add(faUserSecret,faKeyboard)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
