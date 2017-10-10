import Vue from 'vue'
import Router from 'vue-router'

/*
const Hello = r => require.ensure([], () => r(require('src/components/Hello')), 'Hello')
const Program = r => require.ensure([], () => r(require('src/components/Program')), 'Program')
const Cart = r => require.ensure([], () => r(require('src/components/Cart')), 'Cart')
const About = r => require.ensure([], () => r(require('src/components/About')), 'About')
const Login = r => require.ensure([], () => r(require('src/components/Login')), 'Login')
import Financial from '@/components/Program/Financial'
import Telecom from '@/components/Program/Telecom'
import Government from '@/components/Program/Government'
import Business from '@/components/Program/Business'
import Made from '@/components/Program/Made'
import Medical from '@/components/Program/Medical'
import Messages from '@/components/Program/Messages'
import Transportation from '@/components/Program/Transportation'
import Palm from '@/components/Cart/Palm'
import FinCloud from '@/components/Cart/FinCloud'
import MedicalCloud from '@/components/Cart/MedicalCloud'
import EnterPriseCloud from '@/components/Cart/EnterpriseCloud'
import System from '@/components/Cart/System'
import Crm from '@/components/Cart/Crm'
import Image from '@/components/Cart/Image'
import His from '@/components/Cart/His'
import PrivateCloud from '@/components/Cart/PrivateCloud'
import MixtureCloud from '@/components/Cart/MixtureCloud'
import DisasterCloud from '@/components/Cart/DisasterCloud'
import BigData from '@/components/Cart/BigData'
import Consult from '@/components/Cart/Consult'
import Ops from '@/components/Cart/Ops'
import Pay from '@/components/Cart/Pay'
import Cpoe from '@/components/Cart/Cpoe'
import Cis from '@/components/Cart/Cis'
import Pharmacy from '@/components/Cart/Pharmacy'
import Erm from '@/components/Cart/Erm'
import Pm from '@/components/Cart/Pm'
import BigSystem from '@/components/Cart/BigSystem'
import ClientSystem from '@/components/Cart/ClientSystem'
import ECommerce from '@/components/Cart/ECommerce'
import ExchangeSystem from '@/components/Cart/ExchangeSystem'
import InventSystem from '@/components/Cart/InventSystem'
import UserSystem from '@/components/Cart/UserSystem'
import Join from '@/components/About/Join'
import News from '@/components/About/News'
import Newtouch from '@/components/About/Newtouch'
import Contact from '@/components/About/Contact'
import Support from '@/components/About/Support'
import NewDetail1 from '@/components/About/NewDetail1'
import NewDetail2 from '@/components/About/NewDetail2'
import NewDetail3 from '@/components/About/NewDetail3'
import NewDetail4 from '@/components/About/NewDetail4'
import NewDetail5 from '@/components/About/NewDetail5'
import NewDetail6 from '@/components/About/NewDetail6'
import NewDetail7 from '@/components/About/NewDetail7'
*/

const Login = r => require.ensure([], () => r(require('@/components/Login')), 'Login');
const Platform = r => require.ensure([], () => r(require('@/components/Platform')), 'Platform');
import Project from '@/components/platform/Project';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'accesslogin'
    }, {
      path: '/accesslogin',
      name: 'accesslogin',
      component: Login
    },
    {
      path: '/platform',
      component: Platform,
      children: [
        {
          path: '/',
          redirect: 'project'
        },
        {
          path: 'project',
          component: Project
        }
      ]
    },
    {path: '*', component: Login, name: 'notfound'}
  ]
})
