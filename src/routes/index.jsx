import React, {
  useEffect, useRef, Suspense, lazy,
} from 'react'
import {
  BrowserRouter as Router, Route, Redirect, Switch,
  // useLocation
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import Page from '../components/Page'

const Home = lazy(() => import('../pages/Home'))
const Product = lazy(() => import('../pages/Product'))
const Cart = lazy(() => import('../pages/Cart'))

const Containers = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    comp: Home,
  },
  {
    name: 'Product',
    path: '/product/:id',
    comp: Product,
  },
  {
    name: 'Cart',
    path: '/cart',
    exact: true,
    comp: Cart,
  },
]

const useRouter = (callback) => {
  const history = createBrowserHistory()
  useEffect(() => {
    let currentUrl = `${history.location.pathname}${history.location.search}`
    const listen = history.listen((location) => {
      if (currentUrl !== `${location.pathname}${location.search}`) {
        callback()
      }
      currentUrl = `${location.pathname}${location.search}`
    })
    return () => {
      listen()
    }
  }, [callback, history])
}

const useRouterLocation = (callback) => {
  const history = createBrowserHistory()
  const savedCallback = useRef(() => {})
  useEffect(() => {
    savedCallback.current = callback
  })
  useEffect(() => {
    const currentCallback = () => {
      savedCallback.current()
    }
    const listen = history.listen(() => {
      currentCallback()
    })
    return () => {
      listen()
    }
  }, [history])
}

// eslint-disable-next-line react/prop-types
const RouterComp = ({ container, routeProps }) => <container.comp {...routeProps} />
// const RouterComp = ({ container, routeProps }) => {
//   const { pathname = '' } = useLocation()
//   if (container.name === 'Address' && isChainTypeError(pathname.substring(pathname.lastIndexOf('/') + 1))) {
//     return <SearchFail {...routeProps} address={pathname.substring(pathname.lastIndexOf('/') + 1)} />
//   }
//   return <container.comp {...routeProps} />
// }

export default function allRoutes() {
  // const dispatch = useDispatch()
  // const { components } = useAppState()
  // const { mobileMenuVisible } = components

  useRouter(() => {
    window.scrollTo(0, 0)
  })

  useRouterLocation(() => {
    // if (mobileMenuVisible) {
    //   dispatch({
    //     type: ComponentActions.UpdateHeaderMobileMenuVisible,
    //     payload: {
    //       mobileMenuVisible: false,
    //     },
    //   })
    // }
  })

  return (
    <Router basename="/">
      <Route
        render={(props) => (
          <Page>
            {/* <Alert /> */}
            {/* <Header /> */}
            {/* <Sheet /> */}
            <Suspense fallback={<span />}>
              {/* eslint-disable-next-line react/prop-types */}
              <Switch location={props.location}>
                {Containers.map((container) => (
                  <Route
                    {...container}
                    key={container.name}
                    render={(routeProps) => <RouterComp container={container} routeProps={routeProps} />}
                  />
                ))}
                <Redirect from="*" to="/404" />
              </Switch>
              {/* {!(isMobile() && mobileMenuVisible) && <Footer />} */}
            </Suspense>
          </Page>
        )}
      />
    </Router>
  )
}

// allRoutes.PropTypes = {
//   location:
// }
