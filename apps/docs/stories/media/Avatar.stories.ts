import type { Meta, StoryObj } from '@storybook/html';
import { AvatarProps, renderAvatar } from './Avatar.renderer';

const meta: Meta<AvatarProps> = {
  title: 'Media/Avatar',
  render: (props) => renderAvatar(props),
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge']
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'warning', 'success', 'default']
    },
  }
};

export default meta;

type Story = StoryObj<AvatarProps>;

export const TextDefault: Story = {
  args: {
    text: 'EO',
    color: 'default',
  }
};

export const TextPrimary: Story = {
  args: {
    text: 'EO',
    color: 'primary'
  }
};

export const TextSecondary: Story = {
  args: {
    text: 'EO',
    color: 'secondary'
  }
};

export const TextSuccess: Story = {
  args: {
    text: 'EO',
    color: 'success'
  }
};

export const TextWarning: Story = {
  args: {
    text: 'EO',
    color: 'warning'
  }
};

export const TextDanger: Story = {
  args: {
    text: 'EO',
    color: 'danger'
  }
};

export const ImageTag: Story = {
  args: {
    text: '',
    useImageTag: true,
    size: 'xlarge',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
}

export const ImageBackground: Story = {
  args: {
    text: '',
    useImageTag: false,
    size: 'xlarge',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
}

export const ImageSmall: Story = {
  args: {
    text: '',
    useImageTag: true,
    size: 'small',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
}

export const ImageMedium: Story = {
  args: {
    text: '',
    useImageTag: true,
    size: 'medium',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
}

export const ImageLarge: Story = {
  args: {
    text: '',
    useImageTag: true,
    size: 'large',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
}

export const ImageExtraLarge: Story = {
  args: {
    text: '',
    useImageTag: true,
    size: 'xlarge',
    imageUrl: 'https://images.pexels.com/photos/20080741/pexels-photo-20080741/free-photo-of-mulher-camera-maquina-modelo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  }
}

export const TextSmall: Story = {
  args: {
    text: 'LS',
    color: 'primary',
    size: 'small',
  }
};

export const TextMedium: Story = {
  args: {
    text: 'LS',
    color: 'primary',
    size: 'medium',
  }
};

export const TextLarge: Story = {
  args: {
    text: 'LS',
    color: 'primary',
    size: 'large',
  }
};

export const TextExtraLarge: Story = {
  args: {
    text: 'LS',
    color: 'primary',
    size: 'xlarge',
  }
};
