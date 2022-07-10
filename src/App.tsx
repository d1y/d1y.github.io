import { GeistProvider, CssBaseline } from '@geist-ui/core'
import Home from './pages/Home'

export default () => (
  <GeistProvider>
    <CssBaseline />
    <Home />
  </GeistProvider>
)