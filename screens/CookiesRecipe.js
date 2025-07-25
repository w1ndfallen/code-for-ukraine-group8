import { View,  Text, Image,  TouchableOpacity,StyleSheet, ScrollView, SafeAreaView,  Dimensions,} from 'react-native';
export default function Recipe() {
  const handlePress = () => {} ;
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.title}>Shortbread Cookies</Text>

          <View style={styles.row}>
            <View style={styles.ingredients}>
              <Text style={styles.ingredientText}>Ingredients:</Text>
              <Text style={styles.ingredientText}>• 1 eggs</Text>
              <Text style={styles.ingredientText}>• 200 g flour</Text>
              <Text style={styles.ingredientText}>• 80 g sugar</Text>
              <Text style={styles.ingredientText}>• 100 g butter</Text>
              <Text style={styles.ingredientText}>• pinch of salt</Text>
            </View>
            <Image
              source={require('./assets/cookies.png')}
              style={styles.image}
            />
          </View>
          <View style={styles.instructionsBlock}>
            <Text style={styles.recipeTitle}>Recipe:</Text>
            <Text style={styles.instructions}>
             1. Cream butter with sugar until smooth.{"\n"}
             2. Add egg and mix well.{"\n"}
             3. Fold in flour and salt, knead dough.{"\n"}
             4. Roll out dough and cut cookies.{"\n"}
             5. Bake for 12–15 min at 180°C (350°F).{"\n"} 

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
