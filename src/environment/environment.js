import Production from './appsettings.production';
import Staging from './appsettings.staging';
import Development from './appsettings.development';

let environment = Development;

if (process.env.REACT_APP_ENV === 'production') {
  environment = Production;
} else if (process.env.REACT_APP_ENV === 'staging') {
  environment = Staging;
}

const Environment = environment;

export default Environment;
