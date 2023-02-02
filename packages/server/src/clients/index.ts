import axios from "axios";

import { CONFIG } from "../config";

// Axios setup
axios.defaults.headers.common["X-API-KEY"] = CONFIG.api_keys.opensea;

export { axios };
