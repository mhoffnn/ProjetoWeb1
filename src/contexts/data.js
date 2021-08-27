import React, { useState, createContext } from 'react';

export const DataContext = createContext();

let Data;

export function getData() {
  return Data;
}

export let setData;
export class DataModel {
  constructor(...args) {
    const properties = {
      user: {
        id: null,
        name: null,
        doc: null
      },
      students: [
        {
          id: null,
          name: null,
          email: null
        }
      ],
      parkingLots: [
        {
          id: null,
          description: null
        }
      ],
      cars: [
        {
          id: null,
          type: null,
          model: null,
          factory: null,
          color: null,
          plate: null
        }
      ],
      test: 'test',
      ...args[0],
    };
    Object.keys(properties).forEach((key) => {
      this[key] = properties[key];
    });
  }
}

export function DataProvider({ children }) {
  // Para garantir que utilize sempre a mesma instancia de Data
  const [data, setStateData] = useState(Data || new DataModel());

  setData = (args) => {
    const newState = { ...data, ...args };
    setStateData(newState);

    // TODO devido a forma como foi implementado no routes
    // toda vez que uma rota é renderizada é recriado o provider
    // por isso tem que atualizar a referência manualmente para que
    // quando rode o useState novamente utilize o objeto atualizado.
    // Verificar uma maneira para poder remover essa lógica e utilizar
    // apenas os valores do useState
    Data = newState;
  };

  Data = data;

  return (
    <DataContext.Provider value={[data, setData]}>
      {children}
    </DataContext.Provider>
  );
}
