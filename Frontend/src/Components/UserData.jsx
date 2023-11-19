import React from 'react';
import axios from 'axios';
import { useEffect,useState } from 'react';




function UserData() {
    const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the API endpoint
    axios.get('http://localhost:4000/getAllUser').then((response) => {
        setData(response.data);
        console.log("done")
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <> 
   
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact number
                </th>
                
            </tr>
        </thead>
        <tbody>
        {data.map((data) => (
            
            <tr key={data.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {data.username}
                </th>
                <td className="px-6 py-4">
                {data.email}
                </td>
                <td className="px-6 py-4">
                {data.number}
                </td>
              
                
            </tr>
            ))}
        </tbody>
    </table>
</div>

    </>
  )
}
export default UserData;


 