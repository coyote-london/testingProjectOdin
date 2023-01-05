import { capitalize } from './capitalize';

const capitalizeFirstLetter = require('./capitalize');

test('First letter capitalized', () => {
    expect(capitalize('word')).toBe('Word');
})