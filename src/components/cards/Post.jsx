import styled from "styled-components"
import moment from "moment/moment"

import Menu from "../navigation/Menu"

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

const ContainerMenu = styled.div`
  float: right;
`

function Post ({ text, user, date }) {
  const handleEdit = () => {
    console.log("EDITAR PUBLICACAO")
  }
  
  const handleDelete = () => {
    console.log("DELETAR PUBLICACAO")
  }
  
  return(
    <>
     <div>
       <PostContainer>
        <ContainerMenu>
          <Menu
            options={[
              {
                text: 'Editar publicação',
                onClick: handleEdit,
              },
              {
                text: 'Deletar publicação',
                onClick: handleDelete,
              }
            ]}
          />
        </ContainerMenu>
         <StyledUsername>@{user}</StyledUsername>
         <StyledDate>{moment(date).format('LLL')}</StyledDate>
         <ContainerText>
           {text}
         </ContainerText>
       </PostContainer>
     </div>
    </>
  )
}

export default Post