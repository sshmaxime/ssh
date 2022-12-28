import axios from "axios";

import { OPENSEA_API_KEY } from "../config";

// Axios setup
axios.defaults.headers.common["X-API-KEY"] = OPENSEA_API_KEY;

export { axios };
