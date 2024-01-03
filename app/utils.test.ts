import { generateSignature } from './utils';

describe('generateSignature', () => {
  it('should generate the correct signature', () => {
    const imageId = 1;
    const filterSpec = 'width-100';
    const key = 'django-insecure-%k=!e+m+kldyh=q--$wv%-8t+wysae&nlt30=ut1=vby6zg$bs';

    const expectedSignature = '0hcFhZn62gHIxJp_Y_7TH9g2fFM=';
    // Replace 'expected_signature' with the actual expected signature

    const signature = generateSignature(imageId, filterSpec, key);

    expect(signature).toEqual(expectedSignature);
  });
});