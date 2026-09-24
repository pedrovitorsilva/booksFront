import './estilo.css';

function Input({ type = 'text', placeholder = 'Digite aqui', className = '', ...props }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`input-padrao ${className}`.trim()}
      {...props}
    />
  );
}

export default Input;
