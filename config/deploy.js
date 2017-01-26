module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'ticketfly-css-doc',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
