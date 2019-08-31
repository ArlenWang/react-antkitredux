import Loadable from 'react-loadable';
import PageLoad from '../views/Loading/PageLoad';

const LoadableM = Loadable({
  loader: () => import('../App.js'),
  loading: PageLoad,
})
export default LoadableM;