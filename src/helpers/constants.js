const apiPath = {
    syncApk: '/apk/sync',
    addJob: '/sim-manager/add',
    removeWorkingQueue: '/sim-manager/remove_working_queue',
    removeHistoryQueue: '/sim-manager/remove_history_queue',
    swapUp: '/sim-manager/swap_up',
    swapDown: '/sim-manager/swap_down',
    getWorkingQueue: '/sim-manager/working_queue',
    getHistoryQueue: '/sim-manager/history_queue',
    subscribeLog: '/sim-manager/subscribe',
    getPathList: '/path/get_all_path_list',
    getPath: '/path/get_path',
    deletePath: '/path/delete',
    getScene: '/scene/get_scene_list',
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