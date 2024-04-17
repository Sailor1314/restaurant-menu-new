// components/UseProfile.js

import { useEffect, useState } from 'react';

const useProfile = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Simulating an API call to fetch user profile data
        const response = await fetch('/api/user-profile');
        if (!response.ok) {
          throw new Error('Failed to fetch user profile');
        }
        const profileData = await response.json();
        setData(profileData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { loading, data, error };
};

export default useProfile;
