import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';

type UseAsyncStorage = [string, (value: string) => void];

export default function useAsyncStorage(key: string, initialValue: string): UseAsyncStorage {
  const [storedValue, setStoredValue] = useState(initialValue);
  useEffect(() => {
    AsyncStorage.getItem(key)
      .then((value) => {
        if (value === null) return initialValue;
        return value;
      })
      .then(setStoredValue);
  }, [key, initialValue]);

  const setValue = useCallback(
    async (value: string) => {
      await AsyncStorage.setItem(key, value);
      setStoredValue(value);
    },
    [key]
  );

  return [storedValue, setValue];
}
