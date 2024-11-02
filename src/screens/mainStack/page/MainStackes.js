import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import TypeOfGame from "../../typeOfGame/page/TypeOfGame";
import Intro from "../../playWithFriend/page/Intro";
import QuestionPage from "../../questionPage/page/QuestionPage";
import Signin from "../../auth/signin/page/Signin";
import Signup from "../../auth/signup/Signup";
import EnterASentences from "../../enterASentences/page/EnterASentences";
import AnswerWord from "../../enterASentences/page/AnswerWord";
import EnterCode from "../../inviteFriend/EnterCode";
const Stack = createStackNavigator();
const MainStackes = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup">
      
       <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
     <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/> 
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/>  
    <Stack.Screen name="TypeOfGame" component={TypeOfGame} options={{ headerShown: false }} /> 
     <Stack.Screen name="EnterCode" component={EnterCode} options={{ headerShown: false }} />   

      <Stack.Screen name="QuestionPage" component={QuestionPage} options={{ headerShown: false }} />  
      <Stack.Screen name="EnterASentences" component={EnterASentences} options={{ headerShown: false }} /> 
      <Stack.Screen name="AnswerWord" component={AnswerWord} options={{ headerShown: false }} />   


<<<<<<< HEAD
     {/* <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false }}/> 
  <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }}/>
      <Stack.Screen name="TypeOfGame" component={TypeOfGame} options={{ headerShown: false }} /> 
=======
>>>>>>> 3af2a1e (,)



    </Stack.Navigator>
    </NavigationContainer>

  );
}
export default MainStackes;