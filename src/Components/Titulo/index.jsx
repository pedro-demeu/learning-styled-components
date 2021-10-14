import styled from 'styled-components';

// Sem styled components

/*const Titulo = ({ children }) => {
  return <h1 className="titulo">{children}</h1>;
};*/

// Com styled components
const Titulo = styled.h1 // styled.elementoHTML ` css aqui `
`
  color: ${({theme}) => theme.text};
  padding: 25px 0;

`

export default Titulo;
