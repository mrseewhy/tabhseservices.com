import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Spinner from './components/Spinner.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
