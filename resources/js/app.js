/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
  'mesha-clients',
  require('./components/MeshaClients.vue').default
);
Vue.component(
  'mesha-services',
  require('./components/MeshaServices.vue').default
);
Vue.component(
  'mesha-modal-header',
  require('./components/MeshaModalHeader.vue').default
);
Vue.component(
  'mesha-modal-footer',
  require('./components/MeshaModalFooter.vue').default
);
Vue.component(
  'mesha-form-errors',
  require('./components/MeshaFormErrors.vue').default
);
Vue.component(
  'mesha-pagination',
  require('./components/MeshaPagination.vue').default
);
Vue.component(
  'mesha-clients-form',
  require('./components/MeshaClientsForm.vue').default
);
Vue.component(
  'mesha-services-form',
  require('./components/MeshaServicesForm.vue').default
);
Vue.component(
  'mesha-profile-upload',
  require('./components/MeshaProfileUpload.vue').default
);
Vue.component(
  'mesha-contracts',
  require('./components/MeshaContracts.vue').default
);
Vue.component(
  'mesha-contracts-form',
  require('./components/MeshaContractsForm.vue').default
);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect);

const app = new Vue({
  el: '#app'
});
