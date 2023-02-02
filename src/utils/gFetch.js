let productos = [
    { id: '1' ,categoria: 'remeras', name: "Oversize Adiddas blanca",   price: 37, foto:'https://woker.vtexassets.com/arquivos/ids/269207-800-800?v=637831964579230000&width=800&height=800&aspect=true' },
    { id: '2' ,categoria: 'remeras', name: "Oversize Negra", price: 27, foto:'https://www.tradeinn.com/f/13855/138558811/mister-tee-camiseta-movie-oversize.jpg' },
    { id: '3' ,categoria: 'remeras', name: "Remera Vans azul",    price: 40, foto:'https://newsport.vteximg.com.br/arquivos/ids/13305138-455-588/VN00GGGNAV-A.jpg?v=637855490471570000' },
    { id: '4' ,categoria: 'bermudas', name: "Bermuda Nike", price: 55, foto:'https://sporting.vtexassets.com/arquivos/ids/585376-800-800?v=637946173012000000&width=800&height=800&aspect=true' },
    { id: '5' ,categoria: 'bermudas', name: "Bermuda Addidas", price: 11, foto:'https://sporting.vtexassets.com/arquivos/ids/626515-800-800?v=637986715691530000&width=800&height=800&aspect=true' },
    { id: '6' ,categoria: 'bermudas', name: "Bermuda Marron", price: 19, foto:'https://http2.mlstatic.com/D_NQ_NP_977316-MLA44180113735_112020-O.webp' },
    { id: '7' ,categoria: 'bermudas', name: "Bermuda Vans gris", price: 2, foto:'https://sevensport.vteximg.com.br/arquivos/ids/628136-500-500/VN0A7YDT02FSMUA_1.jpg?v=638083592717800000' }  
  ] 
  
  export const gFetch = () => {
    return new Promise(( res, rej )=>{    
      setTimeout(()=>{
        res( productos )
      }, 5000) 
   })
  
  } 
