import { constants } from 'helpers';
import HomePage from 'pages/Home';
import EnergyMonitorPage from 'pages/EnergyMonitor';
import FlowMonitorPage from 'pages/FlowMonitor';
import TemperatureMonitorPage from 'pages/TemperatureMonitor';
import PressureMonitorPage from 'pages/PressureMonitor';
import NotificationPage from 'pages/Notifications';
import SettingPage from 'pages/Profile';
import LogInPage from 'pages/LogIn';
import RegisterPage from 'pages/Register';
import NotFoundPage from 'pages/NotFound';

const { router } = constants;

export default [
  { path: router.default, component: HomePage },
  { path: router.home, component: HomePage },
  { path: router.energyMonitor, component: EnergyMonitorPage },
  { path: router.loadMonitor, component: FlowMonitorPage },
  { path: router.temperatureMonitor, component: TemperatureMonitorPage },
  { path: router.pressureMonitor, component: PressureMonitorPage },
  { path: router.notification, component: NotificationPage },
  { path: router.settings, component: SettingPage },
  { path: router.logIn, component: LogInPage },
  { path: router.register, component: RegisterPage},
  { path: router.notFound, component: NotFoundPage } // should be put at the last of array
];