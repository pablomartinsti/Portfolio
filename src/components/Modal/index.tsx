import React, { type ReactNode } from 'react';
import {
  Overlay,
  Container,
  CloseButton,
  Image,
  Description,
  Buttons,
  Section,
  Video,
  ThumbnailWrapper,
  PlayOverlay,
} from './styles';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  video?: string;
  title: string;
  description: ReactNode;
  link: ReactNode;
};

const Modal = ({
  isOpen,
  onClose,
  image,
  video,
  title,
  description,
  link,
}: ModalProps) => {
  const [playVideo, setPlayVideo] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      setPlayVideo(false);
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <Container
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <Section>
          {video ? (
            playVideo ? (
              <Video src={video} controls autoPlay playsInline />
            ) : (
              <ThumbnailWrapper
                type="button"
                onClick={() => setPlayVideo(true)}
                aria-label={`Reproduzir video do projeto ${title}`}
              >
                <Image src={image} alt={title} />
                <PlayOverlay aria-hidden="true">Play</PlayOverlay>
              </ThumbnailWrapper>
            )
          ) : (
            <Image src={image} alt={title} />
          )}

          <Description>
            <CloseButton type="button" onClick={onClose} aria-label="Fechar">
              x
            </CloseButton>
            <h2 id="modal-title">{title}</h2>
            <div>{description}</div>
          </Description>
        </Section>

        <Buttons>{link}</Buttons>
      </Container>
    </Overlay>
  );
};

export default Modal;
