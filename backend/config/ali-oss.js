const OSS = require('ali-oss')

const client = new OSS({
    region: 'oss-ap-southeast-3',
    accessKeyId: 'LTAI4GGdaervUwZ8YY7MUEm1',
    accessKeySecret: '96kuybAIAZxQ12dcYUVxi1fSfAVB5g',
    bucket: 'karsongarcade'
});

module.exports = {
    client
}