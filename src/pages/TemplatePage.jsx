import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout2';
import styled from 'styled-components';

import temp_width_1 from '../assets/images/temp_width_1.png';
import temp_width_0 from '../assets/images/temp_width_0.png';
import temp_height_1 from '../assets/images/temp_height_1.png';
import temp_height_0 from '../assets/images/temp_height_0.png';

const PageWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #444;
  margin-bottom: 16px;
`;

const ToggleWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
`;

const ToggleButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${({ active }) => (active ? '#07b690' : '#e0e0e0')};
  color: ${({ active }) => (active ? 'white' : 'black')};
`;

const TemplateGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ isWidth }) =>
    isWidth ? '1fr' : 'repeat(2, 1fr)'};
  gap: 12px;
`;

const TemplateWrapper = styled.div`
  border: 2px solid ${({ selected }) => (selected ? '#07b690' : 'transparent')};
  border-radius: 6px;
  padding: 4px;
  transition: border 0.2s;
  cursor: pointer;
`;

const TemplateImage = styled.img`
  width: 100%;
  border-radius: 3px;
  object-fit: cover;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

function TemplatePage() {
  const navigate = useNavigate();
  const [orientation, setOrientation] = useState('width');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const widthTemplates = [temp_width_1, temp_width_0];
  const heightTemplates = [temp_height_1, temp_height_0];

  const displayedTemplates =
    orientation === 'width' ? widthTemplates : heightTemplates;

  const handleTemplateClick = (src) => {
    const cardId = Date.now().toString();
    setSelectedTemplate(src);
    localStorage.setItem('selectedTemplate', src);
    navigate(`/create1/${cardId}`);
  };

  return (
    <Layout>
      <PageWrapper>
        <Title>명함 템플릿 고르기</Title>
        <Description>가로/세로 방향 템플릿을 선택할 수 있어요.</Description>

        <ToggleWrapper>
          <ToggleButton
            active={orientation === 'width'}
            onClick={() => setOrientation('width')}>
            가로
          </ToggleButton>
          <ToggleButton
            active={orientation === 'height'}
            onClick={() => setOrientation('height')}>
            세로
          </ToggleButton>
        </ToggleWrapper>

        <TemplateGrid isWidth={orientation === 'width'}>
          {displayedTemplates.map((imgSrc, idx) => (
            <TemplateWrapper
              key={idx}
              selected={selectedTemplate === imgSrc}
              onClick={() => handleTemplateClick(imgSrc)}>
              <TemplateImage
                src={imgSrc}
                alt={`template-${orientation}-${idx}`}
              />
            </TemplateWrapper>
          ))}
        </TemplateGrid>
      </PageWrapper>
    </Layout>
  );
}

export default TemplatePage;
