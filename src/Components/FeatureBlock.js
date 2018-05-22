import React from "react";
import { View } from "react-native";

import SpellLevel from './SpellLevel';
import * as modal from '../Actions/modals';






const FeatureBlock = (props) => {
  
  return <View key={"FeatureBlock"}> 
    {
      Object.values(props.features).map( feature => {
        if (feature.id !== "editing...") {
          return <SpellLevel key={feature.id} title={feature.title} uses={feature.uses}
              description={feature.description} 
              onLongPress={() => {props.editFeature({id: feature.id, title: feature.title, uses: feature.uses, description: feature.description}), props.showModal(modal.EDIT_FEATURE)}} />
        }          
      })
    }
  </View>
}

export default FeatureBlock;
