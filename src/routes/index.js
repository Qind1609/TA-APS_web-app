import { constants } from 'helpers';
import LogInPage from 'pages/LogIn';
import EnergyMonitorPage from 'pages/EnergyMonitor';
import HomePage from 'pages/Home';
import FlowMonitorPage from 'pages/FlowMonitor';
import SettingPage from 'pages/Profile';
import NotificationPage from 'pages/Notifications';
import RegisterPage from 'pages/Register';
import NotFoundPage from 'pages/NotFound';

const { router } = constants;

export default [
  { path: router.default, component: HomePage },
  { path: router.home, component: HomePage },
  { path: router.logIn, component: LogInPage },
  { path: router.energyMonitor, component: EnergyMonitorPage },
  { path: router.loadMonitor, component: FlowMonitorPage },
  { path: router.settings, component: SettingPage },
  { path: router.notification, component: NotificationPage },
  { path: router.register, component: RegisterPage},
  { path: router.notFound, component: NotFoundPage } // should be put at the last of array
];