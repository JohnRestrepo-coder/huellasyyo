export default class Validator {
  constructor() {
    this.fields = [];
  }

  static rules = {
    required: (value) => value.trim() !== '',
    email: (value) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value),
    minLength: (min) => (value) => value.trim().length >= min,
    phone: (value) => /^\d{10}$/.test(value),
    onlyLetters: (value) => /^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/.test(value.trim()),
    number: (value) => !isNaN(value),
    password: (value) => /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/.test(value),
    match: (otherFieldId) => (value) => {
      const otherInput = document.getElementById(otherFieldId);
      return otherInput && value === otherInput.value;
    }
  };

  addField(id, rulesWithMessages) {
    if (!Array.isArray(rulesWithMessages)) {
      throw new Error(`'rulesWithMessages' debe ser un array`);
    }

    const processedRules = rulesWithMessages.map(({ rule, params, message }) => {
      if (!Validator.rules[rule]) {
        throw new Error(`Regla no encontrada: '${rule}'`);
      }

      if (!message) {
        throw new Error(`La regla '${rule}' debe tener un mensaje`);
      }

      const ruleFn = typeof Validator.rules[rule] === 'function' && params !== undefined
        ? Validator.rules[rule](params)
        : Validator.rules[rule];

      return { ruleFn, message };
    });

    this.fields.push({ id, rules: processedRules });

    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', () => this.validateField(id));
      input.addEventListener('change', () => this.validateField(id));
    }
  }

  validateField(id) {
    const field = this.fields.find(f => f.id === id);
    if (!field) return true;

    const input = document.getElementById(id);
    const feedback = input.nextElementSibling;
    let fieldValid = true;

    for (const { ruleFn, message } of field.rules) {
      if (!ruleFn(input.value)) {
        input.classList.add('is-invalid-field');
        input.classList.remove('is-valid-field');
        if (feedback) feedback.textContent = message;
        fieldValid = false;
        break;
      }
    }

    if (fieldValid) {
      input.classList.remove('is-invalid-field');
      input.classList.add('is-valid-field');
      if (feedback) feedback.textContent = '';
    }

    return fieldValid;
  }

  validateAll() {
    let isValid = true;
    for (const field of this.fields) {
      const valid = this.validateField(field.id);
      if (!valid) isValid = false;
    }
    return isValid;
  }

  clearValidation() {
    for (const field of this.fields) {
      const input = document.getElementById(field.id);
      input.classList.remove('is-valid-field', 'is-invalid-field');
      const feedback = input.nextElementSibling;
      if (feedback) feedback.textContent = '';
    }
  }
}
