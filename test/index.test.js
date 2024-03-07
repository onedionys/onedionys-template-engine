const assert = require('assert');
const TemplateEngine = require('../src/templateEngine');

describe('TemplateEngine', () => {
    it('should render template with given data', () => {
        const template = 'Hello {{ name }}!';
        const data = { name: 'World' };
        const engine = new TemplateEngine(template);
        const result = engine.render(data);
        assert.strictEqual(result, 'Hello World!');
    });

    it('should handle missing data gracefully', () => {
        const template = 'Hello {{ name }}!';
        const data = {};
        const engine = new TemplateEngine(template);
        const result = engine.render(data);
        assert.strictEqual(result, 'Hello !');
    });
});
