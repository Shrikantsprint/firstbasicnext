export const fetchUsers = async (filters = {}) => {
  const query = new URLSearchParams(filters).toString();
  const response = await fetch(
    `https://codes.biglittleideas.com/bniapps/api/bni-apis.php?action=getallMemberslist&${query}`
  );
  const data = await response.json();
  //console.table(data.records);
  return data.records;
};

export const fetchUserDetail = async (userId, filters = {}) => {
  // Set action and userId to filters
  filters.action = "getMemberAllInfo";
  filters.searchmemberid = userId;
  // console.log("USERID" + userId);
  const query = new URLSearchParams(filters).toString();

  const response = await fetch(
    `https://codes.biglittleideas.com/bniapps/api/bni-apis.php?${query}`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch user detail: ${response.statusText}`);
  }

  const data = await response.json();
  //console.table(data.records);
  return data.records;
};
