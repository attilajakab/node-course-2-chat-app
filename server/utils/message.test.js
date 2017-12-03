const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Attila';
        const text = "Some message";
        const message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Deb';
        const lat = 15;
        const lng = 19;
        const url = `https://www.google.com/maps?q=${lat},${lng}`;
        const message = generateLocationMessage(from, lat, lng);
        
        expect(message.url).toBe(url);
    });
});