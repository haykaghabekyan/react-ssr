/**
 * Returns env configs
 * @returns { { title: string, backend: { url: {string} }, frontend: { url: {string} } auth: { jwtToken: {string} } } }
 */
export const configs = () => {
    const env = process.env.NODE_ENV || 'dev';

    return require(`../../../vars/${ env }/vars.json`);
};
