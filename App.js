import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is my First React Native app!</Text>
      <View>
        <Text>Hello Welcome</Text>
        <Button 
          title='Click Me'
          onPress={()=> alert('Button Pressed')}
        />     
      </View>
      <View>
        <TouchableOpacity style={{
          backgroundColor:'red',
          padding:20,
          marginTop:5
        }}
                onPress={ ()=> alert('custome button is pressed')}
            >
                <Text style={styles.green}>hello</Text>
          
        </TouchableOpacity>
      </View>
      <View>
        <TextInput 
        style={{
          height:40,
          paddingLeft:5,
        }}
        placeholder='enter text here '
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  green:{
    color:'green'
  }
});
