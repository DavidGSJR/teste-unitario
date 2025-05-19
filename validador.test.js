const isValidEmail = require('../teste/validador');

describe('Validação de Email', () => {
    test('Retorna true para email valido', () => {
        expect(isValidEmail('user@example.com')).toBe(true);
    });

    test('Retorna false para email sem domínio', () => {
        expect(isValidEmail('user@')).toBe(false);
    });

    test('Retorna false para valor vazio', () => {
        expect(isValidEmail('')).toBe(false);
    });
});
