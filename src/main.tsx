import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/App.tsx';
import { store } from './app/store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store.instance}>
        <App />
    </Provider>,
);
