// export async function fetchHashnodeBlogs() {
//   const HASHNODE_API_URL = "https://gql.hashnode.com/";
//   const PUBLICATION_ID = "5f3102923348367b2fc3fc58"; // Replace this with your actual ID

//   const query = `
//     {
//       publication(id: "${PUBLICATION_ID}") {
//         posts(first: 5) {
//           edges {
//             node {
//               title
//               slug
//               brief
//               coverImage
//               dateAdded
//             }
//           }
//         }
//       }
//     }
//   `;

//   try {
//     const response = await fetch(HASHNODE_API_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ query }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     console.log("Hashnode API Response:", data); 
    
//     if (!data?.data?.publication?.posts) {
//       throw new Error("No posts found or API structure changed.");
//     }
//      const posts = data?.data?.user?.publication?.posts?.edges?.map(edge => edge.node) || [];
// return posts;
//     // return data.data.publication.posts;
//   } catch (error) {
//     console.error("Error fetching Hashnode blogs:", error);
//     return [];
//   }
// }
export async function fetchHashnodeBlogs() {
  const HASHNODE_API_URL = "https://gql.hashnode.com/";
  const HASHNODE_USERNAME = "ebuntoday"; // Replace with your Hashnode username

  const query = `
    {
      user(username: "${HASHNODE_USERNAME}") {
        publication {
          posts(first: 5) {
            edges {
              node {
                title
                slug
                brief
                coverImage
                dateAdded
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    const posts = data?.data?.user?.publication?.posts?.edges?.map(edge => edge.node) || [];
    return posts;
  } catch (error) {
    console.error("Error fetching Hashnode blogs:", error);
    return [];
  }
}
