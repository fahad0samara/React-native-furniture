import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux/es/exports';
import {useDispatch} from "react-redux";


import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch();
  

  return (
    
    <View style={styles.container}>


      <Text style={{fontFamily: "space-mono", fontSize: 30}}>Inter Black</Text>
      <Text style={{fontSize: 30}}>Platform Default</Text>
      <Text style={{fontSize: 30, fontFamily: "Caveat"}}>Platform Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Caveat",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
