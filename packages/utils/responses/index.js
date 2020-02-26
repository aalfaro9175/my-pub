function success({ message, status = 200, data }) {
    this.status = status
    this.send({
      statusCode: status,
      status: 'success',
      errors: null,
      data,
      message,
    })
  }
  
  function error({ message, status = 500, errors }) {
    this.send({
      statusCode: status,
      status: 'error',
      data: null,
      errors,
      message,
    })
  }
  
  module.exports = ({ express }) => {
    const app = express
  
    app.response.success = success
    app.response.error = error
  }
  