import { clear } from 'console';
import React from 'react';

function App() {

  interface SStorage<T> {
    [key: string]: T
  }
  class LocalStorage<T> {
    private storage: SStorage<T> = {
    set(key: string, value: T){
      this.storage[key] = value;
    }
    remove(key: string){
      delete this.storage[key]
    }
    get(key: string): T {
      return this.storage[key]
    }
    clear(){
      this.storage = {}
    }
    }
  }

  return (
    <div>

    </div>
  );
}

export default App;
