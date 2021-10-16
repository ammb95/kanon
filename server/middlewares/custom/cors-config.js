import cors from 'cors';
import { ORIGIN, ORIGIN_S } from '../../services/environment';

const options = {
  origin: [ORIGIN, ORIGIN_S],
};

const corsConfig = cors(options);

export default corsConfig;
