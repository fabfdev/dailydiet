import styled, { css } from "styled-components/native";
import { TouchableOpacity, Image } from "react-native";

export const Container = styled(TouchableOpacity)`
    flex: 1;
    min-height: 50px;
    max-height: 50px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_2};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${ theme.FONT_SIZE.SM }px;
        font-family: ${ theme.FONT_FAMILY.BOLD };
        color: ${ theme.COLORS.WHITE };
    `}
`;

export const Icon = styled(Image).attrs(({ theme }) => ({
    tintColor: theme.COLORS.WHITE
}))`
    width: 18px;
    height: 18px;
    margin-right: 12px;
`;