import React from 'react';
import spinner from '../../img/spinner.gif';

const Spinner = () => (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='gif of spinner on loading'/>
);

export default Spinner;
