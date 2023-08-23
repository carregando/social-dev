import styled from "styled-components";

const PostContainer = styled.div`
 background-color: ${props => props.theme.white};
 padding: 20px;
 border-radius: 10px;
`

const StyledUsername = styled.p`
 font-weight: bold;
`

const StyledDate = styled.p`
 font-size: 12px;
 margin-top: 5px;
`

const ContainerText = styled.div`
 margin-top: 20px;
`

function Post () {
  return(
    <>
     <div>
       <PostContainer>
         <StyledUsername>@username</StyledUsername>
         <StyledDate>01 de Janeiro de 2000</StyledDate>
         <ContainerText>
           Esse é um texto teste.
         </ContainerText>
       </PostContainer>
     </div>
    </>
  )
}

export default Post