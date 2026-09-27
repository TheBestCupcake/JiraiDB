const { GetObjectCommand, PutObjectCommand } = require("@aws-sdk/client-s3");
const jiraiS3Client = require("./r2");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

async function getUrl(key){
    const getUrl = await getSignedUrl(
        jiraiS3Client,
        new GetObjectCommand({ Bucket: process.env.R2_BUCKET_NAME, Key: key}),
        { expiresIn: 3600 },
    );

    const url = getUrl;
    return url;
}

async function putUrl(key, contentType){
    const putUrl = await getSignedUrl(
        jiraiS3Client,
        new PutObjectCommand({Bucket: process.env.R2_BUCKET_NAME, key: key, ContentType: contentType,}),
        { expiresIn: 3600 },
    );

    const url = putUrl;
    return url;
}

module.exports = {
    putUrl,
    getUrl,
}