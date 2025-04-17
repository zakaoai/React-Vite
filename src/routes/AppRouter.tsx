import ContextLayout from "@/containers/Layout/ContextLayout"
import Layout from "@/containers/Layout/Layout"
import SiteMap from "@/routes/SiteMap"
import { lazy } from "react"
import { Navigate, Route } from "react-router"
import RootBoundary from "./RootBoundary"

const HomeActivity = lazy(async () => await import("@/containers/Activite/Home/HomeActivity"))

const AppRouter = () => (
  <Route element={<ContextLayout />} errorElement={<RootBoundary />}>
    <Route element={<Layout />}>
      <Route index path={SiteMap.ACCUEIL.path} element={<HomeActivity />} />
    </Route>
    <Route path="*" element={<Navigate replace to={SiteMap.ACCUEIL.path} />} />
  </Route>
)

export default AppRouter
