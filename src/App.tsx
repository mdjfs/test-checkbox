import { COUNTRIES, SELECT_ALL } from './utils/constants';

import './App.css';
import Checkbox from './components/Checkbox/Checkbox';
import { useMemo, useState } from 'react';
import { Item } from './types';

function App() {
  const [items, setItems] = useState<Item[]>(COUNTRIES.map(country => ({ value: country })))

  const setByValue = (value: string, checked: boolean) => {
    setItems(items.map(item => item.value === value ? ({ ...item, checked }) : item))
  }

  const setAll = (checked: boolean) => {
    setItems(items.map(item => ({ ...item, checked })))
  }

  const allChecked = useMemo(() => !items.find(item => !item.checked), [items])

  return (
    <div className="checkbox-container">
      <Checkbox value={SELECT_ALL} checked={allChecked} onClick={() => setAll(!allChecked)} />
      {items.map(item => <Checkbox key={item.value} value={item.value} checked={item.checked} onClick={() => setByValue(item.value, !item.checked)} /> )}
    </div>
  );
}

export default App;
