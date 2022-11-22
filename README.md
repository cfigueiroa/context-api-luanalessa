# <p align = "center">Context API</p>
</br>
<p align="center"><img width="200px" src="https://user-images.githubusercontent.com/72531277/167236594-a7739e0a-3eec-45f0-a201-649283610069.gif"/></p>

</br>
<p align="center"></p>

# 🏁 Context API 

Context API é uma maneira super bacana de passar estados pelos componentes sem precisar utilizar `props`, permitindo a atualização desse estado em qualquer parte da sua aplicação. Claro que em algumas situações é mais adequado o uso das props, mas , à medida que vamos aumentando àrvore de elementos, pode ficar bem chatinho **transportar** essas informações sem o uso de um *gerenciador de estado global*. E ~~caso você não tenha notado~~ esse é o trabalho da Context API. 😅 

<p align="center"><img width=600px" src="https://user-images.githubusercontent.com/72531277/167280337-bc0585b0-14b5-493b-a306-7c1c28070210.png"/></p>
</br>

👾 Em resumo, é só imaginar que a Context API é um portal entre os componentes por onde você vai compartilhar as informações, independente se são elementos que se comunicam ao não. Belezinha? 
</br>

 <p align="center"><img width=600px" src="https://user-images.githubusercontent.com/72531277/167478430-d58e64ac-766f-4e08-bf03-4acd594e8eac.gif"/></p>
</br>

### ❔ Como utilizar 
 
1. Criar um diretório próprio para colocar o seu contexto.
<p align="center"><img width=400px" src="https://user-images.githubusercontent.com/72531277/167435824-609571e4-ce90-418b-a0ba-695069736ac6.png"/></p>
</br>

2. Criar um arquivo `index.jsx` e dentro dele importar o `createContext` do react.
</br>
  
```javascript
import React, {createContext, useState} from 'react';
```
  
3. Criar e exportar o seu *context* (no mesmo arquivo)
</br>

```javascript
export const MovieContext = createContext({});
```
</br>

👾 Detalhe: cada objeto Contexto (context) vem com um bicho chamado *Provider* e é através dele que você vai conseguir aplicar mudanças no seu context. E isso acontece porque ele aceita uma `props` ~eu nao disse que nao usaríamos props asuhuahs~ e todos os componentes filhos terão acesso a ela. Então no próximo passo vamos criar um provider chamado de *MovieProvider*, onde você vai inserir todas os estados que deseja utilizar na sua aplicação.
</br>

4. Criar e exporta o seu *provider* (no mesmo arquivo)
</br>
 
```javascript
export const MovieProvider = (props) => {
    const [ movies, setMovies] = useState(()=>{
        api.get('http://localhost:8000/home')
        .then(response => { setMovies(response.data)
        .catch(err => console.log(err))
    });

    const [ genres, setGenres ] = useState(()=>{
        api.get('http://localhost:8000/home/genres')
        .then(response => setGenres(response.data))
        .catch(err => console.log(err))
    });

    const [ selected, setSelected ] = useState();
   
    return(
        <MovieContext.Provider
            value={{
                movies,
                genres,
                selected,
                setSelected,
            }}
        >
            {props.children}
        </MovieContext.Provider>
    )
}
```
5. Importar o `provider` no app, e utilizá-lo bem no topo da hierarquia de componentes para criar a sua camada de estados.
</br>

```javascript
import React from 'react';
import { MovieProvider } from './providers/index.jsx';
import Routes from './routes/index.jsx'

function App() {
  return (
    <MovieProvider>
      <GlobalStyle />
      <Routes />
    </MovieProvider>

  );
}

export default App;
```
6. Agora é só importar o *contexto* criado para utilizar as informações do seu provider. 
```javascript
import React, { useContext, useState } from 'react'
import { MovieContext } from '../../providers/index.jsx';
    
import Header from '../../components/Header'
import MovieList from '../../components/MovieList'
    
const Home = () => {   
    const { movies, genres } = useContext(MovieContext);
    
    return (
        <>
            <Header page="home" className="clicked" ></Header>            
            { genres ? genres.map(genre => 
                <MovieList title={genre.title} movies={movies}/>
            ) :  null}
        </>
    )
}

export default Home;
```  
 
###  <p align = "center">Prontinho, passar perrengue com props nunca mais! 😅 </p>

[Créditos](https://gist.github.com/luanalessa/2b3a5d5208f74fa252661af9a8d2754c) [luanalessa](https://gist.github.com/luanalessa)