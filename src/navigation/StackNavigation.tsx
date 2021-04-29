import React, {FunctionComponent} from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import PokemonList from '../screen/pokemon-list';
import PokemonDetails from '../screen/pokemon-details';
import ButtonHeader from '../component/boutons/buttonHeader';


const MainStack = createStackNavigator()

type Props = {
navigation: any;

}

const MainNavigation : FunctionComponent<Props> = () =>{
  return(
    <MainStack.Navigator initialRouteName="List">
      <MainStack.Screen name="List" component={PokemonList} options={{headerTitle:'Pokemonapp', headerRight:(()=> <ButtonHeader  />)}} />
      <MainStack.Screen name="Details" component={PokemonDetails} />
  </MainStack.Navigator>
  )
}

export default MainNavigation