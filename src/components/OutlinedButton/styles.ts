import styled, { css } from "styled-components/native";
import { TouchableOpacity, Image } from "react-native";

export const Container = styled(TouchableOpacity)`
    flex: 1;
    min-height: 50px;
    max-height: 50px;
    border-radius: 6px;
    border-width: 1px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    ${({ theme }) => css`
        background-color: ${ theme.COLORS.GRAY_7 };
        border-color: ${ theme.COLORS.GRAY_1 };
    `};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM }px;
        font-family: ${ theme.FONT_FAMILY.BOLD };
        color: ${ theme.COLORS.GRAY_1 };
    `}
`;

export const Icon = styled(Image).attrs(({ theme }) => ({
    tintColor: theme.COLORS.GRAY_1
}))`
    width: 18px;
    height: 18px;
    margin-right: 12px;
`;