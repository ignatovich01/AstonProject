import React from 'react';

import { Button } from 'react-bootstrap';

import style from './styles.module.css';

export function Header() {
   return (
      <div className={style.header}>
         <Button variant='outline-light'>123</Button>
         <div className={style.logo}>Logo</div>
         <div className={style.center_buttons}>
            buttwrhetjryktulyi;uo;uilkgfyjhgfonsы
         </div>
         <div className={style.auth__buttons}>вход рег вых</div>
      </div>
   );
}
