import { useRouter } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const algorithms = [
  {
    id: 'caesar',
    title: 'Caesar Cipher',
    subtitle: 'Unicode character shifting',
    icon: '↔',
    number: '01',
  },
  {
    id: 'vigenere',
    title: 'Vigenere Cipher',
    subtitle: 'Polyalphabetic substitution',
    icon: '⌘',
    number: '02',
  },
  {
    id: 'rail-fence',
    title: 'Rail Fence Cipher',
    subtitle: 'Zigzag transposition',
    icon: '〰',
    number: '03',
  },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topRow}>
          <View style={styles.logoCircle}>
            <Text style={styles.logo}>⌘</Text>
          </View>
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>LEARNING LAB</Text>
          </View>
        </View>

        <View style={styles.header}>
          <Text style={styles.eyebrow}>WELCOME TO</Text>
          <Text style={styles.title}>Cipher Lab</Text>
          <Text style={styles.subtitle}>
            Encryption · Decryption · Cryptanalysis
          </Text>
          <Text style={styles.description}>
            Explore classical ciphers, encode your messages,
            and discover how encrypted text works.
          </Text>
        </View>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>
              Explore Ciphers
            </Text>
            <Text style={styles.sectionSubtitle}>
              Choose an algorithm to get started
            </Text>
          </View>
          <Text style={styles.count}>03</Text>
        </View>

        {algorithms.map((algorithm, index) => (
          <TouchableOpacity
            key={algorithm.id}
            style={styles.algorithmCard}
            activeOpacity={0.78}
            onPress={() =>
              router.push(`/cipher/${algorithm.id}` as any)
            }
          >
            <View
              style={[
                styles.algorithmIcon,
                index === 0 && styles.caesarIcon,
                index === 1 && styles.vigenereIcon,
                index === 2 && styles.railIcon,
              ]}
            >
              <Text style={styles.algorithmIconText}>
                {algorithm.icon}
              </Text>
            </View>

            <View style={styles.algorithmInfo}>
              <Text style={styles.algorithmNumber}>
                CIPHER {algorithm.number}
              </Text>
              <Text style={styles.algorithmTitle}>
                {algorithm.title}
              </Text>
              <Text style={styles.algorithmSubtitle}>
                {algorithm.subtitle}
              </Text>
              <Text style={styles.operations}>
                Encrypt  ·  Decrypt  ·  Break
              </Text>
            </View>

            <View style={styles.arrowCircle}>
              <Text style={styles.arrow}>›</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.infoCard}>
          <View style={styles.infoIcon}>
            <Text style={styles.infoIconText}>i</Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>About Cipher Lab</Text>
            <Text style={styles.infoText}>
              A hands-on educational project for learning
              encryption, decryption, and classical cryptanalysis.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F8FF',
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 30,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  logoCircle: {
    width: 52,
    height: 52,
    borderRadius: 17,
    backgroundColor: '#DCEAFF',
    borderWidth: 1,
    borderColor: '#C6DCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 29,
    fontWeight: '800',
    color: '#2563EB',
  },
  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E5F0FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 7,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#3B82F6',
  },
  statusText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#315B99',
    letterSpacing: 1,
  },
  header: {
    marginBottom: 32,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 2.5,
    color: '#5482C5',
    marginBottom: 7,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: '#142B4D',
    letterSpacing: -0.8,
  },
  subtitle: {
    fontSize: 12,
    color: '#3673CC',
    marginTop: 9,
    fontWeight: '600',
  },
  description: {
    fontSize: 14,
    lineHeight: 23,
    color: '#6D7F98',
    marginTop: 15,
    maxWidth: 320,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#193453',
  },
  sectionSubtitle: {
    fontSize: 12,
    color: '#8190A5',
    marginTop: 5,
  },
  count: {
    fontSize: 13,
    fontWeight: '800',
    color: '#477CC4',
    backgroundColor: '#E4EEFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  algorithmCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0EAF8',
    borderRadius: 20,
    padding: 15,
    marginBottom: 13,
    shadowColor: '#7395C5',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.07,
    shadowRadius: 12,
    elevation: 2,
  },
  algorithmIcon: {
    width: 55,
    height: 59,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },
  caesarIcon: {
    backgroundColor: '#E3EDFF',
  },
  vigenereIcon: {
    backgroundColor: '#E7E9FF',
  },
  railIcon: {
    backgroundColor: '#DDF5F2',
  },
  algorithmIconText: {
    fontSize: 27,
    fontWeight: '700',
    color: '#326CC0',
  },
  algorithmInfo: {
    flex: 1,
  },
  algorithmNumber: {
    fontSize: 9,
    fontWeight: '800',
    letterSpacing: 1.5,
    color: '#7D9AC1',
    marginBottom: 4,
  },
  algorithmTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1C3555',
  },
  algorithmSubtitle: {
    fontSize: 11,
    color: '#7C8CA2',
    marginTop: 4,
  },
  operations: {
    fontSize: 10,
    color: '#3975C9',
    fontWeight: '700',
    marginTop: 9,
  },
  arrowCircle: {
    width: 30,
    height: 30,
    borderRadius: 11,
    backgroundColor: '#F0F5FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },
  arrow: {
    fontSize: 24,
    color: '#3975C9',
    lineHeight: 27,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    padding: 17,
    borderRadius: 18,
    backgroundColor: '#EAF2FF',
    borderWidth: 1,
    borderColor: '#D8E7FF',
  },
  infoIcon: {
    width: 27,
    height: 27,
    borderRadius: 9,
    backgroundColor: '#D2E3FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 11,
  },
  infoIconText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#2C67B7',
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#25466F',
    marginBottom: 6,
  },
  infoText: {
    fontSize: 12,
    lineHeight: 20,
    color: '#637D9F',
  },
});