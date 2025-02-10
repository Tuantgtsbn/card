import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import Loading from '@components/Loading/Loading';
import { routers } from '@/routers/routers';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <ScrollToTop />
        <Routes>
          {
            routers.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <route.layout title={route.title}>
                      <route.component />
                    </route.layout>
                  }
                >
                  {
                    route.children && route.children.map((child, index) => {
                      return (
                        <Route
                          key={index}
                          path={child.path}
                          element={
                            <child.layout title={child.title}>
                              <child.component title={child.title} />
                            </child.layout>
                          }
                        />
                      )
                    })
                  }
                </Route>
              )
            })
          }
        </Routes>
      </Suspense>
    </Router>
  )

}

export default App;
