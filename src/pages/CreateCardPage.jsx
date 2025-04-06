import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

const InputGroup = styled.div`
  display: grid;
  gap: 8px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const PreviewBox = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 24px;
  background-color: #f9f9f9;
`;

const CompleteButton = styled.button`
  padding: 10px 16px;
  background-color: #22c55e;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #16a34a;
  }
`;

function CreateCardPage() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    contact: '',
    email: '',
    sns: '',
    mbti: '',
    emoji: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleComplete = () => {
    // 저장 로직 추가 가능
    navigate(`/save/${cardId}`);
  };

  return (
    <Layout>
      <PageWrapper>
        <Title>명함 만들기</Title>

        <InputGroup>
          <Input
            name='name'
            placeholder='이름'
            onChange={handleChange}
          />
          <Input
            name='university'
            placeholder='대학교'
            onChange={handleChange}
          />
          <Input
            name='contact'
            placeholder='연락처'
            onChange={handleChange}
          />
          <Input
            name='email'
            placeholder='이메일'
            onChange={handleChange}
          />
          <Input
            name='sns'
            placeholder='SNS 링크'
            onChange={handleChange}
          />
          <Input
            name='mbti'
            placeholder='MBTI'
            onChange={handleChange}
          />
          <Input
            name='emoji'
            placeholder='이모지'
            onChange={handleChange}
          />
        </InputGroup>

        <PreviewBox>
          <p>
            <strong>미리보기</strong>
          </p>
          <p>{formData.name}</p>
          <p>{formData.university}</p>
          <p>{formData.contact}</p>
          <p>{formData.email}</p>
          <p>{formData.sns}</p>
          <p>{formData.mbti}</p>
          <p>{formData.emoji}</p>
        </PreviewBox>

        <CompleteButton onClick={handleComplete}>완성</CompleteButton>
      </PageWrapper>
    </Layout>
  );
}

export default CreateCardPage;
