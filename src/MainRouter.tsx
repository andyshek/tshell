// import React, { ComponentType, lazy, Suspense } from 'react'
// import { MemoryRouter, BrowserRouter, Route, Switch } from 'react-router-dom'

// const isProd = process.env.NODE_ENV === 'production'
// function RenderRoute() {
//     return routers.map((n: RouterConfigItem) => {
//         return <Route key={n.path} path={n.path} component={n.component} exact={n.exact} />
//     })
// }

// const Router = () => {
//     if (isProd) {
//         return (
//             <MemoryRouter>
//                 <Switch>
//                     <Suspense fallback="">{RenderRoute()}</Suspense>
//                 </Switch>
//             </MemoryRouter>
//         )
//     }
//     return (
//         <BrowserRouter>
//             <Switch>
//                 <Suspense fallback="">{RenderRoute()}</Suspense>
//             </Switch>
//         </BrowserRouter>
//     )
// }

// export default Router

// export interface RouterConfigItem {
//     path: string
//     component: ComponentType<any>
//     exact: boolean
//     children?: Array<RouterConfigItem>
// }

// export type RouterConfig = Array<RouterConfigItem>

// const routers: RouterConfig = [
//     {
//         path: '/',
//         component: lazy(() => import('./views/Home')),
//         exact: true
//     }
// ]
