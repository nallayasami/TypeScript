import * as AWS from 'aws-sdk';
import { CognitoIdentity, AWSError } from 'aws-sdk';

console.log('#########################################################');
console.log('############ AWS FEDERATED AUTH #########################');
console.log('#########################################################');

const cognitoidentity = new AWS.CognitoIdentity({ apiVersion: 'latest', region: 'eu-west-1' });

const myCredentials = new AWS.CognitoIdentityCredentials({
    // Since we enabled unAuthenticated access this enough to start.
    IdentityPoolId: 'eu-west-1:6cbf5697-181a-455b-ae71-4f6edb537310',
    // Only this line is enough, this can be used for authentication - <<server side changes needed>>
    IdentityId: 'eu-west-1:0815cb77-7ac6-49ab-9443-cec4c0e67ad4', 
}, {
        region: 'eu-west-1'
    });

AWS.config.update({
    credentials: myCredentials,
    region: 'eu-west-1'
});

const s3_params = {
    Bucket: 'aws-kaftantv-ireland',
    Key: 'test/25052018050358_5b07f4a3deca111f4ee04f33_original_480.mp4',
    Expires: 86400
};

const s3 = new AWS.S3({ apiVersion: 'latest' });
s3.config.credentials = myCredentials;

const url = s3.getSignedUrl('getObject', s3_params, function (err: any, url: any) {
    if (err) {
        console.log('NKA The SignedUrl err is', err);
    } else {
        console.log('NKA The SignedUrl is', url);
    }
});