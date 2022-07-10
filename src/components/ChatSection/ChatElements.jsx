import styled from 'styled-components'

export const ChatMain = styled.main``
export const ChatSection = styled.section`
   margin: 0 auto;

   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (min-width: 600px) {
      max-width: 580px;
   }
   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      max-width: 460px;
      margin: 2rem;
   }
`

export const ChatHero = styled.header``

export const HeroTitle = styled.h1`
   display: flex;
   gap: 0.3rem;
`
export const HeroIcon = styled.i`
display: flex;
`
export const HeroButton = styled.a``
export const HeroButtonIcon = styled.i``

export const LogOutText = styled.span`
   /* ========== MEDIA QUERIES (Small) ========== */
   @media screen and (max-width: 600px) {
      display: none;
   }
`

export const LogOutIcon = styled.span`
   display: flex; 
`