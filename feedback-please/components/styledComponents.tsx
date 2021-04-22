import styled from 'styled-components';
import {
  space,
  color,
  layout,
  overflow,
  flexbox,
  border,
  typography,
  position,
  shadow,
  background,
  ColorProps,
  LayoutProps,
  OverflowProps,
  TypographyProps,
  SpaceProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BackgroundProps,
  compose,
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  OverflowProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  BackgroundProps &
  TypographyProps;

export const Box = styled('div')<BoxProps>(
  compose(
    space,
    color,
    layout,
    flexbox,
    overflow,
    border,
    position,
    shadow,
    background,
    typography,
  ),
);

// @ts-ignore
export const Flexbox = styled(Box)<FlexboxProps>(flexbox);

type TextProps = SpaceProps &
  ColorProps &
  LayoutProps &
  BorderProps &
  TypographyProps;

export const Text = styled('span')<TextProps>(
  compose(space, color, layout, border, typography),
);

type HeadingProps = SpaceProps & ColorProps & TypographyProps;

export const H1 = styled('h1')<HeadingProps>(compose(space, color, typography));
export const H2 = styled('h2')<HeadingProps>(compose(space, color, typography));
export const H3 = styled('h3')<HeadingProps>(compose(space, color, typography));

type IconProps = SpaceProps &
  ColorProps &
  LayoutProps &
  TypographyProps &
  PositionProps;

export const Icon = styled('i')<IconProps>(
  compose(space, color, layout, typography, position),
);

type InputProps = SpaceProps &
  Omit<ColorProps, 'color'> &
  TypographyProps &
  BorderProps &
  LayoutProps;

const StyledInput = styled('input')<InputProps>(
  compose(space, color, typography, border, layout),
);

export const Input = StyledInput;
export const Select = styled('select')<InputProps & ColorProps>(
  compose(space, typography, border, layout),
);

type ButtonProps = SpaceProps &
  TypographyProps &
  BorderProps &
  LayoutProps &
  ColorProps;

export const Button = styled('button')<ButtonProps>(
  compose(space, typography, border, layout, color),
);

type AnchorProps = SpaceProps &
  TypographyProps &
  BorderProps &
  LayoutProps &
  ColorProps;

export const Anchor = styled('a')<AnchorProps>(
  compose(space, typography, border, layout, color),
);

type ImageProps = SpaceProps & LayoutProps;

export const Image = styled('img')<ImageProps>(compose(space, layout));

export const Flex = styled(Flexbox)`
  display: flex;
`;

export const Loader = styled('div')`
    border: 2px solid lightgrey;
    border-top: 2px solid blue;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    animation: spin 1s linear infinite;
    display: inline-block;

    @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
      
        100% {
          transform: rotate(360deg);
        }
      }
`;

export const StyledButton = styled('button')`
    font-size: 12px;
    font-weight: 500;
    padding: 4px 10px;
    border-radius: 5px;
    border: 1px solid transparent;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    color: white;
    margin: 0 5px;
    cursor: pointer;

    &:disabled,
    &.disabled {
    color: white;
    background-color: lightgray;
    opacity: 0.4;
    cursor: not-allowed;
    }

    &:hover,
    &:active {
    opacity: 0.7;
    outline: none;
    }

  background-color: #4280f2;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);

`;

export const FlexColumn = styled(Flex)`
  flex-direction: column;
`;


export const TextArea = styled('textarea')<any>(
  compose(space, color, layout, typography, border),
);
