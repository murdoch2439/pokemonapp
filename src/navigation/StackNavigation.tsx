import React, {FunctionComponent} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from '../screen/pokemon-list';
import PokemonDetails from '../screen/pokemon-details';
import ButtonHeader from '../component/boutons/buttonHeader';
import PokemonEdit from '../screen/pokemon-edit';
import AboutScreen from '../screen/about';


const MainStack = createStackNavigator()

type Props = {
navigation: any;

}

const MainNavigation : FunctionComponent<Props> = ({navigation}) =>{
  
  return(
    <MainStack.Navigator initialRouteName="List">
      <MainStack.Screen name="List" component={PokemonList} options={{headerRight:(()=> <ButtonHeader />)}} />
      <MainStack.Screen name="Details" component={PokemonDetails} />
      <MainStack.Screen name="Add" component={PokemonEdit} />
      <MainStack.Screen name="About" component={AboutScreen}  />
  </MainStack.Navigator>
  )
}

export default MainNavigation