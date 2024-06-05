import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Toolbar = styled.View`
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

export const ContentContainer = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_7};
    border-radius: 20px;
    flex: 1;
    margin-top: 12px;
    padding-top: 40px;
`;

export const VerticalSpacer = styled.View`
    margin-top: 16px;
`;

export const HorizontalContainer = styled.View`
    flex-direction: row;
    margin: 0 16px;
`;