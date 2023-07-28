import { useParams } from 'react-router-dom';
import Profile from '../../pages/Profile';
import { useEffect, useState } from 'react';
import { ThemeContext } from '../../utils/context';

function ProfileContainer() {
      const { id } = useParams();
      return <Profile id={id} />;
}


export default ProfileContainer;

