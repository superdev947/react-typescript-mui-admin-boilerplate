import { RouterProvider } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import AppTheme from '@/theme/AppTheme'
import router from './routes'

export default function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </AppTheme>
  )
}
