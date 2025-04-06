import styled from 'styled-components';
import Layout from '../components/Layout2';
import CustomSNSSelect from '../components/CustomSNSSelect';
import { useState, useEffect } from 'react';
import temp_height_0 from '../assets/images/temp_height_0.png';
import { useLocation } from 'react-router-dom';
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Text as KonvaText,
} from 'react-konva';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  padding: 16px;
`;

const FixedTop = styled.div`
  flex-shrink: 0;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const PreviewTitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 4px;
`;

const PreviewContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 24px;
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
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

const FormTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  font-size: 14px;
  outline: none;
  margin-bottom: 20px;
  color: #07b690;

  &::placeholder {
    color: #aaa;
  }
`;

function CreateCardPage3() {
  const location = useLocation();
  const { imageUrl, frontPosition, backPosition } = location.state || {};

  const [image, setImage] = useState(null);
  const [template] = useImage(temp_height_0);
  const [sns, setSns] = useState('');

  // 각 텍스트 항목들의 값과 위치, 스타일
  const [texts, setTexts] = useState([
    {
      key: 'name',
      value: '',
      x: 10,
      y: 20,
      color: 'black',
      fontFamily: 'Arial',
    },
    {
      key: 'university',
      value: '',
      x: 10,
      y: 50,
      color: 'black',
      fontFamily: 'Arial',
    },
    {
      key: 'affiliation1',
      value: '',
      x: 10,
      y: 80,
      color: 'black',
      fontFamily: 'Arial',
    },
    {
      key: 'affiliation2',
      value: '',
      x: 10,
      y: 110,
      color: 'black',
      fontFamily: 'Arial',
    },
    {
      key: 'contact',
      value: '',
      x: 10,
      y: 140,
      color: 'black',
      fontFamily: 'Arial',
    },
    {
      key: 'sns',
      value: '',
      x: 10,
      y: 170,
      color: 'black',
      fontFamily: 'Arial',
    },
  ]);

  useEffect(() => {
    if (imageUrl) {
      const img = new window.Image();
      img.src = imageUrl;
      img.crossOrigin = 'Anonymous';
      img.onload = () => setImage(img);
    }
  }, [imageUrl]);

  function useImage(src) {
    const [img, setImg] = useState(null);
    useEffect(() => {
      const image = new window.Image();
      image.src = src;
      image.onload = () => setImg(image);
    }, [src]);
    return [img];
  }

  const updateTextValue = (key, value) => {
    setTexts((prev) =>
      prev.map((text) => (text.key === key ? { ...text, value } : text)),
    );
  };

  const handleDrag = (key, e) => {
    const { x, y } = e.target.position();
    setTexts((prev) =>
      prev.map((text) => (text.key === key ? { ...text, x, y } : text)),
    );
  };

  return (
    <Layout>
      <PageWrapper>
        <FixedTop>
          <Title>명함 만들기</Title>
          <PreviewTitle>명함 미리보기</PreviewTitle>
          <PreviewContainer>
            <PreviewWrapper>
              <Stage
                width={160}
                height={260}>
                <Layer>
                  {template && (
                    <KonvaImage
                      image={template}
                      width={160}
                      height={260}
                    />
                  )}
                  {image && frontPosition && (
                    <KonvaImage
                      image={image}
                      x={frontPosition.x}
                      y={frontPosition.y}
                      width={80}
                      height={80}
                    />
                  )}
                  {texts.map((text) => (
                    <KonvaText
                      key={text.key}
                      text={text.value}
                      x={text.x}
                      y={text.y}
                      fontSize={18}
                      fill={text.color}
                      fontFamily={text.fontFamily}
                      draggable
                      onDragEnd={(e) => handleDrag(text.key, e)}
                    />
                  ))}
                </Layer>
              </Stage>
              <PreviewLabel>전면</PreviewLabel>
            </PreviewWrapper>

            <PreviewWrapper>
              <Stage
                width={160}
                height={260}>
                <Layer>
                  {template && (
                    <KonvaImage
                      image={template}
                      width={160}
                      height={260}
                    />
                  )}
                  {image && backPosition && (
                    <KonvaImage
                      image={image}
                      x={backPosition.x}
                      y={backPosition.y}
                      width={80}
                      height={80}
                    />
                  )}
                </Layer>
              </Stage>
              <PreviewLabel>후면</PreviewLabel>
            </PreviewWrapper>
          </PreviewContainer>

          <SectionTitle>항목입력</SectionTitle>
          <Divider />
        </FixedTop>

        <ScrollableArea>
          <FormTitle>정보를 직접 기입해주세요</FormTitle>
          <Input
            placeholder='이름'
            onChange={(e) => updateTextValue('name', e.target.value)}
          />
          <Input
            placeholder='학교'
            onChange={(e) => updateTextValue('university', e.target.value)}
          />
          <Input
            placeholder='소속1'
            onChange={(e) => updateTextValue('affiliation1', e.target.value)}
          />
          <Input
            placeholder='소속2'
            onChange={(e) => updateTextValue('affiliation2', e.target.value)}
          />
          <Input
            placeholder='연락처'
            onChange={(e) => updateTextValue('contact', e.target.value)}
          />
          <CustomSNSSelect
            options={['Instagram', 'LinkedIn', 'Twitter', '기타']}
            value={sns}
            onChange={(val) => {
              setSns(val);
              updateTextValue('sns', val);
            }}
            placeholder='SNS'
          />
        </ScrollableArea>
      </PageWrapper>
    </Layout>
  );
}

export default CreateCardPage3;
