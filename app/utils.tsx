const crypto = require('crypto');
const base64url = require('base64url');

export function snakeToCamelCase(str: string) {
    return str.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}



export function generateSignature(imageId: number, filterSpec: string, key: string | undefined = undefined) {
    if (!key) {
        // Replace 'your_secret_key' with the actual secret key
        key = process.env.DJANGO_SECRET_KEY;
    }

    // Key must be a Buffer object
    if (typeof key === 'string') {
        key = Buffer.from(key, 'utf-8');
    }

    // Based on libthumbor HMAC generation
    // https://github.com/thumbor/libthumbor/blob/b19dc58cf84787e08c8e397ab322e86268bb4345/libthumbor/crypto.py#L50
    const url = `${imageId}/${filterSpec}/`;
    const hmac = crypto.createHmac('sha1', key);
    hmac.update(url);

    // Convert the digest to a base64 URL-safe string
    const signature = base64url.fromBase64(hmac.digest('base64'));

    return signature;
}



export function getImageURL(image: number, filter: string = 'original') {
    const signature = generateSignature(image, filter);
    return `${process.env.API_URL}/api/image_serve/${signature}/${image}/${filter}/`
}