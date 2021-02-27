import { useState } from 'react';

function useForm(valorInicial) {
  const [values, setValues] = useState(valorInicial);

  function setValueHandle(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValueHandle(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValues(valorInicial);
  }

  return {
    handleChange,
    values,
    clearForm,
  };
}

export default useForm;
