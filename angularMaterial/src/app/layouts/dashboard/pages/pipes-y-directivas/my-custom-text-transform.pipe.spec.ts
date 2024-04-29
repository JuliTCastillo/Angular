import { MyCustomTextTransformPipe } from './my-custom-text-transform.pipe';

describe('MyCustomTextTransformPipe', () => {
  it('create an instance', () => {
    const pipe = new MyCustomTextTransformPipe();
    expect(pipe).toBeTruthy();
  });
});
