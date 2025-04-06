import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../components/Layout';

const PageWrapper = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InfoText = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

const SaveButton = styled.button`
  padding: 10px 16px;
  background-color: #7c3aed;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #6d28d9;
  }
`;

function SaveCardPage() {
  const { cardId } = useParams();

  const handleSave = () => {
    alert(`명함 ${cardId} 저장 완료!`);
    // API 연동 로직은 추후 추가 가능
  };

  return (
    <Layout>
      <PageWrapper>
        <Title>명함 저장하기</Title>
        <InfoText>명함 ID: {cardId}</InfoText>
        <SaveButton onClick={handleSave}>내 지갑에 저장하기</SaveButton>
      </PageWrapper>
    </Layout>
  );
}

export default SaveCardPage;
