import { useState, useRef, useEffect} from 'react'

import styled from 'styled-components'

const Dots = styled.img`
    cursor: pointer;
`

const StyledContainerMenu = styled.div`
 position: relative;
`

const StyledMenus = styled.div`
    position: absolute;
    width: 200px;
    box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.20);
    right: 0;
    background-color: ${props => props.theme.white};

    display: ${props => props.show ? 'block' : 'none' };
`

const StyledOption = styled.div`
    padding: 15px;
    cursor: pointer;
    
    :hover{
        background-color: ${props => props.theme.inputBackground};
    }
`

const Menu = ({ options = [] }) => {
    const [show, setShow] = useState(false)
    const menuRef = useRef(null)
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShow(false)
            }
        }

        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [menuRef])

    const handleClick = (onClick) => {
        setShow(false)
        onClick()
    }

    return(
        <>
         <div>
            <Dots src="/three-dots.svg" height="20px" onClick={() => setShow(!show)} />
            <StyledContainerMenu>
                <StyledMenus show={show} ref={menuRef} >
                    {
                        options.map((option, pos) => 
                        <StyledOption 
                        key={`menu-option-${pos}`}
                        onClick={() => handleClick(option.onClick)}
                        >
                            {option.text}
                        </StyledOption>)
                    }
                </StyledMenus>
            </StyledContainerMenu>
         </div>
        </>
    )
}

export default Menu