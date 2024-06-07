import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px 0;
    position: relative;
`;

export const BackIcon = styled.TouchableOpacity`
    border-radius: 12px;
    position: absolute;
    left: 0;
    margin-left: 24px;
    z-index: 2;
`;

export const Icon = styled.Image`
    width: 24px;
    height: 24px;
`;

export const Header = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_1};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
`;