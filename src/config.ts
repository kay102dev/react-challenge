// TODO: move to env file for environment specific deployments i.e dev/sit/uat/prod
// mongoDB related api
const MONGODB_URL = `http://localhost:5001`;
export const API_URL = (path: string) => `${MONGODB_URL}/${path}`;

