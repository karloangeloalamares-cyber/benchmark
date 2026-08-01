import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.content}>
        <View style={styles.mark} />
        <Text style={styles.title}>Southern University Benchmark</Text>
        <Text style={styles.subtitle}>Mobile Content Publishing</Text>
        <Text style={styles.label}>Visual MVP</Text>
        <Pressable
          accessibilityRole="button"
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
          <Text style={styles.buttonText}>Enter Demo</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingVertical: 36,
  },
  mark: {
    width: 56,
    height: 6,
    marginBottom: 28,
    backgroundColor: '#C99700',
    borderRadius: 3,
  },
  title: {
    color: '#071D3A',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 38,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 18,
    color: '#071D3A',
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
  },
  label: {
    marginTop: 8,
    color: '#C99700',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0,
    textTransform: 'uppercase',
  },
  button: {
    minWidth: 156,
    marginTop: 36,
    paddingHorizontal: 28,
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: '#071D3A',
    borderBottomColor: '#C99700',
    borderBottomWidth: 4,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.86,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 22,
  },
});
