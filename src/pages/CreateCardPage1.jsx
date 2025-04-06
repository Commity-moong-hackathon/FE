import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout2';
import CustomSelect from '../components/CustomSelect';
import temp_height_0 from '../assets/images/temp_height_0.png';

const PageWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const PreviewContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
`;

const PreviewCard = styled.div`
  width: 160px;
  height: 260px;
  background-image: url(${(props) => props.$img});
  background-size: cover;
  background-position: center;
  border-radius: 3px;
`;

const PreviewTitle = styled.p`
  text-align: left;
  font-size: 14px;
  color: #666;
  margin-top: 4px;
`;

const PreviewLabel = styled.p`
  text-align: center;
  font-size: 12px;
  color: #666;
  margin-top: 4px;
`;

const SectionTitle = styled.p`
  color: #07b690;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto 14px;
`;

const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
`;

const ScrollableArea = styled.div`
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const NextButton = styled.button`
  padding: 10px 20px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 999px;
  color: gray;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const Label = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

function CreateCardPage1() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [font, setFont] = useState('');

  const fonts = [
    'Cafe24 ohsquare',
    'Cafe24 oneprettynight',
    'Kopub world 바탕체',
    'Pretendard',
    '어그로체',
  ];

  const handleNext = () => {
    navigate(`/create2/${cardId}`);
  };

  return (
    <Layout>
      <PageWrapper>
        <Title>명함 만들기</Title>

        <PreviewTitle>명함 미리보기</PreviewTitle>
        <PreviewContainer>
          <div>
            <PreviewCard $img={temp_height_0} />
            <PreviewLabel>전면</PreviewLabel>
          </div>
          <div>
            <PreviewCard $img={temp_height_0} />
            <PreviewLabel>후면</PreviewLabel>
          </div>
        </PreviewContainer>

        <SectionTitle>레이아웃</SectionTitle>
        <Divider />

        <ScrollableArea>
          <Label>명함 폰트</Label>
          <CustomSelect
            options={fonts}
            value={font}
            onChange={(val) => setFont(val)}
          />
          <ButtonWrapper>
            <NextButton onClick={handleNext}>다음</NextButton>
          </ButtonWrapper>
        </ScrollableArea>
      </PageWrapper>
    </Layout>
  );
}

export default CreateCardPage1;
