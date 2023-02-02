import NavBar from './componentes/NavBar/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';


import 'bootstrap/dist/css/bootstrap.min.css';
// import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';


function App(props) { 
   
    return (
        <>
            <NavBar />
            <ItemListContainer saludo='saludo soy ItemList Container' />    

        </>
       
    )
}



export default App

