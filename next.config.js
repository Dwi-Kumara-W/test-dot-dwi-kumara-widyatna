module.exports = {
  images: {
    domains: ['fakestoreapi.com'], // Add the external domain here
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true, // Use 'true' for permanent redirects, 'false' for temporary
      },
    ];
  },
};