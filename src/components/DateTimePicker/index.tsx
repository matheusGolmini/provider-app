import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import UtilsDate from '../../utils/date';
import { Feather } from '@expo/vector-icons';

interface ComponentDateTimePicker {
    setInitDate:  React.Dispatch<React.SetStateAction<string | null>>;
    setEndDate:  React.Dispatch<React.SetStateAction<string | null>>;
    initDate: string | null;
    endDate: string | null;
}

const ComponentDateTimePicker = ({setInitDate, initDate, setEndDate, endDate}: ComponentDateTimePicker) => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        if(selectedDate) {
            setShow(false)
            setShow2(false)
        }
        if(show) { 
            setShow(!show)
            setInitDate(UtilsDate.formatDate(selectedDate)) 
        };
        if(show2) {
            setShow2(!show2)
            setEndDate(UtilsDate.formatDate(selectedDate));
        } 
    };

    const showMode = () => {
        setShow(true);
    };
    const showMode2 = () => {
        setShow2(true);
    };

    return (
        <>
            <TouchableOpacity
                style={{...styles.buttonPicker, marginTop: 10}}
                onPress={showMode}
            >
                <Text style={styles.buttonTextPicker}>{initDate ? initDate : 'Escolha a data de inicio'}</Text>
                <Feather 
                    name='calendar' 
                    size={20} 
                    style={{
                        color: 'white',
                        paddingHorizontal: 15
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{...styles.buttonPicker, marginTop: 10}} 
                onPress={showMode2}
            >
                <Text style={styles.buttonTextPicker}>{endDate ? endDate : 'Escolha a data do término'}</Text>
                <Feather 
                    name='calendar' 
                    size={20} 
                    style={{
                        color: 'white',
                        paddingHorizontal: 15
                    }}
                />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                testID="dateTimePicker"
                value={UtilsDate.addDay(2)}
                mode={'date'}
                is24Hour={true}
                minimumDate={UtilsDate.addDay(2)}
                display="default"
                onChange={onChange}
                />
            )}
            {show2 && (
                <DateTimePicker
                testID="dateTimePicker"
                value={UtilsDate.addDay(2)}
                mode={'date'}
                is24Hour={true}
                minimumDate={UtilsDate.addDay(2)}
                display="default"
                onChange={onChange}
                />
            )}
        </>
    )
}

const styles = StyleSheet.create({
    buttonPicker: {
        backgroundColor: '#37b7dc',
        marginTop: 10,
        width: 300,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
    },

    buttonTextPicker: {
        padding: 8,
        alignItems: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default ComponentDateTimePicker;