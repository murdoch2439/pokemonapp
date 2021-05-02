import { StyleSheet } from "react-native";

const formatType = (type: string) => {
  let color: string = getTypeColor(type);

  const style = StyleSheet.create({
     type:{
      fontSize:18,
      marginRight:5,
      padding: 5,
      borderRadius: 5,
      backgroundColor: color,
      color:'white'
    }
   })

   return style
    
}

export const getTypeColor = (type: string) =>{
  let color : string
   switch (type) {
        case 'Feu': 
          color = 'red'; 
          break; 
        case 'Eau': 
          color = 'blue'; 
          break; 
        case 'Plante': 
          color = 'green'; 
          break; 
        case 'Insecte': 
          color = 'brown'; 
          break; 
        case 'Normal': 
          color = 'grey'; 
          break; 
        case 'Vol': 
          color = 'blue'; 
          break; 
        case 'Poison': 
          color = 'purple'; 
          break; 
        case 'Fée': 
          color = 'pink'; 
          break; 
        case 'Psy': 
          color = 'purple'; 
          break; 
        case 'Electrik': 
          color = 'lime'; 
          break; 
        case 'Combat': 
          color = 'orange'; 
          break; 
        default: 
          color = 'grey'; 
          break; 
    }

    return color ;
}

export const TypesList = ["Feu", "Eau", "Plante", "Combat", "Electrik", "Psy", "Fée", "Poisson", "Vol", "Normal", "Insecte"];

export default formatType