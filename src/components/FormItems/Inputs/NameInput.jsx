import React from 'react';

export function NameInput() {
   const [name, setName] = useState('');

   const [nameDirty, setNameDirty] = useState();

   const [nameError, setNameError] = useState();

   return <input type='text' />;
}
