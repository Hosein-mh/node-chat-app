var expect = require('expect');
var { generateMessage } = require('./message');

describe('generate Message testing' , () => {
    it('should generate correct message object' , () => {
        var from = 'Hosein';
        var text = 'Test message';
        var message = generateMessage(from , text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toEqual(expect.objectContaining({from , text}))
    })
})