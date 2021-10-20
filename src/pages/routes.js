import React from 'react';
import { Entypo, Feather,  Ionicons  } from '@expo/vector-icons';

// Components
import Home from './home';
import Report from './report';
import Assistente from './assistent/assistente';
import Profile from './profile';
import Expense from './expenses/expense';
import ExpensesList from './expenses/expenseList';
import ExpenseDetail from './expenses/expenseDetail';
import Login from '../access/login';
import Signup from '../access/signup'; 
import ExpenseOpened from './expenses/expenseOpened';
import ExpenseClosed from './expenses/expenseClosed';
import Revenue from './revenue/revenue';
import RevenueList from './revenue/revenueList';
import RevenueDetail from './revenue/revenueDetail';
import Objective from './objectives/objective';
import ObjectivesDetail from './objectives/objectivesDetail';
import ObjectivesList from './objectives/objectivesList';
import ObjectivesFinish from './objectives/objectivesFinish';
import ObjectivesOpen from './objectives/objectivesOpen';

                                            
// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Tabs () {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                style: { //Adição do style
                    backgroundColor: '#F8F8FF', // Aplicando a cor ao background
                }
            }}
        >
            <Tab.Screen 
                name="Inicio" 
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size,color }) => (
                        <Entypo name='home' size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Relatórios" 
                component={Report} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="bar-graph" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Assistente" 
                component={Assistente} 
                options={{
                    headerShown: true, title: "Assistente",
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen 
                name="Perfil" 
                component={Profile} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Feather name="user" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false, title: " "}}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false, title: " "}}
            />
            <Stack.Screen
                name="Home"
                component={Tabs}
                options={{ headerShown: false, title: " "}}
            />
            <Stack.Screen
                name="Report"
                component={Tabs}
                options={{headerShown: false, title: " " }}
            />
            <Stack.Screen
                name="Expense"
                component={Expense}
                options={{headerShown: true, title: "Nova Despesa" }}
            />
            <Stack.Screen
                name="ExpensesList"
                component={ExpensesList}
                options={{headerShown: true, title: "Lista de Despesas" }}
            />
            <Stack.Screen
                name="ExpenseDetail"
                component={ExpenseDetail}
                options={{headerShown: true, title: " " }}
            />
            <Stack.Screen
                name="ExpenseOpened"
                component={ExpenseOpened}
                options={{headerShown: true, title: "Despesas Pagas" }}
            />
            <Stack.Screen
                name="ExpenseClosed"
                component={ExpenseClosed}
                options={{headerShown: true, title: "Despesas em aberto" }}
            />
            <Stack.Screen
                name="Revenue"
                component={Revenue}
                options={{headerShown: true, title: " " }}
            />
            <Stack.Screen
                name="RevenueList"
                component={RevenueList}
                options={{headerShown: true, title: "Receitas" }}
            />
            <Stack.Screen
                name="RevenueDetail"
                component={RevenueDetail}
                options={{headerShown: true, title: "Detalhes da receita" }}
            />
            <Stack.Screen
                name="Objective"
                component={Objective}
                options={{headerShown: true, title: " " }}
            />
            <Stack.Screen
                name="ObjectivesList"
                component={ObjectivesList}
                options={{headerShown: true, title: "Objetivos" }}
            />
            <Stack.Screen
                name="ObjectivesDetail"
                component={ObjectivesDetail}
                options={{headerShown: true, title: "Detalhes do objetivo" }}
            />
            <Stack.Screen
                name="ObjectivesFinish"
                component={ObjectivesFinish}
                options={{headerShown: true, title: "Objetivos concluídos" }}
            />
            <Stack.Screen
                name="ObjectivesOpen"
                component={ObjectivesOpen}
                options={{headerShown: true, title: "Objetivos em aberto" }}
            />
            <Stack.Screen
                name="Assistente"
                component={Tabs}
            />
            <Stack.Screen
                name="Perfil"
                component={Tabs}
                options={{ headerShown: false, title: " "}}
            />
        </Stack.Navigator>
        
    )
}