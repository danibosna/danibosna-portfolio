const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
  ticker: {
    getTicker: `${API}/api/${VERSION}/ticker/price`,
  },
};

export default endPoints;
