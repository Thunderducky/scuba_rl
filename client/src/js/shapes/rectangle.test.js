import Rectangle from './rectangle';
describe('Rectangle', () => {
    it('should be possible to create Rectangles', () => {
      const rect = Rectangle.make(0,1,5,7);
      expect(rect.x).toBe(0);
      expect(rect.y).toBe(1);
      expect(rect.width).toBe(5);
      expect(rect.height).toBe(7);
    });
});
