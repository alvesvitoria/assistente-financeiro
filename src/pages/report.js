import { StyleSheet } from "react-native";
import React  from "react";
import { FAB, Portal, Provider } from 'react-native-paper';

export default function Report({ navigation }) {

    const [state, setState] = React.useState({ open: false });
    const onStateChange = ({ open }) => setState({ open });
    const { open } = state;

    return (
        <Provider>
            <Portal>
                <FAB.Group
                    open={open}
                    icon={open ? 'close' : 'plus'}
                    actions={[
                        { icon: 'plus', onPress: () => console.log('Pressed add') },
                        {
                            icon: 'car',
                            label: 'Despesas',
                            onPress: () => navigation.navigate('ExpensesList'), 
                           
                        },
                        {
                            icon: 'book',
                            label: 'Receitas',
                            onPress: () => navigation.navigate('RevenueList'), 
                        },
                        {
                            icon: 'check',
                            label: 'Objetivos',
                            onPress: () => navigation.navigate('ObjectivesList'),
                            small: false,
                        },
                    ]}
                    onStateChange={onStateChange}
                    onPress={() => {
                        if (open) {
                        // do something if the speed dial is open
                        }
                    }}
                />
            </Portal>
        </Provider>
    );
};
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF'
    },
    boas_vindas:{
        position: 'relative',
        marginTop: 15,
        marginLeft: 14,
        color: '#FFFFFF',
        fontSize: 18        
    },
    cabecalho:{
        position: 'relative',
        width: '100%',
        height: '150%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        backgroundColor: '#03dac4',
        justifyContent: 'center',
    },
    topics: {
        width: 170, 
        height: 110, 
        backgroundColor: '#a0e6cd', 
        marginRight: 2, 
        marginLeft: 9, 
        marginTop: 26,
        fontSize: 16,
        position: 'relative',
        top: 3,
        paddingTop: 45,
        paddingLeft: 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 8,
    },
    titleProt: {
        position: 'absolute',
        fontSize: 16,
        left: 8,    
        top: 20,
    }
});
