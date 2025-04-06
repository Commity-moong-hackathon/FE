import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import temp_height_0 from '../assets/images/temp_height_0.png';

import styled from 'styled-components';
import Layout from '../components/Layout2';
import { FiPlus } from 'react-icons/fi';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';

const PageWrapper = styled.div`
  padding: 16px;
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
  font-size: 20px;
  font-weight: bold;
  margin: 0 auto 14px;
`;

const UploadSection = styled.div`
  text-align: center;
  margin-bottom: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background: #e0e0e0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  margin-bottom: 24px;
`;

const ScrollableArea = styled.div`
  overflow-y: auto;
  flex-grow: 1;
`;

const UploadLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
`;

const UploadButton = styled.label`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 3px solid #07b690;
  border-radius: 8px;
  cursor: pointer;
  margin: 8px 0;
`;

const UploadInput = styled.input`
  display: none;
`;

const WarningText = styled.p`
  font-size: 12px;
  color: #999;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-top: 32px;
`;

const ActionButton = styled.button`
  flex: 1;
  padding: 8px 0;
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 15px;
  font-size: 16px;
  color: #333;
  cursor: pointer;
`;

function useImage(src) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    img.onload = () => setImage(img);
  }, [src]);
  return image;
}

function CreateCardPage2() {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [konvaImage, setKonvaImage] = useState(null);
  const [imagePositionFront, setImagePositionFront] = useState({ x: 0, y: 0 });
  const [imagePositionBack, setImagePositionBack] = useState({ x: 0, y: 0 });

  const templateImage = useImage(temp_height_0);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result;
      setUploadedImage(imageUrl);

      const img = new window.Image();
      img.crossOrigin = 'Anonymous';
      img.src = imageUrl;
      img.onload = () => {
        setKonvaImage(img);
      };
    };
    reader.readAsDataURL(file);
  };

  const handlePrev = () => navigate(-1);
  const handleNext = () => {
    navigate(`/create3/${cardId}`, {
      state: {
        imageUrl: uploadedImage,
        frontPosition: imagePositionFront,
        backPosition: imagePositionBack,
      },
    });
  };

  return (
    <Layout>
      <PageWrapper>
        <Title>명함 만들기</Title>

        <PreviewTitle>명함 미리보기</PreviewTitle>
        <PreviewContainer>
          <PreviewWrapper>
            <Stage
              width={160}
              height={260}>
              <Layer>
                {templateImage && (
                  <KonvaImage
                    image={templateImage}
                    width={160}
                    height={260}
                  />
                )}
                <KonvaImage
                  image={konvaImage}
                  width={80}
                  height={80}
                  x={imagePositionFront.x}
                  y={imagePositionFront.y}
                  draggable
                  onDragEnd={(e) => {
                    setImagePositionFront({
                      x: e.target.x(),
                      y: e.target.y(),
                    });
                  }}
                />
              </Layer>
            </Stage>
            <PreviewLabel>전면</PreviewLabel>
          </PreviewWrapper>
          <PreviewWrapper>
            <Stage
              width={160}
              height={260}>
              <Layer>
                {templateImage && (
                  <KonvaImage
                    image={templateImage}
                    width={160}
                    height={260}
                  />
                )}
                <KonvaImage
                  image={konvaImage}
                  width={80}
                  height={80}
                  x={imagePositionBack.x}
                  y={imagePositionBack.y}
                  draggable
                  onDragEnd={(e) => {
                    setImagePositionBack({
                      x: e.target.x(),
                      y: e.target.y(),
                    });
                  }}
                />
              </Layer>
            </Stage>

            <PreviewLabel>후면</PreviewLabel>
          </PreviewWrapper>
        </PreviewContainer>

        <SectionTitle>이미지</SectionTitle>
        <Divider />

        <ScrollableArea>
          <UploadSection>
            <UploadLabel>이미지 불러오기</UploadLabel>

            {!uploadedImage ? (
              <>
                <UploadButton>
                  <FiPlus
                    size={24}
                    color='#07b690'
                  />
                  <UploadInput
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                  />
                </UploadButton>
                <WarningText>
                  대용량 이미지 파일은 업로드 되지 않습니다.
                </WarningText>
              </>
            ) : (
              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                }}>
                <div>
                  <p style={{ fontSize: '12px', marginBottom: '4px' }}>원본</p>
                  <img
                    src={uploadedImage}
                    alt='Original'
                    style={{
                      width: '120px',
                      height: 'auto',
                      borderRadius: '8px',
                      border: '1px solid #ccc',
                    }}
                  />
                </div>
              </div>
            )}
          </UploadSection>

          <ButtonGroup>
            <ActionButton onClick={handlePrev}>이전</ActionButton>
            <ActionButton onClick={handleNext}>다음</ActionButton>
          </ButtonGroup>
        </ScrollableArea>
      </PageWrapper>
    </Layout>
  );
}

export default CreateCardPage2;
