import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type DietStatusStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: DietStatusStyleTypeProps;
}

export const Container = styled(SafeAreaView)<Props>`
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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
`;

export const HorizontalSpacer = styled.View`
    min-height: 8px;
`;

export const DietStatusContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: baseline;
    padding: 6px 16px;
    border-radius: 100px;
    margin-top: 16px;
`;

export const DietStatusIcon = styled.View<Props>`
    height: 8px;
    width: 8px;
    border-radius: 4px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const DietStatusTitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_1};
    `};
    margin-left: 6px;
`;