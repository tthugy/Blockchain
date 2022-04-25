import React from 'react';

function App() {

  type Words = {
    [key: string]: string
  }

  class Dict {
    private words: Words
    constructor(){
      this.words = {}
    }
    add(word: Word){
      if(this.words[word.term] === undefined){
        this.words[word.term] = word.def;
      }
    }
    def(term: string){
      return this.words[term]
    }
  }

  class Word {
    constructor(
      public term: string,
      public def: string
    ) {}
  }

  const kimchi = new Word("kimchi", "한국의 음식");

  const dict = new Dict()

  dict.add(kimchi);
  dict.def("kimchi");

  return (
    <div>

    </div>
  );
}

export default App;
