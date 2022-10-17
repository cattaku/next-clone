import { NextPage } from 'next';
import  NavGNB  from '../../app.components/nav/NavGNB'
import TopBannerComponent from './topBanner'
import Page_FriendA1 from './a1';


const Page_FriendIndex: NextPage = () => {
  return (
    <>
      <NavGNB />
      <TopBannerComponent />
      <Page_FriendA1 />
    </>
   
  )
}

export default Page_FriendIndex