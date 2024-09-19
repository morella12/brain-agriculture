const { cpf, cnpj } = require('cpf-cnpj-validator');

export const documentValidation = (documentId) => {
  if (cpf.isValid(documentId)) {
    return true;
  } else if (cnpj.isValid(documentId)) {
    return true;
  } else {
    return false;
  }
};