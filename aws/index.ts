import * as AWS from 'aws-sdk';
import { CognitoIdentity, AWSError } from 'aws-sdk';

console.log('#########################################################');
console.log('############ AWS FEDERATED AUTH #########################');
console.log('#########################################################');


const cognitoidentity = new AWS.CognitoIdentity({ apiVersion: 'latest', region: 'eu-west-1' });


cognitoidentity.createIdentityPool({
    AllowUnauthenticatedIdentities: true,
    IdentityPoolName: 'kaftanUserPool',
    DeveloperProviderName: 'ss.core.user.login'
}, (err: AWSError, data: any) => {
    console.log('NKA The cognitoidentity err is', err);
    console.log('NKA The cognitoidentity data is', url);
});


const myCredentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'eu-west-1:6cbf5697-181a-455b-ae71-4f6edb537310',
    // Logins: {
    //   'Custom':'ss.core.user.login'
    // }
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
};
// Expires: 10000
// ContentType: 'multipart/form-data',

const s3 = new AWS.S3({ apiVersion: 'latest' });
s3.config.credentials = myCredentials;

const url = s3.getSignedUrl('getObject', s3_params, function (err: any, url: any) {
    console.log('NKA The SignedUrl err is', err);
    console.log('NKA The SignedUrl is', url);
});