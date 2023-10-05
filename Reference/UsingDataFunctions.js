// In your page component file, e.g., [userId].js

import { fetchUserDetail } from '../path-to-your-function';

export async function getServerSideProps(context) {
  const userId = context.params.userId;
  
  const userDetails = await fetchUserDetail(userId);
  
  return {
    props: {
      userDetails
    }
  };
}

const UserPage = ({ userDetails }) => {
  return (
    <div>
      {/* Render userDetails here */}
    </div>
  );
};

export default UserPage;




// In your page component file, e.g., [userId].js

import { fetchUserDetail } from '../path-to-your-function';

export async function getStaticProps(context) {
  const userId = context.params.userId;
  
  const userDetails = await fetchUserDetail(userId);
  
  return {
    props: {
      userDetails
    },
    revalidate: 60 // Re-fetch data at most once every minute
  };
}

export async function getStaticPaths() {
  // You'd somehow fetch or determine all possible user IDs here.
  const paths = [
    { params: { userId: '1' } },
    { params: { userId: '2' } },
    // ... more user IDs
  ];

  return { paths, fallback: 'blocking' };
}

const UserPage = ({ userDetails }) => {
  return (
    <div>
      {/* Render userDetails here */}
    </div>
  );
};

export default UserPage;





// In your page component file, e.g., [userId].js

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchUserDetail } from '../path-to-your-function';

const UserPage = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      const userId = router.query.userId;

      fetchUserDetail(userId)
        .then(data => setUserDetails(data))
        .catch(error => console.error("Error fetching user detail:", error));
    }
  }, [router.isReady, router.query]);

  return (
    <div>
      {/* Render userDetails here */}
    </div>
  );
};

export default UserPage;
