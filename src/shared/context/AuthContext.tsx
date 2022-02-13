import { createContext } from 'react';
import { STORAGE_KEY_CONSTANT } from '../utils/constants';

export default createContext({
  authenticated: !!localStorage.getItem(STORAGE_KEY_CONSTANT)?.length
})
