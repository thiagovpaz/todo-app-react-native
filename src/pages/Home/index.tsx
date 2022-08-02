import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, FlatList, Keyboard } from 'react-native';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/Feather';

import {
  HomeContainer,
  HeaderContainer,
  Logo,
  TodoContainer,
  TodoButton,
  TodoCreateText,
  TodoDoneText,
  TodoHeader,
  LabelContainer,
  LabelText,
  Divider,
  TodoEmptyContainer,
  TodoEmptyImage,
  TodoEmptyTitle,
  TodoEmptySubTitle,
  TodoItem,
  TodoTitle,
  TodoDeleteButton,
  TodoToggleButton,
  TextInputStyled,
  AddButton,
  InputContainer,
} from './styles';

import logo from '~/assets/images/logo.png';
import cliboard from '~/assets/images/clipboard.png';

interface Todo {
  id: string;
  title: string;
  active: boolean;
}

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputIsFocused, setInputFocused] = useState(false);
  const [todo, setTodo] = useState('');

  const handleAddTodo = useCallback(() => {
    if (todo) {
      const newTodo = {
        id: uuid.v4() as string,
        title: todo,
        active: true,
      };

      setTodos(oldState => [...oldState, newTodo]);
      setTodo('');
      Keyboard.dismiss();
    }
  }, [todo]);

  const handleDeleteTodo = (id: string) => {
    setTodos(oldState => oldState.filter(t => t.id !== id));
  };

  const handleToggleTodo = useCallback((id: string) => {
    setTodos(oldState =>
      oldState.map(t => {
        if (t.id === id) {
          return { ...t, active: false };
        }
        return t;
      }),
    );
  }, []);

  useEffect(() => {
    setTodos([
      {
        id: '1',
        title:
          'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        active: true,
      },
      {
        id: '2',
        title:
          'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        active: false,
      },
      {
        id: '3',
        title:
          'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        active: true,
      },
      {
        id: '4',
        title:
          'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
        active: true,
      },
    ]);
  }, []);

  return (
    <HomeContainer>
      <StatusBar barStyle={'light-content'} />

      <HeaderContainer>
        <Logo source={logo} />
        <InputContainer>
          <TextInputStyled
            isFocused={inputIsFocused}
            placeholder="Adicione uma nova tarefa"
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            onChangeText={setTodo}
            value={todo}
          />
          <AddButton onPress={handleAddTodo}>
            <Icon name="plus-circle" color="#F2F2F2" size={22} />
          </AddButton>
        </InputContainer>
      </HeaderContainer>
      <TodoContainer>
        <TodoHeader>
          <TodoButton>
            <TodoCreateText>Criadas</TodoCreateText>
            <LabelContainer>
              <LabelText>{todos.length}</LabelText>
            </LabelContainer>
          </TodoButton>
          <TodoButton>
            <TodoDoneText>Concluídas</TodoDoneText>
            <LabelContainer>
              <LabelText>
                {todos.filter(t => t.active === false).length}
              </LabelText>
            </LabelContainer>
          </TodoButton>
        </TodoHeader>
        <Divider />

        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem>
              <TodoToggleButton onPress={() => handleToggleTodo(item.id)}>
                <Icon
                  name={item.active ? 'circle' : 'check-circle'}
                  size={20}
                  color="#4EA8DE"
                />
              </TodoToggleButton>
              <TodoTitle active={item.active}>{item.title}</TodoTitle>
              <TodoDeleteButton onPress={() => handleDeleteTodo(item.id)}>
                <Icon name="trash" size={20} color="#808080" />
              </TodoDeleteButton>
            </TodoItem>
          )}
          ListEmptyComponent={
            <TodoEmptyContainer>
              <TodoEmptyImage source={cliboard} resizeMode="cover" />
              <TodoEmptyTitle>
                Você ainda não tem tarefas cadastradas
              </TodoEmptyTitle>
              <TodoEmptySubTitle>
                Crie tarefas e organize seus itens a fazer
              </TodoEmptySubTitle>
            </TodoEmptyContainer>
          }
        />
      </TodoContainer>
    </HomeContainer>
  );
};

export { Home };
