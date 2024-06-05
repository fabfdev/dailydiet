import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";
import { Image } from 'react-native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    padding-top: 8px;
`;

export const BackIcon = styled.TouchableOpacity`
    border-radius: 20px;
    margin-left: 24px;
`;

export const StatisticsContainer = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7 };
    border-radius: 20px;
    margin-top: 32px;
    padding: 32px 24px;
    align-items: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XS}px;
        color: ${theme.COLORS.GRAY_1};
    `}
    margin-bottom: 24px;
`;

export const HorizontalContainer = styled.View`
    flex-direction: row;
`;

export const Icon = styled(Image).attrs(({ theme }) => ({
    tintColor: theme.COLORS.GREEN_DARK
}))`
    width: 24px;
    height: 24px;
`;