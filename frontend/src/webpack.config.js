const path = require('path');

module.exports = {
  // Other configurations...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
};
