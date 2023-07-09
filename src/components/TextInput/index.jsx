import Input from '@mui/joy/Input';

const TextInput = ({name, value, handleInputChange}) => {
  return (
    <Input name={name} value={value} onChange={handleInputChange} autoComplete='off' />
  );
};

export default TextInput;