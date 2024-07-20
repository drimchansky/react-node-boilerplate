import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { MainLayout } from './layouts/MainLayout'
import { About } from './routes/about'
import { Root } from './routes/root'

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />} path="/">
        <Route element={<Root />} index />
        <Route element={<About />} path="about" />
      </Route>
    </Routes>
  </BrowserRouter>
)
