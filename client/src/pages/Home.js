import React from 'react'
import Api from '../api';
import { useNavigate } from 'react-router';
import { EntryPage ,PageHeader} from './Style';
import Button from '../components/Button/Button';

import EntryCard from "../components/card/card"

const Home = () => {
  const navigate=useNavigate()
  
  const logOut=()=>{ 
     Api.get('/')
            .then(function (response) {
              localStorage.clear();
              navigate("/login") 
            })
            .catch(function (error) {
              console.log(error);
 
  });

}


  return (
     <EntryPage>
             <PageHeader to="/">Mern Task Home page</PageHeader>

       <EntryCard>
       <Button onClick={logOut} full>Logout</Button>
                          
        </EntryCard>
 
    </EntryPage>
  )
}

export default Home