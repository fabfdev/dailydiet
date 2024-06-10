import styled, { css } from "styled-components/native";

type Props = {
    isInDiet: boolean;
}

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Header = styled.Text<Props>`
    ${({ theme, isInDiet }) => css`
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `};
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `};
    margin-top: 8px;
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
`;

export const BoldSubTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Img = styled.Image`
    margin: 32px 0;
`;