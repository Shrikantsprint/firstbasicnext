import { useRouter } from "next/router";
import { fetchUserDetail } from "../../utils/apis/user";
const UserDetail = ({ userDetails }) => {
  const router = useRouter();
  const { slug } = router.query;
  console.table(userDetails);
  return (
    <div>
      <h1>
        User Detail for ID: {slug} {userDetails[0].membername}
      </h1>
      {/* Your other code */}
    </div>
  );
};

export async function getServerSideProps(context) {
  const userId = context.params.slug;
  const additionalFilters = {
    // ... other filters if needed
  };
  const userDetails = await fetchUserDetail(userId, additionalFilters);

  return {
    props: {
      userDetails,
    },
  };
}

export default UserDetail;
