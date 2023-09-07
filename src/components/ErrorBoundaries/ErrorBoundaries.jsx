/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

export class ErrorBoundaries extends Component {
   constructor() {
      super();
      this.state = {
         error: false,
      };
   }

   componentDidCatch(error, errorInfo) {
      this.setState({
         error: true,
      });

      console.log(`Uncaught error : ${error} ${errorInfo}`);
   }

   render() {
      if (this.state.error) {
         return <div>Предохранитель словил ошибку</div>;
      }
      return this.props.children;
   }
}
