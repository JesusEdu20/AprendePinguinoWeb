

import "./Button.css"
function Button({ palabra, onClick}) {
    const estados = {
      sinUsar: 'gray',
      colocado: 'green',
      mal: 'red'
    };
  
    return (
      <button
        className={`buttonL`}
        onClick={onClick}
      >
        {palabra}
      </button>
    );
  }
  export default Button;