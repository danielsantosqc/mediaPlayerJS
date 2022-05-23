class Field {
  errors: string[];
  input: HTMLInputElement;

  constructor(input: HTMLInputElement) {
    this.input = input;
    this.errors = [];

    let errorMessage = document.createElement('p');
    errorMessage.className = 'text-danger';
    this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling);

    this.input.addEventListener('input', () => {
      this.errors = [];
      this.validateMethod();
      errorMessage.innerText = this.errors[0] || '';
    });
  }

  //Este es un metodo vacio, que se podera extender y utilizar
  //como bien se prefiera, sin cambiar el funcionamiento de la
  validateMethod() {}
}

// el parametro(field) es el imput de html, que se decora
function RequiredFieldDecorator(field: Field): Field {
  let validate = field.validateMethod;
  
  field.validateMethod = function() {
    validate();
    let value = field.input.value;
    if (!value) {
      field.errors.push('Requerido');
    }
  };
  
  return field;
}

// el parametro(field) es el imput de html, que se decora
function EmailFieldDecorator(field: Field): Field {
  let validate = field.validateMethod;

  field.validateMethod = function() {
    validate();
    let value = field.input.value;

    if (value.indexOf('@') === -1) {
      field.errors.push('Debe ser un email');
    }
  };

  return field;
}

let field = new Field(document.querySelector('#email'));
// RequiredFieldDecorator(field);
field = RequiredFieldDecorator(field);
field = EmailFieldDecorator(field);
