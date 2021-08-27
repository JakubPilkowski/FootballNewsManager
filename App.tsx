import { nanoid } from 'nanoid';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const table: string[] = ['smth', 'smth', 'smth'];
interface AppProps {
  text: unknown;
  function: () => void;
}
interface AppProps {
  smth: string;
}

class MyClass {
  private foo() {
    console.log('smth');
  }

  private bar() {
    console.log('smth');
  }
}

function smth(smth: unknown, smth2 = false) {
  console.log(smth);
  console.log(smth2);
}

export default function App({ text }: AppProps): React.ReactNode {
  const doSomeWeirdStuff = (obj: unknown = {}) => {
    // const value = [8,5] as const;
    const smth: string = 'foo';
    const table = [1, 2];

    const o = 'a';

    const obj2 = {
      a: 1,
      b: 2,
    };
    console.log(obj2.a);
    if (obj) {
      return `smth`;
    } else {
      return 'me';
    }
  };

  const anotherSmth = () => {
    const x = 5123000000000001;

    const type: 2 | 3 | 5 | 7 = 2;

    setTimeout(() => {
      alert('Hi');
    }, 100);

    const dutyFreePrice = 100,
      finalPrice = dutyFreePrice + dutyFreePrice * 0.25;
    return 2 * 3 + 2;
  };

  const smth = async () => Promise.resolve();

  const doSMth = async () => {
    const func = await smth();
  };
  const handleComponentChange = (text: unknown) => (
    <View>
      <Text>Text</Text>
    </View>
  );

  return (
    <>
      <View onLayout={handleComponentChange} style={styles.container}>
        {table.map((item) => (
          <Text key={nanoid()}>{item}</Text>
        ))}
        <Text>smth</Text>
      </View>
      <View />
    </>
  );
}

const white = '#fff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
