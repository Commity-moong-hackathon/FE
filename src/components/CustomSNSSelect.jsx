import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 999px;
  background: white;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  padding: 8px 4px;
  color: #07b690;

  &::placeholder {
    color: #aaa;
  }

  &:disabled {
    background: transparent;
    color: #ccc;
  }
`;

function CustomSNSSelect({ options, value, onChange, placeholder }) {
  const isOther = value === '기타';

  return (
    <Wrapper>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}>
        <option
          value=''
          disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option
            key={opt}
            value={opt}>
            {opt}
          </option>
        ))}
      </Select>
      <Input
        type='text'
        placeholder='입력'
        value={isOther ? '' : value}
        onChange={(e) => onChange(e.target.value)}
        disabled={!isOther}
      />
    </Wrapper>
  );
}

export default CustomSNSSelect;
