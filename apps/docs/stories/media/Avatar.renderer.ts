
export interface AvatarProps {
  text: string;
  size: 'small' | 'medium' | 'large' | 'xlarge';
  useImageTag?: boolean;
  imageUrl?: string;
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'default';
}

export const renderAvatar = ({
  text,
  useImageTag,
  imageUrl,
  size = 'small',
  color = 'default',
}: AvatarProps) => {
  const wrap = document.createElement('div');

  const avatar = document.createElement(
    useImageTag && imageUrl ? 'img' : 'div'
  );
  avatar.className = `avatar ${size} ${color}`;
  if (imageUrl) {
    if (useImageTag) {
      (avatar as any).src = imageUrl;
    } else {
      avatar.style.backgroundImage = `url(${imageUrl})`;
    }
  } else {
    avatar.innerHTML = text;
  }

  wrap.appendChild(avatar);
  return wrap;
}
