import React from 'react';

export function PasswordInput() {
   const [password, setPassword] = useState('');
   const [passwordDirty, setPasswordDirty] = useState();
   const [passwordError, setPasswordError] = useState();
   return <input type='text' />;
}
