class TemplateEngine {
    constructor(template) {
        this.template = template;
    }

    render(data) {
        // Implementasi logika untuk merender template dengan data yang diberikan
        // Contoh implementasi sederhana, bisa disesuaikan sesuai kebutuhan
        let renderedTemplate = this.template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
            return data[key.trim()] || '';
        });
        return renderedTemplate;
    }
}

module.exports = TemplateEngine;
