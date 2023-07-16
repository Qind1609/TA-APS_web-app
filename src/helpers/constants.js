const apiPath = {
    getAllData: '/get_all_data',
    getHomeData: '/home/get_home_data',
    getEnergyData: '/energy/get_energy_data',
    getFlowData: '/flow/get_flow_data',
    getPressureData: '/pressure/get_pressure_data',
    getTemperatureData: '/temperature/get_temperature_data',
    exportData: '/export',
    importData: '/import',
    notFound: '*'
  };

  export const router = {
    default: '/',
    home: '/home',
    logIn: '/log-in',
    energyMonitor: '/energy-monitor',
    loadMonitor: '/load-monitor',
    temperatureMonitor: '/temperature-monitor',
    pressureMonitor: '/pressure-monitor',
    settings: '/settings',
    notification: '/notifications',
    register: '/register',
    notFound: '*' // should be put at the last of array
  };

  export const constants = {
    router,
    api: {
      path: apiPath,
      statusCode: {
        SUCCESS: 200,
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        NOT_FOUND: 404,
        INTERNAL_SERVER_ERROR: 500,
        FORBIDDEN: 403
      }
    }
  };