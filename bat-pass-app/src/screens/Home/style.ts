import styled from 'styled-components/native'
import { StyleSheet } from 'react-native'

interface ButtonContainerCopyProps {
    opacity?: number;
    color?: string;
}

export const Container = styled.SafeAreaView`
flex: 1;
width: 100%;
align-items: center;
justify-content: center;
gap: 20px;
`

export const Banner = styled.View`
height: 458px;
width: 334px;
background-color: rgba(0,0,0,0.2);
border-radius: 12px;
align-items: center;
justify-content: center;
border-radius: 16px;
`

export const PasswordContainer = styled.View`
width: 334px;
gap: 10px;
border-radius: 12px;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const ButtonAreacontainer = styled.View`
align-items: center;
justify-content: center;
gap: 12px;
`

export const ButtonContainer = styled.TouchableHighlight`
width: 334px;
height: 56px;
border-radius: 12px;
justify-content: center;
align-items: center;
background-color:#252D41;
`

export const ButtonContainerCopy = styled.TouchableHighlight<ButtonContainerCopyProps>`
width: 334px;
height: 56px;
border-radius: 12px;
justify-content: center;
align-items: center;
opacity: ${(props) => props.opacity};
background-color: ${(props) => props.color ? props.color : '#252D41'};
`
export const Text = styled.Text`
font-size: 16px;
font-weight: 500;
color: #FFF;
`
export const PasswordText = styled.Text`
font-size: 24px;
font-weight: 500;
text-align: center;
color: #FFF;
`

export const styles = StyleSheet.create({
    bgImg:{
        ...StyleSheet.absoluteFillObject,
    },
    gradient : {
        flex:1,
        ...StyleSheet.absoluteFillObject,
    },
    blur: {
        flex:1,
    }
})

