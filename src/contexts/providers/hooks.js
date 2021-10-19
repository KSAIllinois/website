import { useState } from 'react';

export default function useInitApp() {
  const [init, setInit] = useState(false)
  // const { app } = useAppState()
  // const dispatch = useDispatch()
  // const history = useHistory()

  if (!init) {
    setInit(true)
    // initAxiosInterceptors(dispatch, history)
    // initNodeVersion(dispatch)
    // initAppLanguage(app, dispatch)
    // getMaintenanceInfo(dispatch)
    // flushCacheInfo()
  }
  // useWindowResize(dispatch)

  // useInterval(() => {
  //   getMaintenanceInfo(dispatch)
  // }, MAINTENANCE_ALERT_POLLING_TIME)
  //
  // useInterval(() => {
  //   flushCacheInfo()
  // }, FLUSH_CHART_CACHE_POLLING_TIME)
}
