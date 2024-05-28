import { SSM } from 'aws-sdk';

const ssm: SSM = new SSM();

async function getParameter(name): void {
    const params: {Name: string, WithDecryption: boolean} = {
        Name: name,
        WithDecryption: true
    }

    return new Promise((resolve, reject) => {
        ssm.getParameter(params, (err, data) => {
            if (err) 
                reject(err);
            else 
                resolve(data.Parameter.Value);
        })
    })
}