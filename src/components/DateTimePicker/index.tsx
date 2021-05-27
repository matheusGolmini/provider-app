import React, { useEffect, useState } from 'react';
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
    const [disabled, setDisabled] = useState(true);
    const [opacityButton, setOpacityButton] = useState<number>(0.5);
    const [date, setDate] = useState<Date>(new Date());

    useEffect(() => {
        if(!!initDate) {
            setDisabled(false)
            setOpacityButton(1)
        }else {
            setDisabled(true)
            setOpacityButton(0.5)
        }
    }, [initDate])

    const onChange = async (event: any, selectedDate: any) => {
        if(!selectedDate) {
            setShow(false)
            setShow2(false)
            return 
        }
        if(show) { 
            setShow(!show)
            setInitDate(UtilsDate.formatDate(selectedDate)) 
            setDate(new Date(selectedDate))
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
                style={{...styles.buttonPicker, marginTop: 10, opacity: opacityButton}} 
                onPress={showMode2}
                disabled={disabled}
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
                value={UtilsDate.addDay(1, date)}
                mode={'date'}
                is24Hour={true}
                minimumDate={UtilsDate.addDay(1,date)}
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