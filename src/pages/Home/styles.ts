import styled, { css } from 'styled-components/native';

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  background: ${({ theme }) => theme.gray[700]};
`;

export const HeaderContainer = styled.View`
  flex: 0.25;
  background: ${({ theme }) => theme.gray[700]};
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 0 24px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 50px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: -26px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 6px;
  background: ${({ theme }) => theme.blue[700]};
  justify-content: center;
  align-items: center;
`;

interface TextInputStyledProps {
  isFocused: boolean;
}

export const TextInputStyled = styled.TextInput.attrs({
  placeholderTextColor: '#808080',
})<TextInputStyledProps>`
  background: ${({ theme }) => theme.gray[500]};
  border: 1px solid
    ${({ theme, isFocused }) =>
      isFocused ? theme.purple[700] : theme.gray[700]};
  border-radius: 6px;
  padding: 16px;
  flex: 1;
  margin-right: 4px;
  color: ${({ theme }) => theme.gray[100]};
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
`;

export const TodoContainer = styled.View`
  flex: 0.75;
  background: ${({ theme }) => theme.gray[600]};
  z-index: 1;
  padding-top: 56px;
`;

export const TodoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const TodoButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const TodoCreateText = styled.Text`
  font-family: Inter;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
  color: ${({ theme }) => theme.blue[500]};
`;

export const TodoDoneText = styled.Text`
  font-family: Inter;
  font-weight: 700;
  font-size: 16px;
  line-height: 17px;
  color: ${({ theme }) => theme.purple[500]};
`;

export const LabelContainer = styled.View`
  background: ${({ theme }) => theme.gray[400]};
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 19px;
  border-radius: 999px;
  margin-left: 8px;
`;

export const LabelText = styled.Text`
  color: ${({ theme }) => theme.gray[200]};
  font-family: Inter;
  font-weight: 700;
`;

export const Divider = styled.View`
  border: 1px solid ${({ theme }) => theme.gray[400]};
  margin: 20px 20px;
`;

export const TodoEmptyContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const TodoEmptyImage = styled.Image`
  width: 56px;
  height: 56px;
  margin: 25px 0;
`;

export const TodoEmptyTitle = styled.Text`
  font-family: Inter;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray[300]};
`;

export const TodoEmptySubTitle = styled.Text`
  font-family: Inter;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.gray[300]};
`;

export const TodoItem = styled.View`
  padding: 0 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.gray[400]};
  background: ${({ theme }) => theme.gray[500]};
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  margin: 0 16px 16px 20px;
`;

interface TodoTitleProps {
  active?: boolean;
}

export const TodoTitle = styled.Text<TodoTitleProps>`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.gray[100]};
  flex: 1;
  ${({ active, theme }) =>
    !active &&
    css`
      text-decoration: line-through;
      text-decoration-color: ${theme.gray[300]};
      color: ${theme.gray[300]};
    `}
`;

export const TodoToggleButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 20, left: 20, right: 20, bottom: 20 },
  activeOpacity: 1,
})`
  width: 32px;
`;

export const TodoDeleteButton = styled.TouchableOpacity.attrs({
  hitSlop: { top: 20, left: 20, right: 20, bottom: 20 },
})`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;
