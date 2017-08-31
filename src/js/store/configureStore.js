import prodConfigureStore from './configureStore.prod';
import devConfigureStore from './configureStore.dev';


if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfigureStore;
} else {
  module.exports = devConfigureStore;
}
