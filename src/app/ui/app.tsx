import { Provider } from 'react-redux'

import { store } from '@/app/model'
import { Router } from '@/common/routes'

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
