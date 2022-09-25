import { View, Text,Image, SafeAreaView, TextInput,Keyboard,KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { Checkbox } from 'react-native-paper';
import loginImages from '../assets/loginImages';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
    const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [checked, setChecked] = React.useState(false);

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      })
    }, [])

  return (
    <SafeAreaView className="h-full w-full bg-[#171719]">
      <View className="mt-28">
        {/*div de camara y ayuda*/}
        <View className="ml-12">
          <View className="flex-row  justify-between mr-16 items-center">
            <Image source={loginImages.videoCamera} className="h-16 w-16" tintColor="red"/>
            <Text className="font-bold text-md text-white">Ayuda</Text>
          </View>
        </View>

        <View className="items-center mt-10">
            <Text className="font-bold text-3xl text-white">Inicio de Sesión</Text>
        </View>

        <View className="items-center mt-10 px-6">
        <TextInput
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                className="w-full border border-[#082EB4]  p-2 rounded-xl "
                placeholder="Correo electrónico"
                color = "white"
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                // underlineColorAndroid="white"
                blurOnSubmit={false}
              />
        </View>

        <View className="items-center mt-10 px-6">
              <TextInput
                className="w-full border border-[#082EB4]  p-2 rounded-xl "
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Contraseña" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                color = "white"
                // ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
        </View>
        <View className="flex-row items-center ml-4 mt-10">
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                   setChecked(!checked);
                }}
                color={'green'}
                uncheckedColor='white'
                
             />
             <Text className="text-white">Recordarme</Text>
        </View>
       
  
          <View className="space-y-2">
              {/* //inicio de sesion normal firebase */}
              <TouchableOpacity 
            onPress={()=>navigation.navigate('Login')}
            className="items-center border-2 border-red-600 text-white font-bold mt-10 mr-10 ml-10 rounded-full">
                <Text className="text-lg text-white p-1">Iniciar Sesión</Text>
                
            </TouchableOpacity>

        <View className="items-center justify-center ">

        <Text className="text-xs text-white p-1 "> O continua con </Text>
        </View>

            {/* inocio de sesion con google api */}
            <TouchableOpacity 
            onPress={()=>navigation.navigate('Login')}
            className="flex-row items-center justify-center border-2 border-red-600 text-white font-bold  mr-10 ml-10 rounded-full">
              
                <Image className="w-5 h-5" source={loginImages.googleLogo}/>
                <Text className="text-lg text-white p-1 font-bold">Google</Text>
            
                
            </TouchableOpacity>
            <Text className="text-white text-center ">¿No tienes una cuenta?
            <Text 
            // onPress={}
             style={{fontWeight: "bold"}}>  Registrate aquí</Text>
            </Text>
          </View>
          


      
     
    
        
    </SafeAreaView>
  )
}

export default LoginScreen