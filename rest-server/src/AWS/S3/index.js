const AWS = require('aws-sdk');
const _ = require('lodash');
const axios = require('axios');

const config = {
  region: 'us-west-1',
  accessKeyId: process.env.AWS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  sslEnabled: false
};

AWS.config.update(config);
const s3 = new AWS.S3();

s3.createBucket({ Bucket: process.env.AWS_S3_BUCKET });

const s3Handler = () => {
  return async (req, res) => {
    const urls = [];
    await s3.listObjects({ Bucket: 'planning-poker-hr' }, (err, { Contents }) => {
      if (err) {
        console.log('s3.getObject - error= ', err);
      } else {
        console.log('s3.getObject - successfully retrieved data ', Contents);
        _.each(Contents, ({ Key }) => {
          urls.push(`${process.env.AWS_S3_LINK}${Key}`)
        });
        res.status(200).send(urls);
      }
    });
  }
}

module.exports = s3Handler;
