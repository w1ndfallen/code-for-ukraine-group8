import { View,  Text, Image,  TouchableOpacity,StyleSheet, ScrollView, SafeAreaView,  Dimensions,} from 'react-native';
export default function Recipe() {
  const handlePress = () => {} ;
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Brownies</Text>

          <View style={styles.row}>
            <View style={styles.ingredients}>
              <Text style={styles.ingredientText}>Ingredients:</Text>
              <Text style={styles.ingredientText}>• 150 g dark chocolate</Text>
              <Text style={styles.ingredientText}>• 80 g flourr</Text>
              <Text style={styles.ingredientText}>• 150 ml milk</Text>
              <Text style={styles.ingredientText}>• 150 g sugar </Text>
              <Text style={styles.ingredientText}>• 180 g butter</Text>
              <Text style={styles.ingredientText}>• pinch of salt</Text>
            </View>
            <Image
              source={require('./assets/brownies.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.instructionsBlock}>
            <Text style={styles.recipeTitle}>Recipe:</Text>
            <Text style={styles.instructions}>
             1. Melt chocolate with butter..{"\n"}
             2. Whisk eggs and sugar until fluffy..{"\n"}
             3. Stir in chocolate mixture.{"\n"}
             4. Fold in flour and salt.{"\n"}
             5. Pour into pan and bake at 180°C (350°F) for 20–25 minutes.{"\n"} 

            </Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>TIMER</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFF2E1',
  },
  scroll: {
    alignItems: 'center',
    paddingBottom: 30,
  },
  container: {
    maxWidth: 390,
    width: '100%',
    padding: 24,
  },
  title: {
    fontSize: 37,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ingredients: {
    flex: 1,
  },
  ingredientText: {
    fontSize: 19,
    marginBottom: 4,
  },
  image: {
    width: 170,
    height: 170,
    marginLeft: 16,
    resizeMode: 'contain',
  },
  instructionsBlock: {
    backgroundColor: '#FEE9A1',
    borderRadius: 12,
    padding: 16,
    marginBottom: 30,
  },
  recipeTitle: {
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 8,
  },
  instructions: {
    fontSize: 19,
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#FEC84D',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
