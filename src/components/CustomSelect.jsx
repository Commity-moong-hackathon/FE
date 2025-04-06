import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 32px;
`;

const DropdownHeader = styled.div`
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 12px;
  background-color: #f9f9f9;
  font-size: 14px;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  padding: 8px 0;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 12px;
  background: white;
  list-style: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const DropdownItem = styled.li`
  padding: 10px 16px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

function CustomSelect({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownHeader onClick={() => setIsOpen((prev) => !prev)}>
        {value || '폰트를 선택해주세요.'}
      </DropdownHeader>
      {isOpen && (
        <DropdownList>
          {options.map((opt, idx) => (
            <DropdownItem
              key={idx}
              onClick={() => handleSelect(opt)}>
              {opt}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrapper>
  );
}

export default CustomSelect;
