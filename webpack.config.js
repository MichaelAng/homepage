switch (process.env.NODE_ENV) {
    case 'production':
        console.log('===Running production===');
        break;
    case 'integration':
        console.log('===Running integration===');
        break;
    case 'development':
    default:
        console.log('===Running development===');
        module.exports = require('./config/webpack.development.js');
}
