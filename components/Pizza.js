
import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const Pizza = ()=>{
    const [text,setText] = useState('')

    return (
        <View style={{padding:10}}>
            <TextInput
                style={{height:40}}
                placeholder='Type the text here to translate !'
                onChange={newText => setText(newText)}
                defaultValue={text}
            />
            <Text style={{padding:10, fontSize:42}}>
                {text.split(' ').map(word => word && '🍕').join(' ')}
            </Text>
        </View>
    )
}

export default Pizza