import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    width: 100%;
    flex: 1;
    padding: 0px 24px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_7 };
`;

export const Header = styled.View`
    flex-direction: row;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const Profile = styled.Image`
    width: 40px;
    height: 40px;
`;

export const Snack = styled.Text`
    ${({ theme }) => css`
        color: ${ theme.COLORS.GRAY_1 };
        font-family: ${ theme.FONT_FAMILY.REGULAR };
        font-size: ${ theme.FONT_SIZE.MD }px ;
    `}  
    margin-top: 32px;
    margin-bottom: 8px;
`;