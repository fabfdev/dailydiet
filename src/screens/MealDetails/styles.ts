import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    flex: 1;
`;

export const ContentContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    flex: 1;
    border-radius: 20px;
    padding: 32px 24px 0;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XLG}px;
        color: ${theme.COLORS.GRAY_1};
    `};
`;

export const Body = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `};
    margin: 4px 0 20px;
`;

export const DateTime = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `};
    margin-top: 4px;
    flex: 1;
`;

export const HorizontalSpacer = styled.View`
    min-height: 8px;
`;