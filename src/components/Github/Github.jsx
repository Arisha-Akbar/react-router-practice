import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-yellow-100 p-4">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full border border-gray-200">
    
        <div className="flex justify-center py-6 bg-gray-50">
          {data.avatar_url ? (
            <img
              src={data.avatar_url}
              alt="GitHub profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
            />
          ) : (
            <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
              No avatar
            </div>
          )}
        </div>


        <div className="p-6 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {data.name || data.login}
          </h2>
          <p className="text-sm text-gray-500 mb-4">@{data.login}</p>

          <div className="flex justify-around py-3 border-t border-b border-gray-200 my-4">
            <div>
              <p className="text-lg font-semibold text-orange-600">
                {data.public_repos}
              </p>
              <p className="text-xs text-gray-600">Repositories</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-orange-600">
                {data.followers}
              </p>
              <p className="text-xs text-gray-600">Followers</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-orange-600">
                {data.following}
              </p>
              <p className="text-xs text-gray-600">Following</p>
            </div>
          </div>

          {data.bio && (
            <p className="text-gray-700 text-sm italic mb-4">"{data.bio}"</p>
          )}

          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-orange-600 text-white font-medium rounded-full hover:bg-orange-700 transition duration-200 shadow hover:shadow-md"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Github;

export const githubLoaderInfo = async () => {
  const response = await fetch("https://api.github.com/users/Arisha-Akbar");

  if (!response.ok) {
    throw new Error("GitHub user not found");
  }

  return response.json();
};
