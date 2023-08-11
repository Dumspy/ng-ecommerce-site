import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
    it('create an instance', () => {
        const pipe = new CapitalizePipe();
        expect(pipe).toBeTruthy();
    });

    it('should capitalize the first letter of a string', () => {
        const pipe = new CapitalizePipe();
        expect(pipe.transform('test')).toBe('Test');
    });
});
